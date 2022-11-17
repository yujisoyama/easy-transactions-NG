import IUserService, { IUserLogin, IUserSave, IUserSaveError } from "../@types/IUserService";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";
import { Account } from "../entities/Account";
import { containsNumbers } from "../utils/containsNumbers";
import { containsCapitalLetter } from "../utils/containsCapitalLetter";

import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

class UserService implements IUserService {
    private jwtPass = process.env.JWT_PASS as string;

    async save({ username, password }: IUserSave): Promise<string | IUserSaveError> {
        if (username.indexOf(" ") >= 0) {
            return {
                message: "The username must not contain spaces.",
                fieldError: "username"
            }
        }

        if (username.length < 3) {
            return {
                message: "The username must contain at least 3 characters.",
                fieldError: "username"
            }
        }

        const checkUserAlreadyExists = await userRepository.createQueryBuilder("user")
            .where("LOWER(user.username) = LOWER(:username)", { username })
            .getOne();

        if (checkUserAlreadyExists) {
            return {
                message: "This username is already being used.",
                fieldError: "username"
            }
        }

        if (password.length < 8) {
            return {
                message: "The password must contain at least 8 characters.",
                fieldError: "password"
            }
        }

        if (!containsNumbers(password)) {
            return {
                message: "The password must contain at least 1 number.",
                fieldError: "password"
            }
        }

        if (!containsCapitalLetter(password)) {
            return {
                message: "The password must contain at least 1 capital letter.",
                fieldError: "password"
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAccount = new Account();
        const newUser = new User();
        newUser.username = username;
        newUser.password = hashedPassword;
        newUser.account = newAccount;
        await userRepository.save(newUser);
        return "The user was created successfully";
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