import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Graphik";
        src: url('../static/fonts/Graphik-Regular-Web.woff');
    }
    @font-face {
        font-family: "Financier";
        src: url('../static/fonts/FinancierTextWeb-Regular.woff')
    }
    @font-face {
        font-family: "Graphik-Bold";
        src: url('../static/fonts/Graphik-Bold-Web.woff');
    }
    body, html{
        margin:0;
        padding:0;
    }
`;
export default GlobalStyles;
