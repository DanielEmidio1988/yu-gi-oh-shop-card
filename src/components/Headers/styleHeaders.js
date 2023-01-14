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
            min-width: 150px;   
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
            width: 24px;
            height: 24px;
            font-size: 14px;
            padding: 4px;
            color: #42464D;
            font-weight: 600;
            background-color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
        }

        .amountCart{
            cursor: default;
        }

    }

`