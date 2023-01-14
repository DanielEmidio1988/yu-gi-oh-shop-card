import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Headers/Headers"
import { Container } from "../../constants/styleGlobalPages"
import { GlobalContext } from "../../context/GlobalContext"
import { goToHomePage } from "../../routes/coordinator"
import MessagesModal from "../../components/Modal/MessagesModal/MessagesModal"

function PurchasePage(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const [teste,setTeste] = useState('')

    const finishPurchase = ()=>{
        context.setCart([])
        context.setPurchase([])
        context.setShowModal(true)
        context.setMessage("finishPurchase")
        
    }

    return(
        <>
        <Header/>
        <Container 
        darkMode={context.darkMode}>
            {context.showModal ? <MessagesModal/> : ''}
            <div>
                <h3>Forma de Pagamento</h3>
                <select onChange={(event)=>setTeste(event.target.value)}>
                    <option>Boleto</option>
                    <option>Pix</option>
                    <option value="Cartão">Cartão</option>
                </select>
                {teste === "Cartão" ? 
                     <select>
                        <option>x1</option>
                        <option>x2</option>
                        <option>x3</option>
                    </select>
                : 
                ''}
            </div>

            <div>
                <h3>Resumo Pedido</h3>
                {context.purchase.map((resume)=>(
                    <p>
                        <span>Total</span><span>R$ {resume.totalPurchase}</span>
                        
                    </p>
                )          
                )}
                <button onClick={()=>finishPurchase()}>Finalizar Pedido</button>
            </div>          
        </Container>
        </>
    )
}

export default PurchasePage