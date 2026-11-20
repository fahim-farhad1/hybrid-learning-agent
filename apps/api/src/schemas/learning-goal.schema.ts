
import { z } from "zod";

export const createLearningGoalSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Goal title is required")
    .max(150, "Goal title cannot exceed 150 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  targetDate: z
    .iso
    .datetime({ offset: true })
    .optional(),
});

export type CreateLearningGoalInput = z.infer<
  typeof createLearningGoalSchema
>;
