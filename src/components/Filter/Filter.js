import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { MainFilter } from "./styleFilter"
import { useState } from "react"

function Filter (){

    const[active,setActive] = useState(false)

    const context = useContext(GlobalContext)
    const typeCards = [...new Set(context.cardsBase && context.cardsBase.map((card)=> card.type))]

    const searchCard=(card)=>{
        context.setSearchType(card)
        setActive(false)
    }   

    return (
        <MainFilter
        darkMode={context.darkMode}>
            <>
            <div>  
                <h2 onClick={()=>setActive(true)}>Todos Filtros</h2>
            </div>
            <div className={active ? 'open' : 'close'}>
               
                <ul>
                        <li className='closeMenu'><h4 onClick={()=>setActive(false)}>Fechar</h4></li>                    
                        <li onClick={()=>searchCard("")}>Todos os Tipos</li>
                    {context.cardsBase && typeCards.map((card)=>(
                        <li onClick={()=>searchCard(card)}>{card}</li>
                    ))}
                </ul>
            </div>
            </>
            {/* <div className={active ? 'icon iconActive':'icon'} onClick={()=>ToggleMode()}>
                <div className="hamburguer hamburguer icon"></div>
            </div>
            <div className={active ? 'menu menuOpen' : 'menu menuClose' }>
                <div>
                    <div className="list">
                        <ul className="listItens">
                            <li onClick={()=>context.setSearchType("")}>Todos os Tipos</li>
                        {context.cardsBase && typeCards.map((card)=>(
                            <li onClick={()=>context.setSearchType(card)}>{card}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* 
            <h2>Filtros</h2>
            </div>
            
            <ul>
                    <li onClick={()=>context.setSearchType("")}>Todos os Tipos</li>
                {context.cardsBase && typeCards.map((card)=>(
                    <li onClick={()=>context.setSearchType(card)}>{card}</li>
                ))}
            </ul> */}
            



        </MainFilter>
    )
}

export default Filter