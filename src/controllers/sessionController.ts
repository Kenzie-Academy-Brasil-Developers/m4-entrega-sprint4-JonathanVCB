import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import createSessionService from "../services/createSessionService";

export const createSessionController = async (req: Request, res: Response) => {
  const sessionData: IUserLogin = req.body;
  const token = await createSessionService(sessionData);

  return res.status(200).json({ token });
};
