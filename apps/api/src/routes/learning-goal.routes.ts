
import { Router } from "express";
import { createLearningGoal } from "../controllers/learning-goal.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createLearningGoalSchema } from "../schemas/learning-goal.schema.js";

const router = Router();

router.post(
  "/",
  validateBody(createLearningGoalSchema),
  createLearningGoal,
);

export default router;
