import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { createGlobalStyle, keyframes } from './styled-components'

const background = keyframes`
    0%{background-position:0% 26%}
    50%{background-position:100% 75%}
    100%{background-position:0% 26%}
`

const ripple = keyframes`
    0% {
        transform: scale(0);
        border-width: 0px;
    }
    100% {
        transform: scale(10);
        opacity: 0;
        border-width: 15px;
    }
`

const moveLiteLine = keyframes`
    0% {
        height: 0;
        transform: rotate(35deg) translate(45px, -40px);
    }
    50% {
        height: 20px;
        transform: rotate(35deg) translate(45px, -70px);
    }
    100% {
        height: 0;
        transform: rotate(35deg) translate(45px, -70px);
    }
`

const moveLargeLine = keyframes`
    0% {
        height: 0;
        transform: rotate(20deg) translate(40px, -30px);
    }
    50% {
        height: 50px;
        transform: rotate(20deg) translate(40px, -80px);
    }
    100% {
        height: 0;
        transform: rotate(20deg) translate(40px, -80px);
    }
`

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const Entire = styled.section`
    width: 100%;
    height: ${props => props.itemProp}vh;
    display: flex;
    flex-direction: colmn;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-size: 400% 400%;
    background: linear-gradient(149deg, #e472c2, #4755c8);
    animation: ${background} 2s ease infinite;
    color: #FFF;
    position: absolute;
    bottom: 50px;
    left: 0;
    z-index: 3;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const ResultSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`

export const QrCode = styled(FontAwesomeIcon)`
    font-size: 300px;
    padding-top: 80px;
`

export const QrDesctiption = styled.p`
    display: inline-block;
    width: 80%;
    font-size: 30px;
    text-align: center;
`

export const ToTipping = styled.p`
    width: 100%;
    text-align: center;
`

export const ResultIcon = styled.img`
    width: 100px;
    height: 100px;
    background-color: #FFF;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`

export const ResultPerformance = styled.div`
    width: 90vw;
    margin: 0 auto;
    height: 50vh;
    display: flex;
    align-items: center;
`

export const ResultPerformanceName = styled.p`
    font-size: 50px;
`

export const ResultPerformanceTime = styled.div`
    margin: 20px 0 16px 0;
`

export const PayIcon = styled.img`
    width: 100px;
    height: 100px;
    background-color: #FFF;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`

export const PayIconSection = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    top: ${props => props.itemProp}px;
    width: 100%;
`

export const PayAddButtonSection = styled.div`
    width: 90vw;
    max-width: 400px;
    display: flex;
    justify-content: space-evenly;
    margin: 0 5vw;
`

export const PayAddButton = styled.button`
    width: 100px;
    text-align: center;
    padding: 3px 0;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    color: #333;
`

export const PayMiddleAddButton = styled.button`
    width: 100px;
    text-align: center;
    padding: 3px 0;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    color: #555;
    margin: 0 20px;
`

export const PayValueLabel = styled.label`
    display: block;
    text-align: center;
    margin-bottom: 10px;
    font-size: 25px;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 5px;
`

export const PayValueInput = styled.input`
    width: 100%;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    :focus {
        outline: none;
    }
`

export const InputSection = styled.div`
    margin-top: 200px;
`

export const ThanksLine = styled.div`
    &:before {
        content: '';
        width: 2px;
        height: 0px;
        background-color: #FFF;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1px 0 0 -5px;
        transform: rotate(20deg) translate(50px, -30px);
        animation: ${moveLiteLine} 800ms ease;
    }

    &:after {
        content: '';
        width: 2px;
        height: 0px;
        background-color: #FFF;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -1px 0 0 -5px;
        transform: rotate(30deg) translate(50px, -30px);
        animation: ${moveLargeLine} 800ms 50ms 1 ease;
    }
`

export const ThanksText = styled.div`
    margin-bottom: -50px;
`

export const ThanksRipple = styled.div`
    font-size: 30px;

    &:before {
        content: '';
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        border: 5px solid #FFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0);
        margin: -15vw 0 0 -15vw;
        filter: blur(7px);
        animation: ${ripple} 1000ms ease;
    }

    &:after {
        content: '';
        content: '';
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        border: 5px solid #FFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0);
        margin: -15vw 0 0 -15vw;
        filter: blur(10px);
        animation: ${ripple} 1000ms 100ms 1 ease;
    }
`