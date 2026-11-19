
import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/app-error.js";
import { logger } from "../utils/logger.js";
import { env } from "../config/env.js";

export const errorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next,
) => {
  const statusCode =
    err instanceof AppError ? err.statusCode : 500;

  const message =
    err instanceof AppError
      ? err.message
      : "Internal Server Error";

  logger.error({ err }, message);

  res.status(statusCode).json({
    success: false,
    message,
    ...(env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
};
