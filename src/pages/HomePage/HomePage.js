import Header from "../../components/Headers/Headers"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Container, MainContainer, BoxDisplayCard, BoxCentralHomePage, BoxPageNumber, BoxTopPage } from "../../constants/styleGlobalPages"
import Card from "../../components/Card/Card"
import { goToNextHomePage } from "../../routes/coordinator"
import Filter from "../../components/Filter/Filter"

function HomePage(){

    const context = useContext(GlobalContext)
    const navigate= useNavigate()
    const params = useParams()
    const filterCards = context.cardsBase && context.cardsBase?.filter((card)=> card.type.includes(context.searchType))
    const filterCardsbyName = context.cardsBase && context.cardsBase?.filter((card)=> card.type.includes(context.searchType)).filter((card)=>card.name.includes((context.search)))

    console.log('Magica', context.cardsBase[0])
    console.log('Monstro', context.cardsBase[8])
    console.log('params', params.results)

    //Daniel: função utilizada para alternar as páginas
    const handlePageTurn = (value)=>{
        if(value === 0){
            context.setPageNumber(1)
            context.setNumbMin(0)
            goToNextHomePage(navigate,1)
        }else if(value === context.lastPage){
            context.setPageNumber(context.lastPage)
            context.setNumbMin((context.lastPage -1)*context.perPage)
            goToNextHomePage(navigate,context.lastPage)
        }else{
            context.setPageNumber((context.pageNumber + value))
            context.setNumbMin(((context.pageNumber + value)-1)*context.perPage)
            goToNextHomePage(navigate,context.pageNumber+value)
        }
    }

    useEffect(()=>{
        if(params.results){
            context.setNumbMin(Number(params.results)*context.perPage)
            context.setPageNumber(Number(params.results))
        }
    },[])

    return(
        <>
        <Header 
        search={context.search} 
        setSearch={context.setSearch}/>
        <Container 
        darkMode={context.darkMode}>

            <MainContainer
            darkMode={context.darkMode}>
                    
                    <BoxCentralHomePage>
                    <Filter/>
                    <div className="Home-Principal">
                        <BoxTopPage
                        darkMode={context.darkMode}>
                            <div className="announcementBox">
                                <div><a href="https://www.yugioh-card.com/lat-am/pt/rulebook/index.html" target="_blank"><button>REGRAS OFICIAIS</button></a></div>                  
                            </div>
                            <div>
                                <h3>{context.search === ''? 'Todos os Cards':'Resultados:'}</h3>
                                <p>{context.loading ? 'Carregando...' : context.search !== '' ? filterCardsbyName.length : context.cardsBase && filterCards.length} produtos</p>
                            </div>
                        </BoxTopPage>

                        <BoxDisplayCard>
                            {context.loading ? 'Carregando' : context.search !== '' ?
                            filterCardsbyName.filter((card,i)=> i > context.startPage && i <= context.endPage)
                            
                            .map((card)=>(
                                <Card
                                card={card}
                                />  
                            )) :
                            filterCards.filter((card,i)=> i > context.startPage && i <= context.endPage)
                            .map((card)=>(
                                <Card
                                card={card}
                                />
                            ))}
                        </BoxDisplayCard>

                        <BoxPageNumber
                        darkMode={context.darkMode}>
                            {/* Daniel: Condicionais para renderizar os botões de acordo com a página atual */}
                            {context.pageNumber !== 1 && <button onClick={()=>handlePageTurn(0)}>{"<<"}</button>
                            }{context.pageNumber - 2 > 0 && <button onClick={()=>handlePageTurn(-2)}>{context.pageNumber - 2}</button>
                            }{context.pageNumber - 1 > 0 && <button onClick={()=>handlePageTurn(-1)}>{context.pageNumber - 1}</button>}
                            <button>{context.pageNumber}</button>                   
                            {context.pageNumber + 1 < context.lastPage && <button onClick={()=>handlePageTurn(1)}>{context.pageNumber + 1}</button>
                            }{context.pageNumber + 2 < context.lastPage && <button onClick={()=>handlePageTurn(2)}>{context.pageNumber + 2}</button>
                            }{context.pageNumber !== context.lastPage < context.lastPage && <button onClick={()=>handlePageTurn(context.lastPage)}>{">>"}</button>
                        }
                        </BoxPageNumber>   
                        </div>
                    </BoxCentralHomePage>
            </MainContainer>

        </Container>
        </>
    )
}

export default HomePage