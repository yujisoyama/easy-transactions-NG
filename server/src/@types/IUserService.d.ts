import { User } from "../entities/User";

export interface IUserSave {
    username: string;
    password: string;
}

export interface IUserSaveError {
    message: string;
    fieldError: string;
}

export interface IUserLogin {
    userId: number;
    token: string;
}

export default interface IUserService {
    save({ username, password }: IUserSave): Promise<string | IUserSaveError>;
    login(username: string, password: string): Promise<IUserLogin | string>;
}