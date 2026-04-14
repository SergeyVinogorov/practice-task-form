import { z } from 'zod';

export const validateActionStateSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Email is required' : 'Invalid input',
    })
    .trim()
    .toLowerCase()
    .pipe(z.email('Please enter a valid email')),
});

export const AsyncSaveSchema = z.object({
  value: z.string().trim().min(1, 'Value is required'),
});
