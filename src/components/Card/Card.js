import { MainCard } from "./styleCard"
import { goToDetailsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

function Card(props){
    const navigate = useNavigate()

    return(
        <MainCard onClick={()=>goToDetailsPage(navigate, props.card.id)}>
                
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