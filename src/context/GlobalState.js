import { useState, useEffect } from "react"
import axios from "axios"
import { url } from "../constants/BASE_URL"

function GlobalState (){

     //Daniel: variável para armazenar informações de Card
  const [cardsBase, setCardsBase] = useState([])

  //Daniel: variável para armazenar informações do Cart
  const [cart, setCart] = useState([])

  //Daniel: variável para armazenar informações gerais do pedido do cliente
  const [purchase, setPurchase] = useState([])

  //Daniel: variável para armazenar forma de pagamento (modo de pagamento, parcela
  const [formPayment, setFormPayment] = useState({payment:"",portion: 1})

  //Daniel: variável para armazenar o cupom de desconto
  const [coupon, setCoupon] = useState('')

  //Daniel: variavel para busca de Cards por nome
  const [search, setSearch] = useState('')

  //Daniel: variavel para busca de Cards por tipo
  const [searchType, setSearchType] = useState('')

  //Daniel: variavel para o carregamento de card
  const [loading, setLoading] = useState(false)

  //Daniel: variável para indicar o tipo de ação para acessar algum Modal de ação
  const [action, setAction] = useState("")

  // LISTA DE AÇÕES
  //"login-modal" - modal de login do header

  //Daniel: variável para indicar o tipo de ação para acessar algum Modal de mensagem de status de ação
  const [message, setMessage] = useState("")
    // LISTA DE AÇÕES
  //"finishPurchase" - modal de compra finalizada

  //Daniel: variavel para ativar algum Modal
  const [showModal, setShowModal] = useState(false)

  //Daniel: variável para ativar o DarkMode
  const [darkMode, setDarkMode] = useState(false)

  //Daniel: Variável para gerenciar o nº de páginas
  const [pageNumber, setPageNumber] = useState(1)

  //Daniel: variavel para armazenar o numero da última página
  const [lastPage, setLastPage] = useState(1) 

  //Daniel: Variável para gerenciar o nº de cards por página
  const [perPage, setPerPage] = useState(24)

  //Daniel: variavel para armazenar total de cadastros de usuários
  const [numberCard, setNumberCard] = useState('') 

  //Daniel: variavel para armazenar a posição inicial do usuário que será renderizado na página
  const startPage = (pageNumber * perPage)-21 
  
  //Daniel: variavel para armazenar a posição final do usuário que será renderizado na página
  const endPage = startPage + perPage 

  //Daniel: hook utilizado para renderizar o numero de itens por página
    useEffect(()=>{
        browserCard()
    },[pageNumber])

    //Daniel: função para consumir a API
    const browserCard= async ()=>{
        setLoading(true)
        try {         
            const response = await axios.get(url)          
            setCardsBase(response.data.data)
            setLoading(false)
            setLastPage(Math.ceil(response.data.data.length / perPage))
        }catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    //Daniel: função para compra de cards
    const buyCard = (card)=>{
      const auxCart = [...cart]
      const newCard = card
      const cardIntheCart = auxCart.find((findCard)=>{
        return findCard.id === newCard.id
      })

      if(cardIntheCart){
        cardIntheCart.qtd++
        cardIntheCart.totalPrice = cardIntheCart.qtd * cardIntheCart.card_prices[0]?.amazon_price
      }else{
        auxCart.push({...newCard, qtd:1,totalPrice:newCard.card_prices[0]?.amazon_price})
      }

      setCart(auxCart)
      purchaseClient()
    }

    //Daniel: função para remover um card do carrinho
    const removeCard = (card)=>{
      const auxCart = card.filter((item)=> item !== card)
      setCart(auxCart)
      purchaseClient()
    }


    //Função para separar o pedido de compra do cliente
    function purchaseClient () {
        const auxPurchase = []
        let totalPurchase = 0
        let totalPurchaseItems = 0
        let qtdTotalPurchase = 0

        for (let i = 0;i<cart.length;i++){
          totalPurchase +=(cart[i].totalPrice).toFixed(2)
          totalPurchaseItems +=(cart[i].totalPrice).toFixed(2)
          qtdTotalPurchase +=cart[i].qtd
        }

        let discount = coupon === 'DEV' ? 50 && totalPurchase > 100: 0
        let freight= totalPurchase > 150 ? 0 : 150
        totalPurchase = ((totalPurchaseItems + freight) - discount).toFixed(2)

        auxPurchase.push({itens:[...cart],discount:discount,freight:freight,qtdTotalPurchase:qtdTotalPurchase,totalPurchaseItems:totalPurchaseItems,totalPurchase:totalPurchase})
        setPurchase(auxPurchase)
        console.log("totalPurchase",totalPurchase)
        console.log("qtdTotalPurchase",qtdTotalPurchase)
        console.log('compra',purchase)  
       
        return
    }


  return {
    cardsBase,
    setCardsBase,
    cart,
    setCart,
    purchase,
    setPurchase,
    formPayment,
    setFormPayment,
    coupon, 
    setCoupon,
    search,
    setSearch,
    searchType, 
    setSearchType,
    loading,
    setLoading,
    action,
    setAction,
    message,
    setMessage,
    showModal,
    setShowModal,
    darkMode,
    setDarkMode,
    lastPage, 
    setLastPage,
    pageNumber,
    setPageNumber,
    perPage, 
    setPerPage,
    numberCard, 
    setNumberCard,
    buyCard,
    removeCard,
    startPage,
    endPage,
    browserCard,
  }

}
 

  export default GlobalState