import { css } from 'styled-components'

export const CommonStyles = css `
    section {
        :nth-child(1) {
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 1040px) {
                max-width: 33.5rem;
                gap: 2rem;
            }
            @media screen and (max-width: 1040px) {
                max-width: 33.75rem;
                gap: 1rem;
            }
            
            p {
                font-size: 1.5rem;
                color: var(--mediumgrey);
                font-weight: 400;
                border-left: 5px solid var(--green);
                padding-left: 1rem;

                @media screen and (min-width: 1040px) {
                    line-height: 2rem; 
                    line-height: 2.06rem;
                }
                @media screen and (max-width: 1040px) {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            }
        }

        :nth-child(2) {
            @media screen and (min-width: 1200px) {
                max-width: 34rem;
            }
            @media screen and (min-width: 1040px) and (max-width: 1200px) {
                max-width: 28rem;
            }
            @media screen and (max-width: 1040px) {
                max-width: 34rem;
                margin-top: 2rem;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`