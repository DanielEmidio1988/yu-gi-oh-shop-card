import Header from "../../components/Headers/Headers"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Container, MainContainer } from "../../constants/styleGlobalPages"
import { BoxDisplayDetailCard } from "../../constants/styleGlobalPages"
import MessagesModal from "../../components/Modal/MessagesModal/MessagesModal"
import Footer from "../../components/Footer/Footer"

function DetailsPage(){

    const params = useParams()
    const CardId = Number(params.id)
    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const detailsCard = context.cardsBase?.filter((cardBase)=> cardBase.id === CardId)
    
    return(
        <>
        <Header/>
        <Container
        darkMode={context.darkMode}>

            <MainContainer
            darkMode={context.darkMode}>

            <BoxDisplayDetailCard
            darkMode={context.darkMode}>
            {context.showModal ? <MessagesModal/> : ''}
                    <div className="InfoCard">
                            {context.cardsBase && detailsCard
                                .map((card)=>(
                                    <>
                                    <div>
                                        <h3 onClick={()=>goToHomePage(navigate)}>{'<'} Voltar</h3>
                                        <img src={card.card_images[0].image_url} alt="Card-Yugioh"/>
                                    </div>
                                    <div>
                                        <h1>{card.name}</h1>
                                        <p>{card.type}</p>
                                        <h4>Descrição:</h4>
                                        <h5>{card.desc}</h5>
                                    </div>
                                    </>
                            ))}
                    </div>
                    
                    <div className="InfoPurchase">
                            {context.cardsBase && detailsCard
                                .map((card)=>(
                                <>
                                <h1>R$ {card.card_prices[0]?.amazon_price}</h1>
                                <p>Entrega em até 15 dias</p>   
                                <button onClick={()=>context.buyCard(card)}>Comprar</button>
                                </>
                            ))}
                    </div>
                
            </BoxDisplayDetailCard>
            </MainContainer>
        </Container>
        <Footer/>
        </>
    )
}

export default DetailsPage