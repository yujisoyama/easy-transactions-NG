import { createContext, useContext, useState } from "react";
import { IUser, IUserContextProps } from "../@types/UserContext";
import { api } from "../Api";

const USER_CONTEXT_DEFAULT = {
    user: {
        id: 0,
        username: '',
        account: {
            id: 0,
            balance: 0
        },
    },
    token: '',
    authenticated: false,
    authErrorMessage: '',
    setUser: () => { },
    setToken: () => { },
    setAuthenticated: () => { },
    setAuthErrorMessage: () => { },
    getAccount: () => { },
}

export const UserContext = createContext<IUserContextProps>(USER_CONTEXT_DEFAULT);

export const UserProvider = (props: any) => {
    const [user, setUser] = useState<IUser>(USER_CONTEXT_DEFAULT.user);
    const [token, setToken] = useState<string>(localStorage.getItem("ngtoken") || "");
    const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);
    const [authErrorMessage, setAuthErrorMessage] = useState<string>("");

    const getAccount = async (token: string) => {
        await api.get('/user/account', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            const { id, username, account } = res.data;
            setUser({
                id,
                username,
                account
            })
            setAuthenticated(true);
        }).catch(error => {
            localStorage.setItem("ngtoken", "");
            setAuthErrorMessage(error.response.data.message);
            setAuthenticated(false);
        })
    }

    return (
        <UserContext.Provider value={{ user, token, authenticated, authErrorMessage, setUser, setToken, setAuthenticated, setAuthErrorMessage, getAccount }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);