import { z } from 'zod';
export const socialLinkSchema = z.object({
  url: z.string().min(1, 'URL is required').pipe(z.url('Invalid URL')),
});

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
    socialLinks: z.array(socialLinkSchema).min(1, 'Add at least one link'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
