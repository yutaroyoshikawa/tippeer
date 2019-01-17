import styled from '../styled-components'

export const Entire = styled.div`
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.7);
    display: inline-block;
    width: 100%;
    @media screen and (min-width: 1024px){
        padding: 20px 50px;
    }
    @media screen and (max-width: 480px){
        padding: 10px 10px;
    }
`

export const DistanceBlock = styled.p`
    @media screen and (min-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const Distance = styled.span`
    @media screen and (min-width: 1024px){
        font-size: 50px;
    }
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const PostalCode = styled.p`
    @media screen and (min-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 15px;
    }
`

export const Address = styled.p`
    @media screen and (min-width: 1024px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 15px;
    }
`