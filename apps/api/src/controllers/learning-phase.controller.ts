
import type { Request, Response } from "express";
import type { CreateLearningPhaseInput } from "../schemas/learning-phase.schema.js";
import {
  createLearningPhase as createLearningPhaseService,
  getLearningPhases as getLearningPhasesService,
} from "../services/learning-phase.service.js";

import { sendSuccess } from "../utils/api-response.js";

export const createLearningPhase = async (
  req: Request,
  res: Response,
) => {
  const phase = await createLearningPhaseService(
    req.params.goalId as string,
    req.body as CreateLearningPhaseInput,
  );

  return sendSuccess(
    res,
    "Learning phase created successfully",
    phase,
    201,
  );
};

export const getLearningPhases = async (
  req: Request,
  res: Response,
) => {
  const phases = await getLearningPhasesService(
    req.params.goalId as string,
  );

  return sendSuccess(
    res,
    "Learning phases retrieved successfully",
    phases,
  );
};