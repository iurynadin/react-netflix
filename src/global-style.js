import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Helvetica Neue', Helvetica, Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #333;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
`;