import IUserService, { IUserLogin, IUserSave } from "../@types/IUserService";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";
import { Account } from "../entities/Account";
import { containsNumbers } from "../utils/containsNumbers";
import { containsCapitalLetter } from "../utils/containsCapitalLetter";

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

class UserService implements IUserService {
    private jwtPass = process.env.JWT_PASS as string;

    async save({ username, password }: IUserSave): Promise<User | string> {
        if (username.length < 3) {
            return "The username must contain at least 3 characters.";
        }

        const checkUserAlreadyExists = await userRepository.find({
            where: {
                username
            },
            select: ["id"],
        });

        if (checkUserAlreadyExists.length) {
            return "This username is already being used.";
        }

        if (password.length < 8) {
            return "The password must contain at least 8 characters.";
        }

        if (!containsNumbers(password)) {
            return "The password must contain at least 1 number.";
        }

        if (!containsCapitalLetter(password)) {
            return "The password must contain at least 1 capital letter.";
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAccount = new Account();
        const newUser = new User();
        newUser.username = username;
        newUser.password = hashedPassword;
        newUser.account = newAccount;
        await userRepository.save(newUser);
        return newUser;
    }

    async login(username: string, password: string): Promise<IUserLogin | string> {
        const loginUser = await userRepository.findOneBy({ username });
        if (!loginUser) {
            return "The credentials are invalid.";
        }

        const verifyPassword = await bcrypt.compare(password, loginUser.password);
        if (!verifyPassword) {
            return "The credentials are invalid.";
        }

        const token = jwt.sign({ id: loginUser.id }, this.jwtPass, { expiresIn: "24h" });
        const { id } = loginUser;
        return {
            userId: id,
            token
        };
    }
}
const userService = new UserService();
export default userService;