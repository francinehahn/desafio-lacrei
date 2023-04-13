import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import img from "../../assets/profissional 1.png"
import { ProfessionalContainer } from "./style"

export function ProfessionalPage () {
    document.title = "Profissional | Desafio Lacrei"

    return (
        <>
            <Header page="professional"/>
            <ProfessionalContainer>
                <section>
                    <h2>Profissional</h2>
                    <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar
                        da comunidade LGBTQIAPN+
                    </p>
                </section>

                <section>
                    <img src={img} alt="Imagem de vários profissionais da saúde"/>
                </section>
            </ProfessionalContainer>
            <Footer page="professional"/>
        </>
    )
}