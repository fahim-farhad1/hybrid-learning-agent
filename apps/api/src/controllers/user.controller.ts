
// import type { Request, Response } from "express";
// // import { createUser as createUserService } from "../services/user.service.js";
// import { createUser as createUserService } from "../services/user.service.js";
// import type { CreateUserInput } from "../schemas/user.schema.js";
// import { sendSuccess } from "../utils/api-response.js";
// import {
//   createUser as createUserService,
//   getUsers as getUsersService,
// } from "../services/user.service.js";
import type { Request, Response } from "express";
import type { CreateUserInput } from "../schemas/user.schema.js";
import { sendSuccess } from "../utils/api-response.js";
import {
  createUser as createUserService,
  getUsers as getUsersService,
} from "../services/user.service.js";

export const createUser = async (
  req: Request,
  res: Response,
) => {
  const user = await createUserService(
    req.body as CreateUserInput,
  );

  return sendSuccess(
    res,
    "User created successfully",
    user,
    201,
  );
};


export const getUsers = async (
  req: Request,
  res: Response,
) => {
  const users = await getUsersService();

  return sendSuccess(
    res,
    "Users retrieved successfully",
    users,
  );
};

