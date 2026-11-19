
import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .max(150, "Task title cannot exceed 150 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  priority: z
    .enum(["LOW", "MEDIUM", "HIGH"])
    .default("MEDIUM"),

  estimatedMinutes: z
    .number()
    .int()
    .positive("Estimated minutes must be positive")
    .optional(),

  scheduledDate: z
    .iso
    .datetime({ offset: true })
    .optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
