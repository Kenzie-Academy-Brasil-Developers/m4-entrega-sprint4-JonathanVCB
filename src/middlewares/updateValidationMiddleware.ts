import { Request, Response, NextFunction } from "express";

const updateValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validate = Object.keys(req.body);

  if (validate.includes("id")) {
    return res.status(401).json({ message: "not authorized" });
  }

  if (validate.includes("isAdm")) {
    return res.status(401).json({ message: "not authorized" });
  }

  if (validate.includes("isActive")) {
    return res.status(401).json({ message: "not authorized" });
  }

  return next();
};

export default updateValidationMiddleware;
