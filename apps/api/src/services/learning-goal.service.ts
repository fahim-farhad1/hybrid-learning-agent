
import { prisma } from "../lib/prisma.js";
import type { CreateLearningGoalInput } from "../schemas/learning-goal.schema.js";
import { AppError } from "../utils/app-error.js";

export const createLearningGoal = async (
  data: CreateLearningGoalInput,
) => {
  const user = await prisma.user.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });

  if (!user) {
    throw new AppError(404, "Personal user profile not found");
  }

  return prisma.learningGoal.create({
    data: {
      title: data.title,
      description: data.description,
      targetDate: data.targetDate
        ? new Date(data.targetDate)
        : undefined,
      userId: user.id,
    },
  });
};
