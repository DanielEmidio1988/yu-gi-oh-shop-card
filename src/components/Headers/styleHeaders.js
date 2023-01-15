import styled from "styled-components";

export const MainMenu = styled.div`
    width: 100%;
    height: 15vh;  
    background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6vw 0 2vw;

    div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 
        .boxLogo{
            img{
            width: 12vw;
            min-width: 120px;   
            }
            
            img:hover{
                cursor: pointer
            }
        }

    .boxSearch{
        width: 40%;
        
        input{
            border: none;
            border-radius: 8px;
            padding-left: 1vw;
            width: 100%;
            height: 5vh;
            background-color: ${props=> props.darkMode ? '#202225': '#42464D'};
            color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
            font-weight: 500;
        }

        input:hover{
            background-color: #4D5159;
            cursor: pointer;
        }

        input:focus{ 
            background-color: #2F3136;
            outline: none;
        }
        
    }

    .boxMenu{
        width: 30%;
        justify-content: space-between;
        font-size: 1vw;

        img{
            min-width: 20px;
            width: 2vw;
            transition: transform .3s
        }

        img:hover{
            cursor:pointer;
            transform: scale(1.2)
        }

        .amountCart{
            border-radius: 50%;
            font-size: 1vw;
            padding: 4px;
            color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
            font-weight: 600;
        }

        .amountCart{
            cursor: default;
        }

    }

    @media screen and (max-device-width: 500px){
        flex-direction: column;
        height: 20vh;
        padding: 0;
        

        .boxSearch{
            width: 96%;

            img{
                width: auto;
                height: 8vh;
            }
            
        }

        .boxSearch{
            width: 96%;
        }

        .boxMenu{
            width: 80%;
            font-size: 12px;
            
            .amountCart{
                font-size: 12px;
            }
        }



    }

`