/**
 * Information about me
 * 
 * NavContext contains my name, and the preferred language
 */
import { useContext } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";

export const Nav = () => {
    return (
        <nav>
            <UserProvider>
                {/* Hello, First Last Name */}
                <Welcome /> 
                {/* Preferred Language */}
                <PreferredLanguage />
            </UserProvider>
            
        </nav>
    );
}

export const Welcome = () => {
    const { firstName, lastName } = useContext(UserContext);

    return (
        <div>Hello, {firstName} {lastName}</div>
    );
}

export const PreferredLanguage = () => {
    const { language } = useContext(UserContext);

    return (
        <div>Language: {language}</div>
    );
}