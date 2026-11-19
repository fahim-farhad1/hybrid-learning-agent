
import type { Response } from "express";

interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
}

export const sendSuccess = <T>(
  res: Response,
  message: string,
  data: T,
  statusCode = 200,
) => {
  const response: SuccessResponse<T> = {
    success: true,
    message,
    data,
  };

  return res.status(statusCode).json(response);
};
