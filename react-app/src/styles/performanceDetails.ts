import styled from './styled-components'

export const TopSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    position: fixed;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: -100;
        background: url('${props => props.itemProp}') no-repeat center;
        background-size: cover;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
        position: fixed;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(17px);
    }

    @media screen and (min-width: 1024px){
        width: 1024px;
        height: 100vh;
        left: 50%;
        margin: -200px 0 0 -512px;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        height: calc(100vh - 100px);
    }
`

export const PerformanceArticleTitle = styled.h1`
    margin-left: 10px;
    color: #FFF;
`

export const PerformanceInfo = styled.div`
    z-index: 2;
    position: relative;
    @media screen and (min-width: 1024px){
        padding: 50px 100px;
    }
    @media screen and (max-width: 480px){
        margin-top: -100px;
    }
`

export const TopPerformanceInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        width: 1024pxx;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        margin-bottom: 20px;
    }
`

export const PerformanceThumbnail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 480px){
        width: 100px;
        height: 100px;
        margin-bottom: -10px
    }
`

export const Thumbnail = styled.img`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    width: 100%;
`

export const PerformanceDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #FFF;
    @media screen and (min-width: 1024px){
        height: 400px;
        align-items: flex-start;
        justify-content: center;
        margin-left: 100px;
    }
    @media screen and (max-width: 480px){
        margin-left: 20px;
    }
`

export const PerformanceTitle = styled.div`
    color: #FFF;
`

export const Start = styled.p`
    &::before {
        content: 'start';
        display: inline-block;
        background-color: rgb(255, 135, 161);
        color: #000;
        border-radius: 8px;
        width: 50px;
        height: 22px;
        text-align: center;
        margin-right: 5px;
    }
    margin-bottom: 5px;
    color: #FFF;
    @media screen and (max-width: 480px){
        &::before {
            content: 'start';
            display: inline-block;
            background-color: rgb(255, 135, 161);
            border-radius: 8px;
            width: 50px;
            height: 22px;
            text-align: center;
            margin-right: 5px;
        }
    }
`

export const Finish = styled.p`
    &::before {
        content: 'finish';
        display: inline-block;
        background-color: rgb(255, 135, 161);
        color: #000;
        border-radius: 8px;
        width: 50px;
        height: 22px;
        text-align: center;
        margin-right: 5px;
    }
    color: #FFF;
`

export const PerformanceDiscription = styled.p`
    display; inline-block;
    color: #FFF;
    @media screen and (min-width: 1024px){
        width: 800px;
    }
    @media screen and (max-width: 480px){
        width: 90%;
        margin: 0 auto;
    }
`

export const PerformanceArtist = styled.div`
    @media screen and (min-width: 1024px){
        filter: drop-shadow(0 0 2px #555);
        margin: 10px 0 20px 0;
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const MobilePerformanceArtist = styled.div`
    @media screen and (min-width: 1024px){
        display: none;
    }
    @media screen and (max-width: 480px){
        margin: -10px 0 10px 0;
    }
`

export const BottomSection = styled.section`
    position: relative;
    z-index: 3;
    top: 70vh;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(17px);
    padding: 100px 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    border-radius: 20px 20px 0 0;

    &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 1px;
        border-bottom: solid 4px #aaa;
        left: 50%;
        top: 20px;
        margin-left: -50px; 
    }
    @media screen and (min-width: 1024px){
        width: 1024px;
        left: 50%;
        margin-left: -512px;
    }
    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const PlaceDistance = styled.div`
    position: relative;
    top: -50px;
    @media screen and (min-width: 1024px){
        left: 20px;
    }
`

export const CommentBox = styled.div`
    margin: 0 auto;
    @media screen and (min-width: 1024px){
        width: 900px;
    }
    @media screen and (max-width: 480px){
        width: 90%;
    }
`

export const CommentList = styled.div`
    margin: 0 auto;
    @media screen and (min-width: 1024px){
        width: 630px;
    }
    @media screen and (max-width: 480px){
        width: 90%;
    }
`