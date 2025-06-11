import { PropsWithChildren, createContext, useState } from "react";

type Theme = "light" | "dark";

// interface defines the shape of the object we’ll store in context.
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// context provider
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
