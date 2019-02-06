import { Link } from 'react-router-dom'
import styled, { createGlobalStyle, keyframes } from './styled-components'

const myWordEnter = keyframes`
    0% {
        opacity: 0;
        transform: translate(0%, 0) scale(1);
    }

    100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
`

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const Menu = styled.ul`
    
    @media screen and (min-width: 1024px){
        font-size: 40px;
        list-style: none;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100vh;
        width: 450px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        text-shadow: 0 0 5px #FFF, 0 0 40px #000, 0 0 60px #000, 0 0 100px #0FF, 0 0 120px #0FF;
        color: #FFF;
        margin-left: 50px;
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const MenuList = styled.li`
    margin-bottom: 25px;
`

export const MenuLink = styled(Link)`
    color: #FFF;
`

export const PlaceInfo = styled.div`
    height: ${props => props.itemProp === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'};
    position: absolute;
    right: 0;
    top: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 3;
    list-style: none;
    color: #FFF;
    @media screen and (min-width: 1024px){
        justify-content: center;
        align-items: flex-end;
        padding-right: 100px;
        width: 600px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }
    @media screen and (max-width: 480px){
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        padding-left: 10px; 
    }
`

export const PerformanceName = styled.li`
    font-size: 80px;
    .shuffle-text-char {
        animation: 0.5s ease-in-out both ${myWordEnter};
    }
`

export const PerformanceTime = styled.li`
    font-size: 30px;
    .shuffle-text-char {
        animation: 0.5s ease-in-out both ${myWordEnter};
    }
`

export const PerformancePlaceName = styled.li`
    font-size: 30px;
    .shuffle-text-char {
        animation: 0.5s ease-in-out both ${myWordEnter};
    }
`

export const Map = styled.div`
    z-index: 0;
`
