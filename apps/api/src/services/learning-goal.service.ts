
import { prisma } from "../lib/prisma.js";
import type { CreateLearningGoalInput } from "../schemas/learning-goal.schema.js";

export const createLearningGoal = async (
  data: CreateLearningGoalInput,
) => {
  const user = await prisma.user.findFirst({
    orderBy: {
      createdAt: "asc",
    },
  });

  if (!user) {
    throw new Error("Personal user profile not found");
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
