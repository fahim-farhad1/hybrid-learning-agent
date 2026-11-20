
import { Router } from "express";
import {
  createLearningPhase,
  getLearningPhases,
} from "../controllers/learning-phase.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createLearningPhaseSchema } from "../schemas/learning-phase.schema.js";

const router = Router({ mergeParams: true });

router.post(
  "/",
  validateBody(createLearningPhaseSchema),
  createLearningPhase,
);
router.get("/", getLearningPhases);

export default router;
