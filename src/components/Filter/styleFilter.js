import styled from "styled-components";

export const MainFilter = styled.div`
    background-color: ${props=> props.darkMode ? '#4D5159' : '#E8E8E8'};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 20vw;
    width: 250px;
    color: ${props => props.darkMode ? '#fff':'#4D5159'};
    padding: 4vh 0 0 4vh;

    li{
        font-size:0.8vw;
        margin-bottom: 4px;
    }

    li:hover{
        cursor: pointer;
        color: ${props=> props.darkMode ? '#D9D79E': '#0E23C2'};
    }

    @media screen and (min-device-width: 800px){
        h2{
            display: none;
        }

        .closeMenu{
            display: none;
        }
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){

        h2{
            margin-bottom: 2vh;
        }

        .open{
            box-shadow: 4px 4px 1px ${props=> props.darkMode? '#D9D79E':'#4D5159'};
            background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
            border-bottom-right-radius: 12px;
            border-top-right-radius: 12px;
            position: absolute;
            width: 50%;
            top: 28%;
            left: 2%;
            color: ${props => props.darkMode ? '#fff':'#D9D79E'};
            padding: 4vh 0 0 4vw;

            h4{
                font-size: 2.5vw;
                margin-bottom: 2vh;
            }


            li{
                font-size: 2vw;
            }

        }

        .close{
            display: none;
        }


    }

    @media screen and (max-device-width: 500px){

        h2{
            margin-bottom: 2vh;
        }

        .open{
            box-shadow: 1px 1px 4px ${props=> props.darkMode? '#D9D79E':'#4D5159'};
            background-color: ${props=> props.darkMode ? '#2F3136' : '#202225'};
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            position: absolute;
            width: 60%;
            top: 28%;
            left: 4%;
            color: ${props => props.darkMode ? '#fff':'#4D5159'}
            padding: 4vh 0 0 4vw;

            h4{
                font-size: 4.5vw;
                margin-bottom: 2vh;
            }


            li{
                font-size: 4vw;
            }

        }

        .close{
            display: none;
        }


    }
 


    `