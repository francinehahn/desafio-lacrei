import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export function UserPage () {
    document.title = "Pessoa Usuária | Desafio Lacrei"

    return (
        <>
            <Header page="user"/>
            <h1>User Page</h1>
            <Footer page="user"/>
        </>
    )
}