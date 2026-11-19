
import type { Request, Response } from "express";
import { sendSuccess } from "../utils/api-response.js";

export const getHealth = (
  _req: Request,
  res: Response,
) => {
  return sendSuccess(
    res,
    "Hybrid Learning Agent API is running",
    {
      status: "healthy",
      timestamp: new Date().toISOString(),
    },
  );
};
