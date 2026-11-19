
import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.post("/", validateBody(createTaskSchema), createTask);

export default router;
