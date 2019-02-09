import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import transition from 'styled-transition-group'
import styled from '../styled-components'

export const Entire = styled.div`
    color: #000;
`

export const Top = transition.nav`
    &:enter {
        height: 0;
    }
    &:enter-active {
      height: 100vh;
      transition: height 400ms ease-in;
    }
    &:exit {
      height: 100vh;
    }
    &:exit-active {
      height: 0;
      transition: height 400ms ease-in;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #FFF;
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