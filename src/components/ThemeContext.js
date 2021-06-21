import React from 'react';

export const themes = {
    light: {
        name: 'Light',
        color: '#212529',
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa',
    },
    dark: {
        name: 'Dark',
        color: '#fff',
        backgroundColor: '#343a40',
        borderColor: '#343a40',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {},
});