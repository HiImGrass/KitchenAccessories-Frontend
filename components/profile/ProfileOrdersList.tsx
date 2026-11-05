'use client';

import React, { useEffect, useState } from 'react';
import type { Order } from '@/types/profile';
import { Package, Clock } from 'lucide-react';

export const ProfileOrdersList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('ladle-user-orders');
    if (stored) {
      try {
        setOrders(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse orders', e);
      }
    }
  }, []);

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl bg-surface-white p-8 shadow-sm border border-outline-variant/30 text-center">
        <Package className="w-12 h-12 mx-auto text-sage mb-3 opacity-60" />
        <h3 className="text-lg font-semibold text-on-surface mb-1">Chưa có đơn hàng nào</h3>
        <p className="text-sm text-olive-gray">Các sản phẩm sau khi thanh toán thành công sẽ xuất hiện ở đây.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-on-surface">Sản phẩm đã thanh toán (Lịch sử đơn hàng)</h3>
      {orders.map((order) => (
        <div key={order.id} className="rounded-2xl bg-surface-white p-6 shadow-sm border border-outline-variant/30 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/20 pb-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed">
                {order.status}
              </span>
              <span className="ml-3 text-sm font-medium text-on-surface">Mã đơn: {order.id}</span>
            </div>
            <div className="text-sm text-olive-gray flex items-center gap-1">
              <Clock className="w-4 h-4" /> {order.date}
            </div>
          </div>

          <div className="space-y-4">
            {order.items.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  {/* Sử dụng overflow-visible để huy hiệu số lượng không bị cắt mất */}
                  <div className="relative w-14 h-14 rounded-xl bg-canvas-cream border border-outline-variant/20 overflow-visible flex-shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <Package className="w-6 h-6 text-olive-gray/50" />
                    )}
                    {/* Badge số lượng màu đỏ nằm hoàn toàn trọn vẹn ở góc trên bên phải */}
                    <span className="absolute -top-2 -right-2 bg-terracotta text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md ring-2 ring-surface-white">
                      {item.quantity}
                    </span>
                  </div>

                  <div>
                    <p className="font-medium text-on-surface">{item.name}</p>
                    <p className="text-xs text-olive-gray">Đơn giá: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <span className="font-semibold text-on-surface">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center font-semibold text-on-surface">
            <span>Tổng thanh toán:</span>
            <span className="text-lg text-terracotta">${order.total.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};