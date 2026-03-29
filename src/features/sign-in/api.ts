import { apiRequest, extractToken } from 'shared/lib/authExtraction';
import { API_URLS } from 'shared/constants/auth.ts';
import type { RegisterLoginResponse } from 'shared/model/auth.ts';

export async function apiLogin(
  email: string,
  password: string
): Promise<string> {
  const payload = await apiRequest<RegisterLoginResponse>(API_URLS.signin, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  const token = extractToken<RegisterLoginResponse>(payload);
  if (!token)
    throw new Error('Login succeeded but token was not found in response');
  return token;
}
