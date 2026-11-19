
import type { Request, Response } from "express";
import { sendSuccess } from "../utils/api-response.js";

export const createTask = (
  req: Request,
  res: Response,
) => {
  return sendSuccess(
    res,
    "Task validation successful",
    req.body,
    201,
  );
};
