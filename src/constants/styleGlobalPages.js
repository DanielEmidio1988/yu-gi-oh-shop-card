import styled from "styled-components";
import backgroundtutorial from "../assets/card.png"
import background from "../assets/fundo.jpg"
import backgroundpayment from "../assets/payment.png"

//Daniel: estilização geral de páginas (BODY)
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:flex-end;
    flex-direction: column;   
    background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};

    button{
        margin-top: 2vh;
        width: 12vw;
        height: 8vh;
        font-size: 1.5vw;
        font-weight: 600;
        color: ${props=>props.darkMode? '#D9D79E':'#fff'};
        border: 2px solid ${props=>props.darkMode? '#D9D79E':''};   
        background-color: ${props=>props.darkMode? '#727056':'#0892EB'};      
    }

    button:hover{
        cursor: pointer;
        color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
        border: 2px solid ${props=>props.darkMode ? '#D9D79E':'#22F9FA'};
        background-color: ${props=>props.darkMode ? '#918F6E':'#22F9FA'};
    }

    @media screen and (max-device-width: 500px){
        align-items:center;
    }

`

//Daniel: estilização do "body" das páginas
export const MainContainer = styled.div`
    width: 98%;
    min-height: 100vh;
    display: flex;
    background-color: ${props=> props.darkMode ? '#4D5159' : '#E8E8E8'};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #D9D79E;  

    @media screen and (max-device-width: 500px){
        width: 96%; 
        border-radius: 8px;
    }
    `
    
export const BoxCentralHomePage = styled.div`
    width: 100%;
    padding-top: 4vh;
    display: flex;

    .Home-Principal{
        width: 80%;
        padding-left: 2vw;
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        flex-direction: column;

        .Home-Principal{
            width: 98%;
        }
        
    }

    @media screen and (max-device-width: 500px){
        flex-direction: column;
        
        .Home-Principal{
            width: 98%;
        }
    }
    `

//Daniel: estilização do Box de anuncios
export const BoxTopPage = styled.div`
    width: 100%;
    color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
         
        .announcementBox{
            width: 100%;
            display: flex;
            background-color: #2F3136;
            margin-bottom: 4vh;
            background: url(${background});

            div:first-child{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                padding-bottom: 4vh;
                width: 100%;
                height: 20vw;             
                box-shadow: 1px 1px 4px #202225;
                background: url(${backgroundtutorial}) no-repeat;          
                background-size: 50% auto;
                background-position: top center;

                button{
                    width: 20vw;
                    height: 4vw;
                    font-size: 1.5vw;
                    font-weight: 600;
                    color: #D9D79E;
                    border: 2px solid #D9D79E;
                    background-color: #727056;
                }

                button:hover{
                    cursor: pointer;
                    color: #D9D79E;
                    border: 2px solid #D9D79E;
                    background-color: #918F6E;
                }
            }
        }

    `

//Daniel: estilização do Box com os botões de paginas - "HomePage"
export const BoxPageNumber = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    heigth: 50vh;
    gap: 0.5vw;

    button{
        border-radius: 50%;
        background-color: #202225;
        color: ${props=> props.darkMode ? '#D9D79E': '#fff'};
        border: none;
        font-size: 14px;
        max-width: 20px;
        height: 20px;
    }

    button:hover{
        cursor: pointer;
        background-color: #2F3136;
    }
`

//Daniel: estilização Display de Cards - HomePage
export const BoxDisplayCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1vw;
    padding-top: 4vh;

