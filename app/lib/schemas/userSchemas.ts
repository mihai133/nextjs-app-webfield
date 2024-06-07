import { z } from "zod";

export const SignUpSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z.string().min(1, 'Password is required').min(6, "Password requires at least 6 characters"),
  confirmPassword: z.string().min(1, 'Confirm password is required').min(6, "Password requires at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const LogInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z.string().min(1, 'Password is required').min(6, "Password requires at least 6 characters"),
});
