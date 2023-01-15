import {MainFooter} from "./styleFooter"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import github from "../../assets/logo-github.svg"
import linkedin from "../../assets/logo-linkedin.svg"


function Footer(){
    const context = useContext(GlobalContext)

    return (

        <MainFooter
        darkMode={context.darkMode}>         
            <p>Desenvolvido com ❤️ por Daniel Emidio</p>
            <div>
            <a href="https://github.com/danielemidio1988" target="_blank"><img src={github} alt="icon-github"/></a>
            <a href="https://www.linkedin.com/in/danielemidio1988/" target="_blank"><img src={linkedin} alt="icon-linkedin"/></a>
            </div>          
        </MainFooter>

        )
    }

export default Footer