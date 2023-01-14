import styled from "styled-components";

export const MainFilter = styled.div`
    // background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
    background-color: ${props=> props.darkMode ? '#4D5159' : '#E8E8E8'};
    // border-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 20vw;
    width: 250px;
    color: ${props => props.darkMode ? '#fff':'#4D5159'};
    // padding-top: 4vh;
    padding: 4vh 0 0 4vh;
    // border-left: 5px solid ${props=> props.darkMode ? '#2F3136' : '#202225'};

    p{
        font-weigth: 500;
        margin-bottom: 4px;
        font-size:0.8vw;
    }

    p:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#0E23C2'};
    }

    li{
        font-size:0.8vw;
        margin-bottom: 4px;
    }
    li:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#0E23C2'};
    }
    `