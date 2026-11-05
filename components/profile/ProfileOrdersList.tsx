'use client';

import React from 'react';
import { Order } from '@/types/profile';
import { useTranslations } from 'next-intl';

interface ProfileOrdersListProps {
  orders: Order[];
  onViewOrderDetails: (orderId: string) => void;
}

export const ProfileOrdersList: React.FC<ProfileOrdersListProps> = ({
  orders,
  onViewOrderDetails,
}) => {
  const t = useTranslations('profile');
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-4">
      <h2 className="text-xl font-semibold text-olive-gray">{t('recentOrders')}</h2>
      {orders.length === 0 ? (
        <p className="text-sm text-olive-gray/70">{t('noOrders')}</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 rounded-xl border border-outline-variant/30 hover:border-outline transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-olive-gray">{order.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-success-container text-on-success-container'
                        : 'bg-warning-container text-on-warning-container'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-olive-gray/70 mt-1">
                  {t('orderPlaced', { date: order.date, count: order.itemsCount })}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end space-x-4">
                <span className="font-bold text-olive-gray">${order.total.toFixed(2)}</span>
                <button
                  onClick={() => onViewOrderDetails(order.id)}
                  className="px-3 py-1.5 rounded-lg bg-surface-container-low text-xs font-semibold text-olive-gray hover:bg-surface-container transition-colors"
                >
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
