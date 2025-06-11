import { PropsWithChildren, createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

// interface defines the shape of the object we’ll store in context.
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = "theme"
// Read initial theme from localStorage (or fallback)
const getInitialTheme = (): Theme =>{
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  return (storedTheme === 'light' || storedTheme === 'dark')
          ? storedTheme : "light"
}

// context provider
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Sync theme changes to local storage
  useEffect(()=>{
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  },[theme])

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
