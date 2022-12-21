import { User } from "./../entities/userEntitie";
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";

const deleteUserService = async (userIdParams: string, user: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userIdParams,
  });

  if (!findUser) {
    throw new Apperror("user not exist", 404);
  }

  if (!findUser.isActive) {
    throw new Apperror("user is already desactive");
  }

  const deletedUser = userRepository.create({
    ...findUser,
    isActive: false,
  });
  await userRepository.save(deletedUser);

  return {};
};

export default deleteUserService;
