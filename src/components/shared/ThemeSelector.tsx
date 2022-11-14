import React from 'react';
import {useTheme} from 'next-themes';
import {Moon, Sun, Monitor} from "react-feather";

const themeItems = {
    'system': {
        icon: <Monitor/>
    },
    'dark': {
        icon: <Moon/>
    },
    'light': {
        icon: <Sun/>
    }
}

function ThemeSelector() {
    const {theme, setTheme, themes} = useTheme();
    const handleClick = (newTheme: string) => {
        setTheme(newTheme);
    }
    const isActiveTheme = (currentTheme: string) => {
        return theme === currentTheme
    };
    const getActive = (theme: string) => isActiveTheme(theme) ? 'bg-blue-500 dark:bg-blue-500' : 'bg-gray-100';
    return (
        <ul className="dark:bg-gray-500 bg-gray-100 shadow-2xl w-100">
            {themes && themes.map((theme: string, index: number) => (
                <li key={index}>
                    <button
                        className="flex justify-between py-4 px-3 my-2 w-full hover:bg-gray-500  focus:bg-gray-500 dark:bg-gray-900 bg-blue-500 dark:bg-blue-500 bg-gray-100"
                        onClick={() => handleClick(theme)}
                    >
                        <>
                            {theme} {themeItems[theme].icon}
                        </>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export {
    ThemeSelector
};

