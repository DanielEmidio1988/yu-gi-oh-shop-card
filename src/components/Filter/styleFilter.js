import styled from "styled-components";

export const MainFilter = styled.div`
    background-color: ${props=> props.darkMode ? '#4D5159' : '#E8E8E8'};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 20vw;
    width: 250px;
    color: ${props => props.darkMode ? '#fff':'#4D5159'};
    padding: 4vh 0 0 4vh;

    div{
        display: none;
        height: 100%;
    }

    li{
        font-size:0.8vw;
        margin-bottom: 4px;
    }

    li:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#0E23C2'};
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){

        h2{
            display: visible;
        }
        li{
            display: none;
        }

    }
    `