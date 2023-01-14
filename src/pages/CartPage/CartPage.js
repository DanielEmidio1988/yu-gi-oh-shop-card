import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import Header from "../../components/Headers/Headers"
import { Container } from "../../constants/styleGlobalPages"
import { goToHomePage, goToPurchasePage } from "../../routes/coordinator"

function CartPage(){
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    return(
        <>
        <Header/>
        <Container
        darkMode ={context.darkMode}>

            <div>
                <div>
                    {/* ALGUM ANUNCIO */}
                </div>
                <div>
                    <div>

                            <div>
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
                            
                            <div>
                                <div>
                                    <img src={item.card_images[0]?.image_url_small} alt={item.name}/>
                                </div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                </div>
                                <div>
                                    <p>{item.qtd}</p>
                                </div>
                                <div>
                                    <p>{item.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            
                        ))}
                        {/* DISPLAY DE CARDS COMPRADOS */}
                    </div>

                    <div>
                        {/* DISPLAY DO TOTAL DE COMPRAS */}
                        {context.purchase.map((resume)=>(
                            <>
                            <div>
                                <div>
                                    <p>
                                        <span>
                                            x {resume.qtdTotalPurchase}
                                        </span>
                                        <span>
                                            {resume.qtdTotalPurchase > 1 ? 'Produtos':'Produto'}
                                        </span>
                                        <span>
                                            R$ {resume.totalPurchaseItems}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Frete
                                        </span>
                                        <span></span>
                                        <span>
                                            R$ {resume.freight}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Desconto
                                        </span>
                                        <span></span>
                                        <span>
                                            R$ {resume.discount}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            <h3>Total</h3>
                                        </span>
                                        <span>
                                            
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
                    </div>

                </div>
                <div>
                    <button onClick={()=>goToHomePage(navigate)}>Continuar comprando</button>
                </div>

            </div>

        </Container>
        </>
    )
}

export default CartPage