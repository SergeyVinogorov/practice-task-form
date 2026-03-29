import { API_BASE_URL } from '../constants/auth.ts';
import type { User, UserMe } from '../model/auth.ts';

export async function apiRequest<T>(
  path: string,
  options: RequestInit & { token?: string | null } = {}
): Promise<T> {
  const { token, ...rest } = options;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(rest.headers ?? {}),
      ...(token ? { Authorization: `${token}` } : {}),
    },
  });

  if (!res.ok) {
    let message = `Request failed: ${res.status}`;
    try {
      const err = await res.json();
      message = err?.message ?? message;
    } catch {}
    throw new Error(message);
  }

  return (await res.json()) as T;
}

export function extractToken<T extends { accessToken: string }>(
  payload: T
): string | null {
  return payload?.accessToken ?? null;
}

export function extractUser<T extends UserMe>(payload: T): User | null {
  const u = { ...payload };
  if (!u || typeof u !== 'object') return null;
  return { id: u.id, name: u.name, email: u.email };
}
