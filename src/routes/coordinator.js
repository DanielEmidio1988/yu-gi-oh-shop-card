export const goToHomePage= (navigate)=> {
    navigate("/")
}

export const goToNextHomePage = (navigate, page)=> {
    navigate(`/${page}`)
}

export const goToDetailsPage= (navigate, idCard)=> {
    navigate(`/card/${idCard}`)
}

export const goToCartPage= (navigate)=> {
    navigate(`/carrinho`)
}

export const goToPurchasePage= (navigate)=> {
    navigate(`/carrinho/pedido`)
}