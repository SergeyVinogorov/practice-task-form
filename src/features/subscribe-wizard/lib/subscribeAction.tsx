import type { WizardState } from '../types';

function isValidEmail(email: string) {
  return email.includes('@');
}
export async function subscribeAction(
  prev: WizardState,
  formData: FormData
): Promise<WizardState> {
  const intent = String(formData.get('intent') ?? '');

  if (intent === 'step1') {
    const email = String(formData.get('email') ?? '').trim();

    if (!email) {
      return { ...prev, status: 'error', message: 'Email is required.' };
    }
    if (!isValidEmail(email)) {
      return { ...prev, status: 'error', message: 'Email must contain @.' };
    }

    return { step: 2, email, status: 'idle' };
  }

  if (intent === 'back') {
    return { ...prev, step: 1, status: 'idle', message: undefined };
  }

  if (intent === 'confirm') {
    await new Promise((r) => setTimeout(r, 600));
    return {
      step: 3,
      email: prev.email,
      status: 'success',
      message: `Subscribed successfully for ${prev.email}.`,
    };
  }

  return prev;
}
