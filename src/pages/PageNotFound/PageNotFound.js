import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Headers/Headers";
import { Container, MainContainer, BoxPageNotFound } from "../../constants/styleGlobalPages";
import { GlobalContext } from "../../context/GlobalContext";
import { goToHomePage } from "../../routes/coordinator";
import pagenotfound from "../../assets/not-found.png"
import Footer from "../../components/Footer/Footer"

function PageNotFound (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    return(
        <>
        <Header/>
        <Container>
            <MainContainer darkMode={context.darkMode}>
                <BoxPageNotFound>
                    <a href={()=>goToHomePage(navigate)}><img src={pagenotfound} alt="pagina não encontrada"/></a>
                    <h1>PÁGINA NÃO ENCONTRADA</h1>
                </BoxPageNotFound>
            </MainContainer>
        </Container>
        <Footer/>
        </>
    )
}

export default PageNotFound