import { useContext } from "react";
import { ThemeComtext } from "../context/theme";
import Head from "next/head";

const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeComtext);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${theme}.css`} />
      </Head>
      {theme === "light" ? (
        <span
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            console.log("dark");
          }}
          style={{ fontSize: "24px" }}
        >
          🌓
        </span>
      ) : (
        <span
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
            console.log("light");
          }}
          style={{ fontSize: "24px" }}
        >
          🌞
        </span>
      )}
    </>
  );
};

export default ToggleTheme;
