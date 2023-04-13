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
        --lightgreen: #B0E0D3;
        --shadow-black: rgba(0, 0, 0, 0.25);
    }

    body {
        height: 100vh;

        h2 {
            font-weight: 700;
            color: var(--darkgrey);
            letter-spacing: -1px;

            @media screen and (min-width: 1040px) {
                font-size: 3rem;
                line-height: 4.06rem;
            }
            @media screen and (max-width: 1040px) {
                font-size: 2rem;
                line-height: 3rem;
                text-align: center;
            }
        }
    }
`