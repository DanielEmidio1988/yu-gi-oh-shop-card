import styled from "styled-components";

export const BoxMessage = styled.div`
    width: 20vw;
    height: 16vw;
    min-width: 280px;
    min-height: 220px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
    background-color: ${props=> props.darkMode ? '#4D5159' : '#E8E8E8'};
    position: absolute;
    top: 30%;
    left: 30%;

    img{
        width: 8vw;
    }

    button{
        margin-top: 2vh;
        width: 120px;
        height: 50px;
        font-size: 14px;
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
`