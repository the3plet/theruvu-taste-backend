import { UserRepository } from "../repositories/user.repositories";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
export const UserService = {
  register: async (name: string, email: string, password: string) => {
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) throw new Error("User Already Exist");

    const hashedPassord = await bcrypt.hash(password, 10);
    const user = await UserRepository.create({
      name,
      email,
      password: hashedPassord,
    });
    return { id: user.id, name: user.name, email: user.email };
  },
  login: async (email: string, password: string) => {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("Invalid Credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid Credentials");
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    return { token, user: { id: user.id, name: user.name, email: user.email } };
  },
};
