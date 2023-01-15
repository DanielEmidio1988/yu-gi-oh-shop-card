import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { MainFilter } from "./styleFilter"

function Filter (){

    const context = useContext(GlobalContext)
    const typeCards = [...new Set(context.cardsBase && context.cardsBase.map((card)=> card.type))]
    
    return (
        <MainFilter
        darkMode={context.darkMode}>

            <div>
            <h2>Filtros</h2>
            </div>
            
            <ul>
                    <li onClick={()=>context.setSearchType("")}>Todos os Tipos</li>
                {context.cardsBase && typeCards.map((card)=>(
                    <li onClick={()=>context.setSearchType(card)}>{card}</li>
                ))}
            </ul>

        </MainFilter>
    )
}

export default Filter