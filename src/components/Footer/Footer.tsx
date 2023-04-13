import { Link } from "react-router-dom"
import facebook from "../../assets/FacebookLogo.png"
import instagram from "../../assets/InstagramLogo.png"
import linkedin from "../../assets/LinkedinLogo.png"
import { FooterContainer } from "./style"

interface headerProps {
    page: string
}

export function Footer (props: headerProps) {
    return (
        <FooterContainer page={props.page}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
                <Link to="/profissional">Profissional</Link>
            </nav>

            <div>
                <Link to="https://www.facebook.com/lacrei.saude" target="_blank">
                    <img src={facebook} alt="Imagem do logo do facebook"/>
                </Link>
                <Link to="https://www.instagram.com/lacrei.saude/" target="_blank">
                    <img src={instagram} alt="Imagem do logo do instagram"/>
                </Link>
                <Link to="https://www.linkedin.com/company/lacrei/" target="_blank">
                    <img src={linkedin} alt="Imagem do logo do linkedin"/>
                </Link>
            </div>

            <p>Desafio Front-end Lacrei</p>
        </FooterContainer>
    )
}