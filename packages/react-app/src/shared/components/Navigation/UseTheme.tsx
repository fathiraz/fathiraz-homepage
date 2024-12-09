import {createContext, useContext, useEffect, useState} from 'react';
import {getCssFramework} from "../../../../../shared/utils/Helper.ts";

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as Theme) || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);

        // check if bootstrap or tailwind is being used
        switch (getCssFramework()) {
            case 'bootstrap':
                document.documentElement.setAttribute('data-bs-theme', theme);
                break;
            case 'tailwind':
                document.documentElement.setAttribute('data-theme', theme);
                break;
        }
        // document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
