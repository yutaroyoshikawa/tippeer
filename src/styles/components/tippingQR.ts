import NumberFormat from 'react-number-format'
import ReactSVG from 'react-svg'
import styled from '../styled-components'

export const Entire = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background: url(${props => props.title}) no-repeat center;
    background-size: cover;
    z-index: 1;

    &::before {
        content: '';
        background: inherit;
        filter: blur(17px);
        position: fixed;
        z-index: 2;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
    }
    &::after {
        content: '';
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        z-index: 2;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
    }
`

export const TippingMessage = styled.h2`
    text-align: center;
    letter-spacing: 3px;
    font-weight: normal;
    color: #FFF
    @media screen and (min-width: 1024px){
        font-size: 6.5vh;
    }
    @media screen and (max-width: 480px){
        font-size: 33px;
    }
    @media screen and (max-width: 740px) and (orientation: landscape){
        font-size: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
    }
`

export const LogoSpace = styled.span`
    margin-right: 6px;
`

export const TipperLogo = styled(ReactSVG)`
    fill: #FFF;
    display: inline-block;
    @media screen and (min-width: 1024px){
        width: 40vh;
    }
    @media screen and (max-width: 480px){
        width: 195px;
    }
    @media screen and (max-width: 740px) and (orientation: landscape){
        width: 195px;
        display: block;
    }
`

export const QR = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 3vh 0;
`

export const QRSection = styled.div`
    padding: 5px;
    background-color: #FFF;
    border-radius: 10px;
`

export const Artist = styled.div`
    width: 100%;
    justify-content: center;
    color: #FFF;
    @media screen and (min-width: 1024px){
        font-size: 7vh;
        display: flex;
    }
    @media screen and (max-width: 480px) {
        display: flex;
    }
    @media screen and (max-width: 740px) and (orientation: landscape){
        display: none;
    }
`

export const LeftSection = styled.div`
    width: 50vw;
    z-index: 3;
`

export const RightSection = styled.div`
    width: 50vw;
    z-index: 3;
    @media screen and (orientation: portrait) {
        display: none;
    }
`

export const TippingSumSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: #FFF;
`

export const TippingSumInnerBlock = styled.div`
    @media screen and (min-width: 1024px){
        margin-left: -160px;
    }
    @media screen and (max-width: 740px) and (orientation: landscape){
        margin-left: -50px;
    }
`

export const TippingSumTitle = styled.h2`
    letter-spacing: 8px;
    text-align: center;
    font-weight: bold;
    font-size: 5vh;
`

export const TippingSum = styled(NumberFormat)`
    text-align: center;
    font-size: 10vh;
`

export const CommnetSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    height: 55vh;
    margin-top: 5vh;
    overflow-y: scroll; 
    font-size: 3.5vh;
    color: #FFF;
    padding-right: 50px;
    width: 100%;
`