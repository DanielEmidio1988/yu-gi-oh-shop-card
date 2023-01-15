import styled from "styled-components";

export const MainFooter = styled.div`
    width: 100%;
    height: 10vh;  
    background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
    color: #fff;
    font-size: 1vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div:last-child{
        display: flex;
        gap: 2vw;

        img{
            min-width: 20px;
            width: 2vw;
            transition: transform .3s;
        }

        img:hover{
            cursor:pointer;
            transform: scale(1.1);
        }

    }
    `