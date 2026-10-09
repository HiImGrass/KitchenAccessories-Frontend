'use client';

import React from 'react';
import { Order } from '@/types/profile';

interface ProfileOrdersListProps {
  orders: Order[];
  onViewOrderDetails: (orderId: string) => void;
}

export const ProfileOrdersList: React.FC<ProfileOrdersListProps> = ({
  orders,
  onViewOrderDetails,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 space-y-4">
      <h2 className="text-xl font-semibold text-olive-gray">Recent Orders</h2>
      {orders.length === 0 ? (
        <p className="text-sm text-olive-gray/70">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 rounded-xl border border-black/5 hover:border-black/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-olive-gray">{order.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-olive-gray/70 mt-1">
                  Placed on {order.date} • {order.itemsCount} items
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end space-x-4">
                <span className="font-bold text-olive-gray">${order.total.toFixed(2)}</span>
                <button
                  onClick={() => onViewOrderDetails(order.id)}
                  className="px-3 py-1.5 rounded-lg bg-canvas-cream text-xs font-semibold text-olive-gray hover:bg-black/5 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};