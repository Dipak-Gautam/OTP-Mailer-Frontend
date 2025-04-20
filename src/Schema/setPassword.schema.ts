import { string, z } from "zod";

export const IPasswordSchema = z
  .object({
    password: string().min(8, "password must be at least 8 character long."),
    confirmPassword: string().min(
      8,
      "password must be at least 8 character long."
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password and confirm password must match",
  });

export type IPassword = z.infer<typeof IPasswordSchema>;
