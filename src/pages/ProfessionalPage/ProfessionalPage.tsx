import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export function ProfessionalPage () {
    document.title = "Profissional | Desafio Lacrei"

    return (
        <>
            <Header page="professional"/>
            <h1>Professional Page</h1>
            <Footer page="professional"/>
        </>
    )
}