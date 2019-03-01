import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import transition from 'styled-transition-group'
import styled, { keyframes } from '../styled-components'

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const Entire = styled.div`
    color: #000;
`

export const Top = transition.nav`
    &:enter {
        opacity: 0;
        transform: translate3d(0, -100px, 0) scale(0.98) ;
    }
    &:enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
        transition: all 300ms ease-in;
    }
    &:exit {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
    }
    &:exit-active {
        opacity: 0;
        transform: translate3d(0, -100px, 0) scale(0.98);
        transition: all 200ms ease-in;
    }

    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -100;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(248, 134, 128, 1);
    
`

export const MenuList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    color: #FFF;
    @media screen and (min-width: 1024px){
        width: 1020px;
        min-height: 500px;
        justify-content: space-between;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        height: 60vh;
        min-height: 100px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const ListStyle = styled.li`
    animation: ${fadeIn} 300ms ease ${props => props.itemProp}ms 1 forwards; 
    opacity: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 13px;
    }
`

export const MenuIcon = styled(FontAwesomeIcon)`
    color: #FFF;
    margin-bottom: 10px;
    @media screen and (min-width: 1024px){
        font-size: 50px;
    }
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const ListLink = styled(Link)`
    animation: ${fadeIn} 200ms ease ${props => props.itemProp}ms 1 forwards;
    opacity: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #FFF;

    &:hover {
        transform: scale(1.2);
        transition: all 1s;
    }
 `

export const CopyRight = styled.p`
    color: #FFF;
    font-size: 20px;
`

export const MenuButton = styled.button`
    :focus {
        outline: none;
    }
`