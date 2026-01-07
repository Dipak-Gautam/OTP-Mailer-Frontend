import { string, z } from "zod";

export const INewPasswordSchema = z
  .object({
    newPassword: string().min(8, "password must be at least 8 character long"),
    confirmPassword: string().min(8, "password must be min 8 character long."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password and confirm password must match",
  });

export type INewPassword = z.infer<typeof INewPasswordSchema>;
