import { z } from 'zod';

// Define a schema for the form
export const UserSchema = (type: 'sign-in' | 'sign-up'): z.ZodType<any, any, any> => z.object({
  firstName: type=== 'sign-in' ? z.string().optional(): z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be at most 50 characters'),
    lastName: type=== 'sign-in' ? z.string().optional(): z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be at most 50 characters'),
    state: type=== 'sign-in' ? z.string().optional(): z.string().min(2).max(2),
    postalCode: type=== 'sign-in' ? z.string().optional(): z.string().min(3).max(6),
    dateOfBirth: type=== 'sign-in' ? z.string().optional(): z.string().min(3),
    address: type=== 'sign-in' ? z.string().optional(): z.string().min(3).max(50),
    ssn: type=== 'sign-in' ? z.string().optional(): z.string().min(3),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// export type UserForm = z.infer<typeof UserSchema>;
export type UserForm<T extends 'sign-in' | 'sign-up'> = z.infer<ReturnType<typeof UserSchema>>;

