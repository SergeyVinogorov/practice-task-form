import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),
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
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
