import { IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import { Request, Response } from "express";
import createUserService from "../services/createUserService";
import listUsersService from "../services/listUsersService";
import updatedUserService from "../services/updatedUserService";
import deleteUserService from "../services/deleteUserService";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

export const updatedUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userIdParams: string = req.params.id;

  const updatedUser = await updatedUserService(
    userData,
    userIdParams,
    req.user
  );

  return res.status(200).json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userIdParams: string = req.params.id;

  const userDelete = await deleteUserService(userIdParams, req.user);

  return res.status(204).json(userDelete);
};
