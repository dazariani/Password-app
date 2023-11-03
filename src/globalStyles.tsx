import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
       font-family: 'JetBrains Mono';
       background-color: rgb(24, 23, 31);
       color: rgb(230, 229, 234)
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
