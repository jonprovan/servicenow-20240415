import { createContext } from "react";

type UserDetails = {
    firstName: string;
    lastName: string;
    language: string;
}

const defaultValue: UserDetails = {
    firstName: 'Juan',
    lastName: 'Doe',
    language: 'English'
}

export const UserContext = createContext<UserDetails>(defaultValue);

type UserProviderProps = {
    children?: React.ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
    return (
        <UserContext.Provider value={defaultValue}>
            {children}
        </UserContext.Provider>
    );
}