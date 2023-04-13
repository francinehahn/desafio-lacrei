import styled from "styled-components"


export const FooterContainer = styled.footer<{ page: string }> `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0 .5rem 0;
    border-top: 1px solid var(--lightgreen);
    @media screen and (min-width: 520px) {
        gap: 1.5rem;
        margin: 0 4rem;
    }
    @media screen and (max-width: 520px) {
        gap: .8rem;
        margin: 0 1rem;
    }

    nav {
        display: flex;

        @media screen and (min-width: 520px) {
            justify-content: flex-start;
            gap: 2.5rem;
        }
        @media screen and (max-width: 520px) {
            flex-direction: column;
            gap: .1rem;
        }
        
        a {
            text-decoration: none;
            line-height: 1.36rem;
            color: var(--darkgrey);

            @media screen and (min-width: 520px) {
                font-size: 1rem;
            }
            @media screen and (max-width: 520px) {
                font-size: .875rem;
            }

            :hover {
                opacity: .7;
                transition: all .2s ease 0s;
            }

            :nth-child(1) {
                font-weight: ${props => props.page === "home"? '700' : '400'};
            }

            :nth-child(2) {
                font-weight: ${props => props.page === "user"? '700' : '400'};
            }

            :nth-child(3) {
                font-weight: ${props => props.page === "professional"? '700' : '400'};
            }
        }
    }

    div {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;

        a {
            img {
                :hover {
                    cursor: pointer;
                    opacity: .7;
                    transition: all .2s ease 0s;
                }
            }
        }
    }

    p {
        font-size: .75rem;
        font-weight: 400;
        color: var(--mediumgrey);
    }
`