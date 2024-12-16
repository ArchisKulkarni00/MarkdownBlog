import React, { createContext, useState, useContext } from 'react';

// Context
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Load initial theme from localStorage or default to light mode
        return localStorage.getItem("theme") === "dark" || false;
    });
    const toggleTheme = async() => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.className = !isDarkMode ? 'dark' : 'light'; // Apply to body
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use Theme Context
export const useTheme = () => useContext(ThemeContext);
