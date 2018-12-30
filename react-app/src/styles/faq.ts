import styled from './styled-components'

export const FaqTitle = styled.div`
    margin: 20px;
`

export const FaqContents = styled.ul`
    @media screen and (min-width: 1024px){
        width: 1020px;
        margin: 0 auto;
    }
    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const FaqCard = styled.li`
    list-style: none;
    @media screen and (min-width: 1024px){
        width: 100%;
    }
    @media screen and (max-width: 480px){
        width: 90%;
        margin: 0 auto;
    }
`
