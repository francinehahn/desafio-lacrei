import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    :root {
        --lightgrey: #EEEEEE;
        --mediumgrey: #515151;
        --darkgrey: #1F1F1F;
        --green: #018762;
        --shadow-black: rgba(0, 0, 0, 0.25);
    }

    body {
        height: 100vh;
    }
`