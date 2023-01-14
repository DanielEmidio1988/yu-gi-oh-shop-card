import styled from "styled-components";

export const MainModalLogin = styled.div`
    width: 200px;
    heigth: 300px;
    background-color

    //VERIFICAR
    pointer-events: ${props => props.modal(true) && props.action("login-modal") ? 'none' :'visible'};
    
    :hover{   
        pointer-events: visible;
    }`