import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        font: 'var(--color-font)',
        warning: 'var(--color-warning)',
        dark: 'var(--color-dark)',
    },
}

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;