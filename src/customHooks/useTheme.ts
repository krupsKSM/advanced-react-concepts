import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be kept within a ThemeProvider");
  }
  return context;
};
