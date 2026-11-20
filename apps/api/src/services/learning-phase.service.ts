
import { prisma } from "../lib/prisma.js";
import type { CreateLearningPhaseInput } from "../schemas/learning-phase.schema.js";
import { AppError } from "../utils/app-error.js";

export const createLearningPhase = async (
  goalId: string,
  data: CreateLearningPhaseInput,
) => {
  const goal = await prisma.learningGoal.findUnique({
    where: {
      id: goalId,
    },
  });

  if (!goal) {
    throw new AppError(404, "Learning goal not found");
  }

  return prisma.learningPhase.create({
    data: {
      title: data.title,
      description: data.description,
      sequence: data.sequence,
      startDate: data.startDate
        ? new Date(data.startDate)
        : undefined,
      targetDate: data.targetDate
        ? new Date(data.targetDate)
        : undefined,
      goalId,
    },
  });
};

export const getLearningPhases = async (goalId: string) => {
  const goal = await prisma.learningGoal.findUnique({
    where: {
      id: goalId,
    },
  });

  if (!goal) {
    throw new AppError(404, "Learning goal not found");
  }

  return prisma.learningPhase.findMany({
    where: {
      goalId,
    },
    orderBy: {
      sequence: "asc",
    },
  });
};
