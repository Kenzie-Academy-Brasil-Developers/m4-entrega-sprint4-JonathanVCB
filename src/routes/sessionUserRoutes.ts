import { userLoginSerializer } from "./../serializers/userSerializers";
import { createSessionController } from "./../controllers/sessionController";
import { Router } from "express";
import dataIsValidMiddleware from "../middlewares/dataIsValidMiddleware";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  dataIsValidMiddleware(userLoginSerializer),
  createSessionController
);

export default sessionRoutes;
