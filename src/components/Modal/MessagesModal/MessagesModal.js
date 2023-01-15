import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../context/GlobalContext"
import { BoxMessage } from "./styleMessagesModal"
import { goToHomePage, goToCartPage } from "../../../routes/coordinator"
import purchaseImg from "../../../assets/purchaseimg.png"

function MessagesModal(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const finishPurchase =()=>{
        context.setShowModal(false)
        context.setAction("")
        goToHomePage(navigate)
        context.setCart([])
        context.setPurchase([])
    }

    const purchaseCard = ()=>{
        context.setShowModal(false)
        context.setAction("")
        goToHomePage(navigate)
    }
    return(
        <>

            {context.showModal && context.action === "finishPurchase" ? 
                    <BoxMessage
                    darkMode={context.darkMode}>
                        <div>
                            <h3>Pedido Finalizado com Sucesso</h3>
                            <img src={purchaseImg} alt="/"/>
                        </div>
                        <div>
                            <button onClick={()=>finishPurchase()}>Página Principal</button>
                        </div>
                    </BoxMessage>
            : '' }

            {/* {context.showModal && context.action === "purchaseCard" ?
                    <BoxMessage
                    darkMode={context.darkMode}>
                        <div>
                            <h3>Card Adicionado ao Carrinho</h3>
          
                        </div>
                        <div>
                            <button onClick={()=>purchaseCard()}>Continuar explorando</button>
                        </div>
                    </BoxMessage>
            : ''} */}


        </>
    )
}

export default MessagesModal