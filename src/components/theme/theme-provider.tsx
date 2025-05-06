"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  attribute?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "satoshi-station-theme",
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = "data-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (enableSystem) {
      setTheme("system");
    }

    root.classList.remove("light", "dark");

    if (disableTransitionOnChange) {
      root.classList.add("disable-transitions");
    }

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      root.style.setProperty(attribute, systemTheme);

      if (disableTransitionOnChange) {
        setTimeout(() => {
          root.classList.remove("disable-transitions");
        }, 0);
      }

      return;
    }

    root.classList.add(theme);
    root.style.setProperty(attribute, theme);

    if (disableTransitionOnChange) {
      setTimeout(() => {
        root.classList.remove("disable-transitions");
      }, 0);
    }
  }, [theme, disableTransitionOnChange, enableSystem, attribute, storageKey]);

  useEffect(() => {
    if (!enableSystem) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(
          mediaQuery.matches ? "dark" : "light"
        );
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [enableSystem, theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
