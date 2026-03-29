import type { RegisterLoginResponse, UserMe } from 'shared/model/auth';
import { API_URLS } from 'shared/constants/auth';
import { apiRequest, extractToken } from 'shared/lib/authExtraction.ts';

export async function apiRegister(payload: UserMe): Promise<string> {
  const res = await apiRequest<RegisterLoginResponse>(API_URLS.register, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const token = extractToken<RegisterLoginResponse>(res);
  if (!token)
    throw new Error('Login succeeded but token was not found in response');
  return token;
}
