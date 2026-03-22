import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Email is required' : 'Invalid input',
    })
    .trim()
    .toLowerCase()
    .pipe(z.email('Please enter a valid email')),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
