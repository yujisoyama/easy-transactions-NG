interface IAccount {
    id: number;
    balance: number;
}

export interface IUser {
    id: number;
    username: string;
    account: IAccount;
}

export interface IUserContextProps {
    user: IUser;
    token: string;
    authenticated: boolean | undefined;
    authErrorMessage: string;
    setUser: React.Dispatch<React.SetStateAction<IUserContext>>;
    setToken: React.Dispatch<React.SetStateAction<UserType>>;
    setAuthenticated: React.Dispatch<React.SetStateAction<UserType>>;
    setAuthErrorMessage: React.Dispatch<React.SetStateAction<UserType>>;
    getAccount(token: string);
}