import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background: linear-gradient(90deg, #004aad, #CB6CE6);
        font-family: "Roboto", sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover {
        filter: brightness(0.9);
    }

    
`;
