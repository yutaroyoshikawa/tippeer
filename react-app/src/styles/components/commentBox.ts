import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '../styled-components'

export const Form = styled.form`
    width: 100%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    @media screen and (min-width: 1024px){
        border-radius: 15px;
        margin: 20px auto 40px auto;
        padding: 10px 0 50ox 0;
        height: 165px;
    }
    @media screen and (max-width: 480px){
        border-radius: 12px;
        margin: 0px auto 40px auto;
        padding: 10px 0 40ox 0;
        height: 130px;
    }
`

export const PerformanceForm = styled.form`
    width: 100%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    @media screen and (min-width: 1024px){
        border-radius: 15px;
        margin: 20px auto 40px auto;
        padding: 10px 0 50ox 0;
        height: 135px;
    }
    @media screen and (max-width: 480px){
        border-radius: 12px;
        margin: 0px auto 40px auto;
        padding: 10px 0 40ox 0;
        height: 125px;
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
`

export const Artist = styled.div`
    @media screen and (min-width: 1024px){
        margin: 0 20px;
    }
    @media screen and (max-width: 480px){
    }
`

export const ReviewBox = styled.div`
    width: 100%;
    @media screen and (min-width: 1024px){
        margin: 10px 40px 0 0;
    }
    @media screen and (max-width: 480px){
        margin-right: 20px;
    }
`

export const Comment = styled.textarea`
    width: 100%;
    resize: none;
    :focus{
        outline: none;
    }
    @media screen and (min-width: 1024px){
        height: 70px;
        font-size: 25px;
        margin: 10px 40px 0 0;
    }
    @media screen and (max-width: 480px){
        height: 45px;
        font-size: 18px;
        margin: 10px 20px 5px 0;
    }
`

export const PerformanceComment = styled.textarea`
    width: 100%;
    resize: none;
    :focus{
        outline: none;
    }
    @media screen and (min-width: 1024px){
        height: 70px;
        font-size: 25px;
        margin: 10px 40px 10px 0;
    }
    @media screen and (max-width: 480px){
        height: 60px;
        font-size: 18px;
        margin: 5px 20px 0 0;
    }
`

export const SendButton = styled.button`
    border-radius: 100%;
    border: solid 5px rgb(63, 213, 180);
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        width: 70px;
        height: 70px;
    }
    @media screen and (max-width: 480px){
        width: 62px;
        height: 62px;
    }
`

export const SendIcon = styled(FontAwesomeIcon)`
    color: rgb(63, 213, 180);
    @media screen and (min-width: 1024px){
        font-size: 30px;
        transform: translate(-3px, 1px);
    }
    @media screen and (max-width: 480px){
        font-size: 28px;
        transform: translate(-2px, 1px);
    }
`

export const Score = styled.div`
    @media screen and (min-width: 1024px){
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const MobileScore = styled.div`
    @media screen and (min-width: 1024px){
        display: none;
    }
    @media screen and (max-width: 480px){
        margin-top: 10px
    }
`

export const SendBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`