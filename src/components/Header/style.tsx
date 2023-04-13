import styled from "styled-components"


export const HeaderContainer = styled.header<{ page: string }> `
    background-color: var(--lightgrey);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1040px) {
        padding: .5rem 4rem;
        height: 3.75rem;
    }
    @media screen and (min-width: 520px) and (max-width: 1040px) {
        padding: .5rem 2rem;
        height: 3.75rem;
    }
    @media screen and (max-width: 520px) {
         flex-direction: column;
         padding: .5rem 1rem;
         height: 5rem;
    }

    a {
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: -.6px;
        color: var(--green);
        text-decoration: none;

        :hover {
            opacity: .7;
            transition: all .2s ease 0s;
        }

        @media screen and (min-width: 520px) {
            line-height: 3.6rem;
        }
        @media screen and (max-width: 520px) {
            line-height: 2.5rem;
        }
    }

    nav {
        display: flex;

        @media screen and (min-width: 1040px) {
            gap: 2.5rem;
        }
        @media screen and (min-width: 520px) and (max-width: 1040px) {
            gap: 2rem;
        }
        @media screen and (max-width: 520px) {
            gap: 1rem;
        }

        a {
            text-decoration: none;
            font-weight: 700;
            line-height: 1.36rem;
            letter-spacing: -.3px;

            @media screen and (min-width: 520px) {
                font-size: 1rem;
            }
            @media screen and (max-width: 520px) {
                font-size: 0.875rem;
            }

            :hover {
                opacity: .7;
                transition: all .2s ease 0s;
            }

            :nth-child(1) {
                color: ${props => props.page === "home"? 'var(--green)' : 'var(--darkgrey)'};
            }

            :nth-child(2) {
                color: ${props => props.page === "user"? 'var(--green)' : 'var(--darkgrey)'};
            }

            :nth-child(3) {
                color: ${props => props.page === "professional"? 'var(--green)' : 'var(--darkgrey)'};
            }
        }
    }
`