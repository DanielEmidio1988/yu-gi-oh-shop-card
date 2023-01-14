import styled from "styled-components";

export const MainFilter = styled.div`
    background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
    width: 20vw;
    width: 250px;
    color: #fff;
    padding-top: 4vh;

    p{
        font-weigth: 500;
        margin-bottom: 4px;
    }

    p:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
    }

    li{
        font-size:0.8vw;
        margin-bottom: 4px;
    }
    li:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#08FFFF'};
    }
    `