import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage } from "../../routes/coordinator"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { MainMenu } from "./styleHeaders"
import user from "../../assets/user-circle.svg"
import cart from "../../assets/cart.svg"
import logo from "../../assets/logo-main.png"
import dark from "../../assets/moon.svg"
import light from "../../assets/sun.svg"

function Header (props){
    const navigate = useNavigate() 
    const context = useContext(GlobalContext)

    const switchDarkMode = ()=>{
        context.setDarkMode(!context.darkMode)      
    }

    return (
        <>
        <MainMenu
        darkMode={context.darkMode}>
            
            <div className="boxLogo">
                <img src={logo} onClick={()=>goToHomePage(navigate)} alt="Logo Yugioh"/>
            </div>

            <div className="boxSearch">
                <input value={props.search} onChange={(event)=>props.setSearch(event.target.value)}placeholder="pesquise seu card"/>
            </div>

            <div className="boxMenu">
                <div>
                    <span><img src={user} alt="imagem-conta-usuario"/></span><span>Olá, usuário
                        </span>
                </div>
                <div>
                    <span><img onClick={()=>goToCartPage(navigate)} src={cart} alt="imagem-carrinho-de-compra"/></span>
                    <span className="amountCart">
                    {context.purchase[0].qtdTotalPurchase}
                    </span>
                </div>
                <div>
                    {context.darkMode ? <img onClick={()=>switchDarkMode()} src={light} alt="Modo Light"/> : <img onClick={()=>switchDarkMode()} src={dark} alt="Modo Dark"/> }
                </div>                     
            </div>

        </MainMenu>
        </>
    )
}

export default Header