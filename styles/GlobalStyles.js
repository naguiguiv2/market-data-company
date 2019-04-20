import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Graphik";
        src: url('../static/fonts/Graphik-Regular.ttf');
    }
    body, html{
        margin:0;
        padding:0;
    }
`;
export default GlobalStyles;
