import { User } from "../entities/User";

export interface IUserSave {
    username: string;
    password: string;
}

export default interface IUserService {
    save({ username, password }: IUserSave): Promise<User | string>;
}