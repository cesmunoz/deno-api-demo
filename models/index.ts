import { v4, z } from "../deps.ts";

export const Todo = z.object({
  id: z.string().default(v4.generate),
  title: z.string(),
  description: z.string(),
  completed: z.boolean().default(false),
  dueDate: z.date().optional(),
});

export type Todo = z.infer<typeof Todo>;