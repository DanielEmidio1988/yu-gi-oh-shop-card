import Header from "../../components/Headers/Headers"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Container } from "../../constants/styleGlobalPages"
import { BoxDisplayDetailCard } from "../../constants/styleGlobalPages"

function DetailsPage(){

    const params = useParams()
    const CardId = Number(params.id)
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const detailsCard = context.cardsBase?.filter((cardBase)=> cardBase.id === CardId)
    
    return(
        <>
        <Header/>

        <Container>

            <div>
                {/* AVALIAR ALGUM TIPO DE ANUNCIO */}
            </div>

            <div>
                <div>
                    <span onClick={()=>goToHomePage(navigate)}>{'<'} Voltar</span>
                </div>
                <div>
                    {/* ADICIONAR CARD AO CARRINHO */}
                </div>
            </div>



            <BoxDisplayDetailCard>
            
                    <div>
                            {context.cardsBase && detailsCard
                                .map((card)=>(
                                    <>
                                    <div>
                                        <img src={card.card_images[0].image_url} alt="Card-Yugioh"/>
                                    </div>
                                    <div>
                                        <h2>{card.name}</h2>
                                        <p>{card.desc}</p>
                                    </div>
                                    </>
                            ))}
                    </div>
                    
                    <div>
                            {context.cardsBase && detailsCard
                                .map((card)=>(
                                <>
                                <h2>{card.card_prices[0]?.amazon_price}</h2>
                                    
                                <button onClick={()=>context.buyCard(card)}>Comprar</button>
                                </>
                            ))}
                    </div>
                
            </BoxDisplayDetailCard>
        </Container>
        </>
    )
}

export default DetailsPage