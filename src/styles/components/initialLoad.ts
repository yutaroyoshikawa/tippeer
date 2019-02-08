import transition from 'styled-transition-group'
import styled, { keyframes } from '../styled-components'

const slideOut  = keyframes`
    0% {
        height: 100vh;
    }
    100% {
        height: 0;
    }
`

const moveRight = keyframes`
    0% {
        transform: translateX(-270px);
        opacity: 0;
    }
    50% {
        opacity: 0.2;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

const moveUp = keyframes`
    0% {
        transform: translateY(50px);
    }
    100% {
        transform: translateX(0px);
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

const moveLeft = keyframes`
    0% {
        transform: translateX(135px);
    }
    100% {
        transform: translateX(0px);
    }
`

export const LogoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(50px);
    animation: ${moveUp} 0.8s ease 2.9s 1 forwards;
`

export const Icon = styled.img`
    width: 100px;
    height: 100px;
    transform: translateX(135px);
    color: #F00;
    animation: ${moveLeft} 1s ease 1.9s 1 forwards;
`

export const Logo = styled.img`
    width: 250px;
    margin-left: 20px;
    animation: ${moveRight} 1s ease 1.9s 1 forwards;
    transform: translateX(-270px);
    display: block;
    opacity: 0;
`

export const Entire = transition.div`
    &:exit {
        opacity: 1;
    }
    &:exit-active {
        opacity: 0.01;
        transition: opacity 800ms ease-in;
    }

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999;
    background-color: #FFF;
    flex-wrap: wrap;
    flex-direction: column;

    &::after {
        content: '';
        width: 100vw;
        height: 100vh;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${slideOut} 1s ease 1s 1 forwards;
    }
`

export const MusicSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: ${fadeIn} 1.5s ease 2.9s 1 forwards;
`

export const MusicIcon = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #AAA;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    transition: all 500ms;

    &:hover {
        border: none;
        background-color: #EEE;
    }
`
