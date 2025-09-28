// lib/schema.ts
import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  companyName: z.string().min(2, {
    message: "Company Name is required.",
  }),
  companyEmail: z.string().email({
    message: "A valid email is required.",
  }),
  erpSystem: z.string().min(1, {
    message: "Please select an ERP system.",
  }),
  integrationGoals: z.string().min(1, {
    message: "Please select your integration goals.",
  }),
});

export type FormSchema = z.infer<typeof formSchema>;