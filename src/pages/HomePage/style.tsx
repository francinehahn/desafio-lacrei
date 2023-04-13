import styled from "styled-components"


export const HomeContainer = styled.div `
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
                max-width: 28.3rem;
                gap: 2rem;
            }
            @media screen and (max-width: 1040px) {
                max-width: 33.75rem;
                gap: 1rem;
            }

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

            p {
                font-size: 1.5rem;
                color: var(--mediumgrey);
                font-weight: 400;

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

            div {
                display: flex;
                margin-top: 1rem;

                @media screen and (min-width: 1040px) {
                    justify-content: space-between;
                }
                @media screen and (max-width: 1040px) {
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 3rem;
                }
                @media screen and (max-width: 475px) {
                    gap: 1rem;
                }

                button {
                    width: 11.6rem;
                    height: 3rem;
                    font-weight: 700;
                    letter-spacing: -.5px;
                    font-size: 1.13rem;
                    line-height: 1.6rem;
                    border-radius: .5rem;
                    border: 2px solid var(--green);
                    box-shadow: 0px 4px 4px var(--shadow-black);

                    :nth-child(1) {
                        background-color: var(--green);
                        color: white;
                    }

                    :nth-child(2) {
                        background-color: white;
                        color: var(--green);
                    }

                    :hover {
                        transition: all 0.2s ease 0s;
                        opacity: .7;
                        cursor: pointer;
                    }
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