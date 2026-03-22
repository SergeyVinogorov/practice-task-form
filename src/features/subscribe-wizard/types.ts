export type Step = 1 | 2 | 3;

export type WizardState = {
  step: Step;
  email: string;
  status: 'idle' | 'error' | 'success';
  message?: string;
};
