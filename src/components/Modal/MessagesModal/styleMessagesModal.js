import styled from "styled-components";

export const BoxMessage = styled.div`
    width: 20vw;
    height: 34vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
    background-color: ${props=> props.darkMode ? '#4D5159' : 'white'};
    position: absolute;
    top: 30%;
    left: 30%;

    img{
        width: 150px;
    }
`