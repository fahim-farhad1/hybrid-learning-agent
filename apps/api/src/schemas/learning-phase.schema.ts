
import { z } from "zod";

export const createLearningPhaseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Phase title is required")
    .max(150, "Phase title cannot exceed 150 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  sequence: z
    .number()
    .int()
    .positive("Sequence must be a positive integer"),

  startDate: z
    .iso
    .datetime({ offset: true })
    .optional(),

  targetDate: z
    .iso
    .datetime({ offset: true })
    .optional(),
});

export type CreateLearningPhaseInput = z.infer<
  typeof createLearningPhaseSchema
>;
