import styled, { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const Entire = styled.section`
    width: 100%;
    background-color: #FFF;
    position: relative;
`

export const PrivacyPolicyTitle = styled.div`
    width: 90%;
    margin: 20px;
`

export const PrivacyPolicyContent = styled.div`
    margin: 0 auto;
    @media screen and (min-width: 1024px){
        width: 70%;
    }
    @media screen and (max-width: 480px){
        width: 90%; 
    }
`

export const End = styled.p`
    text-align: right;
`