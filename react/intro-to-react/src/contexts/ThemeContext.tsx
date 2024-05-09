import { createContext, useState } from "react";

type ThemeControl = {
    theme: Theme;
    toggleTheme: () => void;
}

type Theme = {
    color: string;
    backgroundColor: string;
}

const darkMode: Theme = {
    color: '#E4E6EB',
    backgroundColor: '#121212'
}

const lightMode: Theme = {
    color: '#121212',
    backgroundColor: '#E4E6EB'
}

// Default value is for if they try to access the value outside a context

export const ThemeContext = createContext<ThemeControl>({theme: lightMode, toggleTheme: () => {}});

// ThemeContext.Provider is the box you draw around the DOM tree
// ThemeContext.Consumer used to be used to read from the context (now done with useContext)

// ThemeProvider Component

type ThemeProviderProps = {
    children?: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    // Managing the state which will be the current theme
    const [currentTheme, setCurrentTheme] = useState(lightMode);

    const toggleTheme = () => {
        if (currentTheme === lightMode) {
            setCurrentTheme(darkMode);
        } else {
            setCurrentTheme(lightMode);
        }
    }
    
    return (
        <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}