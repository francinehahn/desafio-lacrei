import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { UserContainer } from "./style"
import img from "../../assets/rafiki 1.png"

export function UserPage () {
    document.title = "Pessoa Usuária | Desafio Lacrei"

    return (
        <>
            <Header page="user"/>
            <UserContainer>
                <section>
                    <h2>Pessoa Usuária</h2>
                    <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam
                        às suas necessidades de forma segura e acolhedora.
                    </p>
                </section>

                <section>
                    <img src={img} alt="Imagem de um celular com três pessoas utilizando um aplicativo"/>
                </section>
            </UserContainer>
            <Footer page="user"/>
        </>
    )
}