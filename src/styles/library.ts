import styled, { createGlobalStyle } from './styled-components'

export const Global = createGlobalStyle`
    body{
        background-color: rgb(11, 2, 55);
    }
`

export const Entire = styled.div`

`

export const TabSection = styled.div`
    filter: drop-shadow(0 0 1px #555);
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 70px;
`

export const TitleSection = styled.div`
    color: #FFF;
    position: fixed;
    top: 120px;
    left: 30px;
`

export const WorksSection = styled.section`
    width: 90%;
    @media screen and (min-width: 1024px){
        margin: 180px auto 0 auto;
    }
    @media screen and (max-width: 480px){
        margin: 120px auto 0 auto;
    }
`

export const Works = styled.article`
    display: inline-block;
    @media screen and (min-width: 1024px){
        margin: 80px 50px;
    }
    @media screen and (max-width: 480px){
        margin: 80px 10px;
    }
`