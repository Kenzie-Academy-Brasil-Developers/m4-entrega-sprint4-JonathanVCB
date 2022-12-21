import { IUserRequest, IUser } from "./../interfaces/users/index";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import { userResponseSerializer } from "../serializers/userSerializers";
import { Apperror } from "../errors/appError";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const alreadyExist = await userRepository.findOneBy({
    email: userData.email,
  });

  console.log(alreadyExist);

  if (alreadyExist) {
    throw new Apperror("Email already exist");
  }

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userResponse = await userResponseSerializer.validate(user, {
    stripUnknown: true,
  });

  return userResponse;
};

export default createUserService;
