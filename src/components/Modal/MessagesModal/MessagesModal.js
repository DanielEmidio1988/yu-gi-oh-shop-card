import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../context/GlobalContext"
import { BoxMessage } from "./styleMessagesModal"
import { goToHomePage } from "../../../routes/coordinator"

function MessagesModal(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const finishPurchase =()=>{
        context.setShowModal(false)
        context.setAction("")
        goToHomePage(navigate)
    }
    return(
        <>

            {context.showModal && context.message === "finishPurchase" ?
                    <BoxMessage>
                        <div>
                            <h3>Pedido Finalizado com Sucesso</h3>
                        </div>
                        <div>
                            <button onClick={()=>finishPurchase()}>Página Principal</button>
                        </div>
                    </BoxMessage>
            : '' }


        </>
    )
}

export default MessagesModal