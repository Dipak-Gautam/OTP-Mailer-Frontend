import { string, z } from "zod";

export const RegisterSchemaFirst = z.object({
  name: string().min(2, "Name must be min 2 character long."),
  email: string().email("Please enter a valid email."),
});

export type IRegisterPropFirst = z.infer<typeof RegisterSchemaFirst>;
