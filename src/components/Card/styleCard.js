import styled from "styled-components";

export const MainCard = styled.div`
    background-color: #4D5159;
    border-radius: 12px;
    width: 180px;
    height: 300px;
    // border: 1px solid black;
    box-shadow: 3px 3px 3px gray;
    transition: transform .3s;
    color: #D9D79E;
    font-size: 12px;


    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    div:first-child{
        display: flex;
        justify-content: center;

        img{
            padding-top: 1vh;
            border-radius: 12px;
            width: 90%;
        }
    }

    div:last-child{
        padding-top: 1.5vh;
        text-align: center;

        p{
        font-size:10px;  
        }
    }

    animation: fromTop .7s .4s backwards;

    @keyframes fromTop {
        from{
            opacity: 0;
            transform: translateY(30px);
        }
    
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
    `