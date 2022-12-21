import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "invalid token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: error.message });
    }

    req.user = {
      id: decoded.sub,
      isAdmin: decoded.isAdm,
      isActive: decoded.isActive,
    };

    return next();
  });
};

export default authMiddleware;
