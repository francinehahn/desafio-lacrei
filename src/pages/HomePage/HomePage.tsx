import { Header } from "../../components/Header/Header"
import img from "../../assets/rafiki 2.png"
import { useNavigate } from "react-router"
import { HomeContainer } from "./style"
import { Footer } from "../../components/Footer/Footer"

export function HomePage () {
    const navigate = useNavigate()

    return (
        <>
            <Header page="home"/>
            <HomeContainer>
                <section>
                    <h2>Boas vindas a Lacrei Saúde</h2>
                    <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

                    <div>
                        <button onClick={() => {navigate("/pessoa-usuaria")}}>Pessoa Usuária</button>
                        <button onClick={() => {navigate("/profissional")}}>Profissional</button>
                    </div>
                </section>

                <section>
                    <img src={img} alt="Imagem de um profissional da saúde saindo de dentro de um celular"/>
                </section>
            </HomeContainer>
            <Footer page="home"/>
        </>
    )
}