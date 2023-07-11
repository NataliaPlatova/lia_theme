import { useEffect, useState } from "react";

import "./themeSwitcher.css";
import ReactDOM from "react-dom/client";
import React from "react";

const ThemeSwitcher = () => {
    let [isDark, setIsDark] = useState(false);
    const isDarkBeenSet = localStorage.getItem("isDark") === "true";
    const body = document.body;

    useEffect(() => {
        if (isDark !== isDarkBeenSet) {
            switchToLocalStorageTheme();
        }
    }, []);

    const switchToLocalStorageTheme = () => {
        if (isDarkBeenSet) {
            switchToDark();
        } else {
            switchToLight();
        }
    };

    const switchToLight = () => {
        body.classList.remove("lia__dark");
        if (isDarkBeenSet) {
            window.localStorage.setItem("isDark", "false");
        }
        setIsDark(false);
    };
    const switchToDark = () => {
        body.classList.add("lia__dark");
        if (!isDarkBeenSet) {
            window.localStorage.setItem("isDark", "true");
        }
        setIsDark(true);
    };

    const switchTheme = () => {
        if (isDark) {
            switchToLight();
        } else {
            switchToDark();
        }
    };

    return (
        <button className="lia__theme-switcher" onClick={switchTheme}>
            {isDark ? "Switch to light" : "Switch to dark"}
        </button>
    );
};

const switchThemeButton = ReactDOM.createRoot(
    document.getElementById("switchTheme") as HTMLElement,
);
switchThemeButton.render(
    <React.StrictMode>
        <ThemeSwitcher />
    </React.StrictMode>,
);

export default ThemeSwitcher;
