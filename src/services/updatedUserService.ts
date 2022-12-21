import { userResponseSerializer } from "./../serializers/userSerializers";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import { Apperror } from "../errors/appError";
import { IUser, IUserUpdate } from "./../interfaces/users/index";

const updatedUserService = async (
  userData: IUserUpdate,
  userIdParams: string,
  user: any
): Promise<object> => {
  if (userIdParams !== user.id && !user.isAdmin) {
    throw new Apperror("user is not authorized", 403);
  }

  console.log(userData);

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userIdParams,
  });

  if (!findUser) {
    throw new Apperror("user not exist", 404);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword = await userResponseSerializer.validate(
    updatedUser,
    {
      abortEarly: false,
      stripUnknown: true,
    }
  );
  return updatedUserWithoutPassword;
};

export default updatedUserService;
