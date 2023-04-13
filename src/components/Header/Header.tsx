import { Link } from "react-router-dom"
import { HeaderContainer } from "./style"

interface headerProps {
    page: string
}

export function Header (props: headerProps) {
    return (
        <HeaderContainer page={props.page}>
            <Link to="/">Lacrei</Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
                <Link to="/profissional">Profissional</Link>
            </nav>
        </HeaderContainer>
    )
}