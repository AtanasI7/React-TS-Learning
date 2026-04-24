import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export default function ContextTest() {
    const [theme, setTheme] = useState<Theme>("dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return <Button />;
}

function Button() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("Button must be used inside ThemeContext.Provider");
    }

    const { theme, setTheme } = themeContext;

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Текуща тема: {theme}
        </button>
    );
}
