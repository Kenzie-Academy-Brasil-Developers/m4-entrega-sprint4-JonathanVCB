import { IUser } from "./../interfaces/users/index";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import { userResponseSerializerArray } from "../serializers/userSerializers";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersResponse = userResponseSerializerArray.validate(users, {
    stripUnknown: true,
  });

  return usersResponse;
};

export default listUsersService;