`

//Daniel: estilização da página de Carrinho
export const BoxDisplayCartPurchase = styled.div`
    display: flex;
    width: 100%;
    padding: 8vh 2vw 8vh 2vw;
    justify-content: space-between;
    gap: 2vw;
    color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
    

    section:first-child{
        
        width: 80%;
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        border-radius: 12px;
        padding-top: 4vh;

        button{
            // margin-top: 2vh;
            width: 10vw;
            height: 6vh;
            font-size: 0.6vw;
            // font-weight: 600;
            // color: ${props=>props.darkMode? '#D9D79E':'#fff'};
            // border: 2px solid ${props=>props.darkMode? '#D9D79E':''};   
            // background-color: ${props=>props.darkMode? '#727056':'#0892EB'};         
        }

        // button:hover{
        //     cursor: pointer;
        //     color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
        //     border: 2px solid ${props=>props.darkMode ? '#D9D79E':'#22F9FA'};
        //     background-color: ${props=>props.darkMode ? '#918F6E':'#22F9FA'};
        // }

        .titleItensCart, .itensCart{
            display: flex;
            padding-left: 2vw;
            animation: fromLeft .7s .4s backwards; 



            button{
                width: 8vw;
                height: 2vh;
                font-size: 10px;
            }

            .buttonqtd{
                border-radius: 50%;
                width: 20px;
                height: 20px;
            }
                
            div{
                width: 25%;
                border-bottom: 1px solid #727056;
                padding: 2vh 0 2vh 0;

            }

            img{
                width: 4vw;
                min-width: 100px;
            }
        }

    }

    section:last-child{
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        width: 20%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 4vh;
        border-radius: 12px;

        div{
            animation: fromCenter .7s .4s backwards; 
            width: 90%;


            p{
                font-size: 0.8vw;
                display: flex;
                justify-content: space-between;
            }
        }

        // button{
        //     margin: 4vh 0 0 2vw;
        //     width: 12vw;
        //     height: 8vh;
        //     font-size: 1.5vw;
        //     font-weight: 600;
            // color: ${props=>props.darkMode? '#D9D79E':'#fff'};
            // border: 2px solid ${props=>props.darkMode? '#D9D79E':''};   
            // background-color: ${props=>props.darkMode? '#727056':'#0892EB'};       
        // }

        // button:hover{
        //     cursor: pointer;
        //     color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
        //     border: 2px solid ${props=>props.darkMode ? '#D9D79E':'#22F9FA'};
        //     background-color: ${props=>props.darkMode ? '#918F6E':'#22F9FA'};
        // }
    }

    .optionsCart{
        display: flex;
        justify-content: space-evenly;

        input{
            padding-left: 0.8vw;
            margin-top: 2vh;
            border-radius: 8px;
            width: 12vw;
            height: 6vh;
            font-size: 0.8vw;
            font-weight: 600;
            background-color: ${props=> props.darkMode ? '#4D5159': '#42464D'};
            border: none;
            color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
        }

        input:hover{
            background-color: #2F3136;
            cursor: pointer;
        }

        input:focus{ 
            background-color: #2F3136;
            outline: none;
        }
    }

    @keyframes fromLeft {
        from{
            opacity: 0;
            transform: translateX(-20px);
        }
    
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fromCenter {
        from{
            opacity: 0;      
        }
    
        to{
            opacity: 1;
        }
    }

    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        flex-direction: column;
        justify-content: flex-start;

        section:first-child{
            width:98%;
            padding-bottom: 2vh;

            button{
                width: 20vw;
                font-size: 1.5vw;
            }

            .titleItensCart, .itensCart{

                div{
                    text-align: center;
                }

                button{
                    width: 60%;
                    height: 3vh;
                }
            }

            .optionsCart{
                input{
                    width: 20vw;
                    font-size: 1.5vw;
                    text-align: center;
                }
            }
        }
      
            section:last-child{
                width: 98%;
                padding-bottom: 2vh;
                
                
                .buttonPurchase{
                    width: 90%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;             
                }

                h3{
                    font-size: 3vw;
                    text-align: center;
                }

                .resumePurchase{
                    width: 90%;
                    p{
                    font-size: 2vw;
                    }
                }

                button{
                    width: 50%;
                }
                
            }


    }

    @media screen and (max-device-width: 500px){
        flex-direction: column;
        justify-content: flex-start;

        section:first-child{
            width:98%;
            padding-bottom: 2vh;

            button{
                width: 40vw;
                font-size: 2.5vw;
            }

            .titleItensCart, .itensCart{

                div{
                    text-align: center;
                }

                h3{
                    font-size: 3vw;
                }

                p{
                    font-size: 3vw;
                }

                button{
                    width: 60%;
                    height: 3vh;
                }
            }

            .optionsCart{
                input{
                    width: 40vw;
                    font-size: 2.5vw;
                    text-align: center;
                }
            }
        }
      
            section:last-child{
                width: 98%;
                padding-bottom: 2vh;
                
                
                .buttonPurchase{
                    width: 90%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;             
                }

                h3{
                    font-size: 4vw;
                    text-align: center;
                }

                .resumePurchase{
                    width: 90%;
                    p{
                    font-size: 3vw;
                    }
                }

                button{
                    width: 80%;
                    font-size: 3vw;
                }
                
            }
    }
    `

//Daniel: estilização da página de Pedido Finalizado
export const BoxPurchasePayment = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8vh 2vw 8vh 2vw;
    gap: 2vw;
    color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
    
    .selectPay{
        display:flex;
        background: url(${backgroundpayment})no-repeat;
        background-size: 40% auto;
        background-position: top right;
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        border-radius: 12px;
        width: 80%;
        padding: 4vh 2vw 0 1vw;
        flex-direction: column;

        h3,div{
            animation: fromCenter .7s .5s backwards; 
        }

        h3{
            font-size: 2vw;
        }

        p{
            font-size: 1vw;
        }

        div{
            width: 100%;
            
            select{
                padding-left: 0.8vw;
                margin: 2vh 1vw 0 0;
                text-align: center;
                border-radius: 8px;
                width: 6vw;
                height: 4vh;
                font-size: 0.8vw;
                font-weight: 600;
                background-color: ${props=> props.darkMode ? '#4D5159': '#42464D'};
                border: none;
                color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
            }
    
            select:hover{
                background-color: #2F3136;
                cursor: pointer;
            }
    
            select:focus{ 
                background-color: #2F3136;
                outline: none;
            }
        }
    }
    
    @keyframes fromCenter {
        from{
            opacity: 0;      
        }
    
        to{
            opacity: 1;
        }
    }

    .resumePurchase{
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        width: 20%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 4vh;
        border-radius: 12px;
    }

    button{
        // margin-top: 2vh;
        // width: 12vw;
        // height: 8vh;
        font-size: 1.2vw;
        // font-weight: 600;
        // color: ${props=>props.darkMode? '#D9D79E':'#fff'};
        // border: 2px solid ${props=>props.darkMode? '#D9D79E':''};   
        // background-color: ${props=>props.darkMode? '#727056':'#0892EB'};       
    }

    // button:hover{
    //     cursor: pointer;
    //     color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
    //     border: 2px solid ${props=>props.darkMode ? '#D9D79E':'#22F9FA'};
    //     background-color: ${props=>props.darkMode ? '#918F6E':'#22F9FA'};
    // }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        flex-direction: column;
        justify-content: flex-start;

        .selectPay{
            width: 98%;
            min-height: 30vh; 
            padding-left: 4vw;

            h3{
                font-size: 4vh;
            }

            p{
                font-size: 2vh;
            }

            div{
                select{
                    width: 16vw;
                    font-size: 2vh;
                }

            }

        }

        .resumePurchase{
            width: 98%;
            padding: 2vh 0 2vh 0;

            button{
                width: 50%;
                font-size: 2vh;
            }
        }
    }

    @media screen and (max-device-width: 500px){

        flex-direction: column;
        justify-content: flex-start;

        .selectPay{
            width: 98%;
            min-height: 30vh; 
            padding-left: 4vw;
            background-image: none;

            
            h3{
                font-size: 4vh;
            }

            p{
                font-size: 2vh;
            }

            div{
                select{
                    width: 40vw;
                    font-size: 2vh;
                }

            }
        }

        .resumePurchase{
            width: 98%;
            padding: 2vh 0 2vh 0;

            button{
                width: 50%;
                font-size: 2vh;
            }
        }

    }

    `

