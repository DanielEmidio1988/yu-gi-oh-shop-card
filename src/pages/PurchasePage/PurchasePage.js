import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Headers/Headers"
import { Container, MainContainer, BoxPurchasePayment } from "../../constants/styleGlobalPages"
import { GlobalContext } from "../../context/GlobalContext"
import { goToCartPage } from "../../routes/coordinator"
import MessagesModal from "../../components/Modal/MessagesModal/MessagesModal"
import Footer from "../../components/Footer/Footer"

function PurchasePage(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const [teste,setTeste] = useState('')

    const finishPurchase = ()=>{
        context.setShowModal(true)
        context.setAction("finishPurchase")    
    }

    return(
        <>
        <Header/>
        <Container 
        darkMode={context.darkMode}>
            <MainContainer
            darkMode={context.darkMode}>
                <BoxPurchasePayment
                darkMode={context.darkMode}>
                    {context.showModal ? <MessagesModal/> : ''}
                    <section className="selectPay">
                        <h5 onClick={()=>goToCartPage(navigate)}>{'<'} Voltar</h5>
                        <h3>Forma de Pagamento</h3>
                        {context.purchase[0].itens.map((resume)=>(
                            <p><span>x{resume.qtd}</span><span>{resume.name}</span><span>R$ {resume.totalPrice.toFixed(2)}</span></p>
                        ))}
                        <div>
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
                        {/* <button >Voltar ao Carrinho</button> */}
                    </section>

                    <section className="resumePurchase">
                        <h1>Resumo Pedido</h1>
                        {context.purchase.map((resume)=>(
                            <p>
                                <span>Total</span><span>R$ {resume.totalPurchase}</span>
                                
                            </p>
                        )          
                        )}
                        <button onClick={()=>finishPurchase()}>Finalizar Pedido</button>
                    </section>
            </BoxPurchasePayment>
            </MainContainer>          
        </Container>
        <Footer/>
        </>
    )
}

export default PurchasePage