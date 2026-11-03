import type { UserProfile } from '@/types/profile';
import type { AuthResponse } from '@/lib/dummyjson';
import { DUMMY_JSON_BASE_URL } from '@/lib/checkEnvironment';

/** Dữ liệu POST /auth/login mà LoginForm đã lưu vào localStorage "user" */
export function getStoredUser(): AuthResponse | null {
  try {
    const raw = localStorage.getItem('user');
    return raw ? (JSON.parse(raw) as AuthResponse) : null;
  } catch {
    return null;
  }
}

function capitalize(value: string) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

/**
 * /auth/login chỉ trả id, tên, email, ảnh... (không có phone/địa chỉ), nên gọi
 * thêm GET /users/{id} để lấy đầy đủ. Nếu lỗi mạng thì dùng tạm dữ liệu lúc login.
 */
export async function fetchProfile(stored: AuthResponse): Promise<UserProfile> {
  const fromLogin: UserProfile = {
    id: stored.id,
    name: `${stored.firstName} ${stored.lastName}`.trim() || stored.username,
    email: stored.email,
    phone: '',
    shippingAddress: '',
    avatarUrl: stored.image ?? '',
    role: 'User',
    memberSince: '',
  };

  try {
    const res = await fetch(`${DUMMY_JSON_BASE_URL}/users/${stored.id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const shippingAddress = [data.address?.address, data.address?.city, data.address?.state]
      .filter(Boolean)
      .join(', ');

    return {
      ...fromLogin,
      name: `${data.firstName} ${data.lastName}`.trim() || fromLogin.name,
      email: data.email ?? fromLogin.email,
      phone: data.phone ?? '',
      shippingAddress,
      avatarUrl: data.image ?? fromLogin.avatarUrl,
      role: capitalize(data.role ?? 'user'),
    };
  } catch {
    return fromLogin;
  }
}