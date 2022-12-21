import { Request, Response, NextFunction } from "express";
import { Apperror } from "./appError";

const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof Apperror) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "internal server error" });
};

export default handleError;
