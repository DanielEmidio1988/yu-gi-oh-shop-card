import styled from "styled-components";

//Daniel: estilização geral de páginas (BODY)
export const Container = styled.div`
    width: 100%;
    // padding-top: 10vh; 
    display: flex;
    justify-content: center;
    align-items:flex-end;
    flex-direction: column;   
    background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
`

export const MainContainer = styled.div`
    width: 98%;
    min-heigth: 100vh;
    display: flex;
    // justify-content:space-between;
    // align-items: center;
    background-color: ${props=> props.darkMode ? '#7F7F7F' : 'white'};
    // border-radius: 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    
    `
    
export const BoxCentralHomePage = styled.div`
    width: 80vw;
    padding-top: 4vh;
    `

export const BoxPageNumber = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    heigth: 50vh;
    gap: 0.5vw;

    button{
        border-radius: 50%;
        background-color: ${props=> props.darkMode ? '#4D5159' : 'white'};
        color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
        border: none;
        width: 20px;
        heigth: 100px;
    }

    button:hover{
        cursor: pointer;
        background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
    }
`

//Daniel: estilização Display de Cards - HomePage
export const BoxDisplayCard = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vw;

`

//Daniel: estilização do Display de Card - DetailsPage
export const BoxDisplayDetailCard = styled.div`
    // width: 100%;
    display: flex;
    justify-content: space-between;

    div{
        border-box: 8px;
        border:1px solid black;
    }

    div:first-child{
        display:flex;    

        img{
            width: 20vw;
            min-width: 200px;
        }
    }


    `