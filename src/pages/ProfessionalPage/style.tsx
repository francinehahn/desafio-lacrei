import styled from "styled-components";
import { CommonStyles } from "../../CommonStyles";


export const ProfessionalContainer = styled.div `
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
    
    ${CommonStyles}
`