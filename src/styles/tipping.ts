import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { createGlobalStyle } from './styled-components'

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
    background: linear-gradient(rgb(255, 188, 247), rgb(255, 135, 161));
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
`

export const QrDesctiption = styled.p`
    display: inline-block;
    width: 80%;
    font-size: 30px;
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