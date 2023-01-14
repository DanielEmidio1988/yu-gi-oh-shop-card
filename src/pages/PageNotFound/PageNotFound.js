import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Headers/Headers";
import { Container } from "../../constants/styleGlobalPages";

function PageNotFound (){
    return(
        <>
        <Header/>
        <Container>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
        </Container>
        </>
    )
}

export default PageNotFound