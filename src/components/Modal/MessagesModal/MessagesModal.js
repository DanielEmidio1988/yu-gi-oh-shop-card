import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../context/GlobalContext"
import { BoxMessage } from "./styleMessagesModal"
import { goToHomePage, goToCartPage } from "../../../routes/coordinator"
import purchaseImg from "../../../assets/purchaseimg.png"
import buyimg from "../../../assets/buyimg.png"
import errorimg from "../../../assets/errorimg.png"
import removeimg from "../../../assets/removeimg.png"

function MessagesModal(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    function finishPurchase (){
        context.setShowModal(false)
        context.setAction("")
        goToHomePage(navigate)
        context.setCart([])
        context.setPurchase([{itens:[...context.cart],discount:0,freight:0,qtdTotalPurchase:0,totalPurchaseItems:0,totalPurchase:0}])
    }

    function purchaseCard (){
        context.setShowModal(false)
        context.setAction("")
        goToHomePage(navigate)
    }

    function messageAction(){
        context.setShowModal(false)
        context.setAction("")
    }

    const renderModal= () => {
        switch (context.action) {
            case 'finishPurchase':
                return <>
                    <div>
                        <h3>Pedido Finalizado com Sucesso</h3>
                        <img src={purchaseImg} alt="/"/>
                    </div>
                     <div>
                        <button onClick={()=>finishPurchase()}>Página Principal</button>
                    </div>
                </>
            case 'purchaseCard':
                return <>
                    <div>
                        <h3>Card Adicionado ao Carrinho</h3>
                        <img src={buyimg} alt="/"/>
                    </div>
                    <div>
                        <button onClick={()=>purchaseCard()}>Continuar explorando</button>
                    </div>
                </>
            case 'removeCard':
                return <>
                    <div>
                        <h3>Card Removido Carrinho</h3>
                        <img src={removeimg} alt="/"/>
                    </div>
                    <div>
                        <button onClick={()=>messageAction()}>Continuar explorando</button>
                    </div>
                </>                         
            default:
                return <>
                    <div>
                        <h3>Ops! Algo deu errado.</h3>
                        <img src={errorimg} alt="/"/>
                    </div>
                    <div>
                        <button onClick={()=>goToHomePage()}>Continuar explorando</button>
                    </div>
                </>    
        }
    }

    return(
        <>
            <BoxMessage
            darkMode={context.darkMode}>
                {renderModal()}
            </BoxMessage>
        </>
    )
}

export default MessagesModal