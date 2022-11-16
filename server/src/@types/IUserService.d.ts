import { User } from "../entities/User";

export interface IUserSave {
    username: string;
    password: string;
}

export interface IUserLogin {
    userId: number;
    token: string;
}

export default interface IUserService {
    save({ username, password }: IUserSave): Promise<User | string>;
    login(username: string, password: string): Promise<IUserLogin | string>;
}