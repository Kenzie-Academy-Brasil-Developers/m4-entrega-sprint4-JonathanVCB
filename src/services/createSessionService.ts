import { IUserLogin } from "../interfaces/users";
import Jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import "dotenv/config";
import { Apperror } from "../errors/appError";

const createSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getTreeRepository(User);
  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new Apperror("email or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Apperror("email or password invalid", 403);
  }
  const token = Jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;
