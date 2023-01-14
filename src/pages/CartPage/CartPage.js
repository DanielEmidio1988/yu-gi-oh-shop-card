import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import Header from "../../components/Headers/Headers"
import { Container, MainContainer, BoxDisplayCartPurchase } from "../../constants/styleGlobalPages"
import { goToHomePage, goToPurchasePage } from "../../routes/coordinator"

function CartPage(){
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    return(
        <>
        <Header/>
        <Container
        darkMode ={context.darkMode}>

            <MainContainer
            darkMode={context.darkMode}>

                <BoxDisplayCartPurchase
                darkMode={context.darkMode}>
                    <section>

                            <div className="titleItensCart">
                                <div>
                                    
                                </div>
                                <div>
                                    <h3>Produto</h3>
                                </div>
                                <div>
                                    <p>Qtd.</p>
                                </div>
                                <div>
                                    <p>Preço</p>
                                </div>
                            </div>
                        {context.cart.map((item)=>(
                            
                            <div className="itensCart">
                                <div>
                                    <img src={item.card_images[0]?.image_url_small} alt={item.name}/>
                                </div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                </div>
                                <div>
                                    <p>{item.qtd}</p>
                                    <button>Remover</button>
                                </div>
                                <div>
                                    <p>{item.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>                 
                        ))}

                        <div className="optionsCart">
                            <button onClick={()=>goToHomePage(navigate)}>Continuar comprando</button>
                            <input value={context.coupon} onChange={(event)=>context.setCoupon(event.target.value)} placeholder="Cupom Premiado"/>
                        </div>

                    </section>

                    <section>
                        {/* DISPLAY DO TOTAL DE COMPRAS */}
                        {context.purchase.map((resume)=>(
                            <>
                            <div>
                                <div className="resumePurchase">
                                    <h3>Resumo do Pedido</h3>
                                    <p>
                                        <span>
                                            x {resume.qtdTotalPurchase} {resume.qtdTotalPurchase > 1 ? 'Produtos':'Produto'}
                                        </span>
                                        <span>
                                            R$ {resume.totalPurchaseItems}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Frete
                                        </span>
                                     
                                        <span>
                                            R$ {resume.freight}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Desconto
                                        </span>
                                        
                                        <span>
                                            R$ {resume.discount}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            <h3>Total</h3>
                                        </span>
 
                                        <span>
                                            <h3>R$ {resume.totalPurchase}</h3>
                                        </span>
                                    </p>

                                </div>
                                <button onClick={()=>goToPurchasePage(navigate)}>Continuar</button>
                            </div>
                            </>
                        ))}
                    </section>

                </BoxDisplayCartPurchase>

            </MainContainer>

        </Container>
        </>
    )
}

export default CartPage