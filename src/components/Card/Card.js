import { MainCard } from "./styleCard"
import { goToDetailsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Card(props){
    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    return(
        <MainCard 
        onClick={()=>goToDetailsPage(navigate, props.card.id)}
        darkMode={context.darkMode}>
                
            <div>
                <img src={props.card?.card_images[0]?.image_url} alt="Imagem-Carta-Yugioh"/>
            </div>
            <div>
                <p>{props.card?.name}</p>
                <h3>R$ {props.card?.card_prices[0]?.amazon_price}</h3>
            </div>
                
        </MainCard>
    )
}

export default Card