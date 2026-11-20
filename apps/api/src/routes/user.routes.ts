
import { Router } from "express";
// import { createUser } from "../controllers/user.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createUserSchema } from "../schemas/user.schema.js";
import {
  createUser,
  getUsers,
} from "../controllers/user.controller.js";

const router = Router();

router.post(
  "/",
  validateBody(createUserSchema),
  createUser,
);

router.get("/", getUsers);
export default router;
