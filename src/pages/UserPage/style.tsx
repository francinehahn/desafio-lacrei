import styled from "styled-components"


export const UserContainer = styled.div `
    display: flex;

    @media screen and (min-width: 1040px) {
        justify-content: space-between;
        align-items: flex-start;
        margin: 4rem 4rem 0 4rem;
    }

    @media screen and (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        margin: 2rem 2rem 0 2rem;
    }

    section {
        :nth-child(1) {
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 1040px) {
                max-width: 32.6rem;
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
                padding-left: 1.5rem;

                @media screen and (min-width: 1040px) {
                    line-height: 2rem; 
                    line-height: 2.06rem;
                }
                @media screen and (max-width: 1040px) {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    text-align: center;
                }
            }
        }
    }
`