//Daniel: estilização do Display de Card - DetailsPage
export const BoxDisplayDetailCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8vh 2vw 8vh 2vw;
    gap: 2vw;
    color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};

    .InfoCard{
        display:flex;
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        border-radius: 12px;
        width: 80%;
        
        div{
            padding: 4vh 2vw 0 1vw;
        }

        div:first-child{
            h3:hover{
                cursor:pointer;
            }
        }

        div:last-child{
            padding-top: 8vh;
            animation: fromLeft .7s .5s backwards; 
            
            p{
                font-size: 1vw;
                margin-bottom: 6vh;             
            }

            h5{
                font-weight: 300;
            }
        }

        img{
            margin-top: 4vh;
            width: 20vw;
            animation: fromLeft .7s .4s backwards;
        }
    }

    .InfoPurchase{
        background-color: ${props=> props.darkMode ? '#202225' : 'white'};
        width: 20%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 4vh;
        border-radius: 12px;


        button, h1,p{
            animation: fromCenter .7s .5s backwards; 
        }

        h1{
            font-size: 3vw;
        }
        p{
            font-size: 1.2vw;
        }

        // button{
        //     margin-top: 2vh;
        //     width: 12vw;
        //     height: 8vh;
        //     font-size: 1.5vw;
        //     font-weight: 600;
            // color: ${props=>props.darkMode? '#D9D79E':'#fff'};
            // border: 2px solid ${props=>props.darkMode? '#D9D79E':''};   
            // background-color: ${props=>props.darkMode? '#727056':'#0892EB'};      
        }

        // button:hover{
            // cursor: pointer;
            // color: ${props=> props.darkMode? '#D9D79E':'#4D5159'};
            // border: 2px solid ${props=>props.darkMode ? '#D9D79E':'#22F9FA'};
            // background-color: ${props=>props.darkMode ? '#918F6E':'#22F9FA'};
        // }
    }

    @keyframes fromLeft {
        from{
            opacity: 0;
            transform: translateX(-20px);
        }
    
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fromCenter {
        from{
            opacity: 0;      
        }
    
        to{
            opacity: 1;
        }
    }


    @media screen and (max-device-width: 500px){
        flex-direction: column-reverse;

        .InfoCard{
            width:98%;
            flex-direction: column;
            padding-bottom: 2vh;
            align-items: center;

            img{
                width: 60vw;
                margin-bottom: 2vh;
            }

            div:last-child{
                padding: 0 2vw 0 2vw;
                
                p{
                    font-size: 3.5vw;             
                }
            }
        }
        

        .InfoPurchase{
            width: 98%;
            padding-bottom: 2vh;

            button{
                width: 60%;
                font-size: 4vw;
            }

            h1{
                font-size: 12vw;
            }
            p{
                font-size: 4vw;
            }

        }

        
    
    }

    `

    //Daniel: estilização da página "Not-Found"
    export const BoxPageNotFound = styled.div`
        display:flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        img{
            width: 30vw;
        }    

        img:hover{
            cursor: pointer;
        }

        h1{
            cursor: default;
            font-size: 4vw;
        }
    `