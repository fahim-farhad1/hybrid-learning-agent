
import type { Request, Response } from "express";
import type { CreateLearningGoalInput } from "../schemas/learning-goal.schema.js";
import { createLearningGoal as createLearningGoalService } from "../services/learning-goal.service.js";
import { sendSuccess } from "../utils/api-response.js";

export const createLearningGoal = async (
  req: Request,
  res: Response,
) => {
  const goal = await createLearningGoalService(
    req.body as CreateLearningGoalInput,
  );

  return sendSuccess(
    res,
    "Learning goal created successfully",
    goal,
    201,
  );
};
