import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto';
    }
    :root{
        --dark-violet: #2d0c5e;
        --light-violet: #5c16c5;
    }
`;

export default GlobalStyle;
