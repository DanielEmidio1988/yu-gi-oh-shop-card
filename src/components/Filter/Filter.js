import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { MainFilter } from "./styleFilter"

function Filter (){

    const context = useContext(GlobalContext)
    const typeCards = [...new Set(context.cardsBase && context.cardsBase.map((card)=> card.type))]
    console.log('typeCards', typeCards)

    console.log('searchType', context.searchType)
    
    return (
        <MainFilter
        darkMode={context.darkMode}>
            <p onClick={()=>context.setSearchType("")}>Todos os Tipos</p>
            <ul>
                {context.cardsBase && typeCards.map((card)=>(
                    <li onClick={()=>context.setSearchType(card)}>{card}</li>
                ))}
            </ul>

        </MainFilter>
    )
}

export default Filter