
import { prisma } from "../lib/prisma.js";
import type { CreateUserInput } from "../schemas/user.schema.js";

export const createUser = async (data: CreateUserInput) => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
};


export const getUsers = async () => {
  return prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

