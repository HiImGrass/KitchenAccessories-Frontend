import { UserProfile, Order } from '@/types/profile';

export const INITIAL_PROFILE_USER: UserProfile = {
  name: 'Eleanor Vance',
  email: 'eleanor.vance@example.com',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD9cXJx025d9QCc8S8TwKZcaKg8BxvsIWacfd1zf2-sGAgaElkZzA7IdeAM2bzdVWlXJhrjyuJ9P_EehEAe-QB_oi0chpUqgE385fdtNGvH6UAldzEjiMRF4B9ZU2GW7Bvu8uSQsyncCS3iA3qr8vTnD7PT15cAzlOodpuu1hmrs7WDxK0KnirImAA0rHjGu8_xiArqE6ggM0jicQ_bPdpzOWNp4OJIYPgHHkrpO9FJ7nfYYMKUgYaP',
  role: 'Artisan Member',
  memberSince: 'March 2023',
  phone: '+1 (555) 234-5678',
  shippingAddress: '742 Evergreen Terrace, Springfield, OR 97477',
};

export const INITIAL_PROFILE_ORDERS: Order[] = [
  {
    id: 'ORD-2026-8921',
    date: 'October 2, 2026',
    status: 'Processing',
    total: 245.0,
    itemsCount: 3,
    items: [
      { id: '1', name: 'Cast Iron Dutch Oven 5.5 Qt', quantity: 1, price: 180.0 },
      { id: '2', name: 'Organic Linen Apron', quantity: 2, price: 32.5 },
    ],
  },
  {
    id: 'ORD-2026-7410',
    date: 'September 15, 2026',
    status: 'Delivered',
    total: 112.5,
    itemsCount: 2,
    items: [
      { id: '3', name: 'Artisan Wooden Rolling Pin', quantity: 1, price: 45.0 },
      { id: '4', name: 'Stainless Steel Measuring Spoons', quantity: 1, price: 67.5 },
    ],
  },
];