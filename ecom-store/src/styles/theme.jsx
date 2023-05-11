import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        primary: 'pink',
        secondary: 'cyan',
    },
}

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;