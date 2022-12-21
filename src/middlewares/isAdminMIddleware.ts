import { Request, Response, NextFunction } from "express";

const isAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isAdmin = req.user.isAdmin;

  if (!isAdmin) {
    return res.status(403).json({ message: "user is not admin" });
  }

  return next();
};

export default isAdminMiddleware;
