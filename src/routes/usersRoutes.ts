import {
  createUserController,
  deleteUserController,
  listUsersController,
  updatedUserController,
} from "./../controllers/usersControllers";
import { Router } from "express";
import dataIsValidMiddleware from "../middlewares/dataIsValidMiddleware";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/userSerializers";
import authMiddleware from "../middlewares/AuthMiddleware";
import isAdminMiddleware from "../middlewares/isAdminMIddleware";
import updateValidationMiddleware from "../middlewares/updateValidationMiddleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  dataIsValidMiddleware(userSerializer),
  createUserController
);
usersRoutes.get("", authMiddleware, isAdminMiddleware, listUsersController);
usersRoutes.patch(
  "/:id",
  updateValidationMiddleware,
  dataIsValidMiddleware(userUpdateSerializer),
  authMiddleware,
  updatedUserController
);
usersRoutes.delete(
  "/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteUserController
);

export default usersRoutes;
