import { useState, useEffect } from "react"
import axios from "axios"
import { url } from "../constants/BASE_URL"

function GlobalState (){

     //Daniel: variável para armazenar informações de Card
  const [cardsBase, setCardsBase] = useState([])

  //Daniel: variável para armazenar informações do Cart
  const [cart, setCart] = useState([])

  //Daniel: variável para armazenar informações gerais do pedido do cliente
  const [purchase, setPurchase] = useState([{itens:[...cart],discount:0,freight:0,qtdTotalPurchase:0,totalPurchaseItems:0,totalPurchase:0}])

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

  //Daniel: variável para indicar o tipo de ação para acessar algum Modal de mensagem de status de ação
  const [message, setMessage] = useState("")

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

    //Daniel: hook utilizado para atualizar o pedido de compras na atualização do carrinho
    useEffect(()=>{
        purchaseClient()
    },[cart])

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
        cardIntheCart.totalPrice = cardIntheCart.qtd * cardIntheCart.price
      }else{
        auxCart.push({...newCard, qtd:1,totalPrice:Number(newCard.card_prices[0]?.amazon_price),price:Number(newCard.card_prices[0]?.amazon_price)})
      }

      setCart(auxCart)
      setAction("purchaseCard")
      setShowModal(true)
    }

    //Daniel: função para remover um card do carrinho
    const removeCard = (card)=>{
      const auxCart = cart.filter((item)=> item !== card)  
      setCart(auxCart)
      setAction("removeCard")
      setShowModal(true)
    }

    //Função para separar o pedido de compra do cliente
    function purchaseClient () {

        const auxPurchase = []
        let totalPurchase = Number(0)
        let totalPurchaseItems = Number(0)
        let qtdTotalPurchase = Number(0)

        for (let i = 0;i<cart.length;i++){
          totalPurchase +=(cart[i].totalPrice)
          totalPurchaseItems +=(cart[i].totalPrice)
          qtdTotalPurchase +=cart[i].qtd
        }
        
        let discount = coupon === 'DEV' && totalPurchase > 50 ? 25 : 0
        let freight= totalPurchase > 25 ? 0 : 50
        totalPurchase = ((totalPurchaseItems + freight) - discount)

        auxPurchase.push({itens:[...cart],discount:discount,freight:freight,qtdTotalPurchase:qtdTotalPurchase,totalPurchaseItems:totalPurchaseItems,totalPurchase:totalPurchase})
        setPurchase(auxPurchase)
       
        return
    }


    //Daniel: callback para aumentar o número de itens no carrinho.
    const increaseItem =(card) =>{
      const auxCart = [...cart]
      for(let i=0;i<auxCart.length;i++){
          if(auxCart[i].id === card.id){
            auxCart[i].qtd = auxCart[i].qtd + 1
            auxCart[i].totalPrice = auxCart[i].totalPrice + auxCart[i].price
          }
          
      }
      setCart(auxCart)
  }

  //Daniel: callback para diminuir o número de itens no carrinho.
  const decreaseItem =(card) =>{
      const auxCart = [...cart]
      for(let i=0;i<auxCart.length;i++){
        if(auxCart[i].id === card.id){
          auxCart[i].qtd = auxCart[i].qtd - 1
          auxCart[i].totalPrice = Number(auxCart[i].totalPrice - auxCart[i].card_prices[0]?.amazon_price)
        }        
      }
      const filterItem = auxCart.filter((cart) => cart.qtd > 0)
      setCart(filterItem) 
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
    increaseItem,
    decreaseItem,

  }

}
 

  export default GlobalState