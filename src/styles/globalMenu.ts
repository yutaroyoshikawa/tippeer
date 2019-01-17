import styled from './styled-components'

export const MobileTopMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 5px;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.4);
    background-color: #FFF;
`

export const DeskTopMemu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 5px;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.4);
    background-color: #FFF;
`

export const TopGlobalMenu = styled.nav`
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 10;
    top: 0;
`

export const BottomGlobalMenu = styled.nav`
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 10;
    bottom: 0;
`