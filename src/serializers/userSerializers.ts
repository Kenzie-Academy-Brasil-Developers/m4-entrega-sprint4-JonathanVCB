import {
  IUserLogin,
  IUserRequest,
  IUserUpdate,
} from "./../interfaces/users/index";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser } from "./../interfaces/users/index";

export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export const userResponseSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  isActive: yup.boolean().notRequired(),
});

export const userResponseSerializerArray: SchemaOf<IUser[]> = yup.array(
  userResponseSerializer
);

export const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});
