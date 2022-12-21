import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const dataIsValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validatedData;
      return next();
    } catch (error) {
      return res.status(400).json({ message: error.erros });
    }
  };

export default dataIsValidMiddleware;
