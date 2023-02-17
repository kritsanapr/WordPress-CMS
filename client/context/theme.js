import { createContext, useState, useEffect } from "react";

const ThemeComtext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <ThemeComtext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeComtext.Provider>
  );
};

export { ThemeComtext, ThemeProvider };
