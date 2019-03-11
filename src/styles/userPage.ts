import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'react-image'
import { Link } from 'react-router-dom'
import transition from 'styled-transition-group'
import styled, { createGlobalStyle, keyframes } from './styled-components'

const myWordEnter = keyframes`
    0% {
        opacity: 0;
        transform: translate(0%, 0) scale(1.5);
    }

    100% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
`

const slideIn = keyframes`
    0% {
        transform: translateX(100vw);
    }

    100% {
        transform: translateX(0);
    }
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
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
    cursor: pointer;
`

export const MenuLink = styled(Link)`
    color: #FFF;
`

export const PlaceInfo = styled.div`
    height: ${props => props.itemProp === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 120px)'};
    position: absolute;
    right: 0;
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

export const performanceThumb = styled.div`
    @media screen and (min-width: 1024px){
        width: 300px;
    }
    @media screen and (max-width: 480px){
        width: 50vw;
    }
`

export const thumbImage = styled(Img)`
    opacity: 0;
    width: 100%;
    animation: ${fadeIn} 200ms ease forwards;
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
    width: 100vw;
    height: ${props => props.itemProp === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'};
`

export const Window = transition.section.attrs({
    timeout: 200,
    unmountOnExit: true,
  })`
    &:enter {
        opacity: 0.01;
    }
    &:enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in;
    }
    &:exit { 
        opacity: 1;
    }
    &:exit-active {
        opacity: 0.01;
        transition: opacity 200ms ease-in;
    }

    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999999999999;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const List = styled.ul`
    display: flex;
    list-style: none;
`

export const Card = styled.li`
    margin: 0 50px;
    transform: translateX(100vw);
    animation: ${slideIn} 500ms ease ${props => props.itemProp}ms 1 forwards;
`

export const WindowTitle = styled.div`
    color: #FFF;
    position: fixed;
    top: 50px;
    left: 100px;
`

export const WindowCloser = styled.div`
    position: fixed;
    right: 100px;
    top: 50px;
    color: #FFF;
`

export const Cancel = styled(FontAwesomeIcon)`
    width: 100%;
    font-size: 50px;
`

export const LoadingImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 480px){
        width: 50vw;
        height: 50vw;
    }
    background-color: #FFF;
`

export const mapPinZone = styled.div`
    width: 200px;
    height: 200px;
    border: solid 1px #FFF;
    border-radius: 50%;
    display: flex;
    color: #FFF;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`

export const mapPinName = styled.p`
    font-size: 30px;
`

export const mapPinIcon = styled(FontAwesomeIcon)`
    font-size: 40px;
`