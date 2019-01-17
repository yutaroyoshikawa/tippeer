import styled, { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const Entire = styled.section`
    display: flex;
    width: 100%;
    height: 91vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Top = styled.p`
    font-size: 90px;
    color: rgb(128, 128, 128);
    letter-spacing: 15px;
`

export const Bottom = styled.p`
    font-size: 50px;
`