import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from './styled-components'

export const TopSection = styled.section`
    width: 100%;
    background: url(${props => props.itemProp}) no-repeat center;
    background-size: cover;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
    @media screen and (min-width: 1024px){
        height: 80vh;
        margin-bottom: 15vh;
    }
    @media screen and (max-width: 480px){
        height: 43vh;
        margin-bottom: 20px;
    }
`

export const ArtistInfo = styled.div`
    background-filter: blur(17px);
    @media screen and (min-width: 1024px){
        display: inline-block;
        background: rgba(255, 255, 255, 0.8);
        padding: 80px 0;
        margin: 10vh 0;
        width: 700px;
    }
    @media screen and (max-width: 480px){
        background: rgba(0, 0, 0, 0.3);
        color: #FFF;
        width: 90%;
        height: 40vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-end;
    }
`

export const TopArtistinfo = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (min-width: 1024px){
        justify-content: flex-end;
    }
    @media screen and (max-width: 480px){
        justify-content: flex-start;
    }
`

export const ArtistCard = styled.div`
    @media screen and (min-width: 1024px){
        display: block;
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const SelfIntroduction = styled.p`
    @media screen and (min-width: 1024px){
        font-size: 20px;
        padding-top: 30px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
        padding: 10px 0 30px 0;
    }
`

export const MobileArtistCard = styled.div`
    @media screen and (min-width: 1024px){
        display: none;
    }
    @media screen and (max-width: 480px){
        position: absolute;
        top: 44vh;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const JobTitle = styled.p`
    @media screen and (min-width: 1024px){
        text-align: right;
        font-size: 30px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const ArtistName = styled.h2`
    @media screen and (min-width: 1024px){
        text-align: right;
        font-size: 90px;
    }
    @media screen and (max-width: 480px){
        font-size: 50px;
    }
`

export const FunctionList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    @media screen and (min-width: 1024px){
        background: rgb(255, 255, 255);
        padding: 30px;
        width: 1020px;
        position: absolute;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
        height: 90px;
        border-radius: 20px;
        top: 78vh;
        left: 50%;
        margin-left: -510px;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        position: fixed;
        bottom: 70px;
        z-index: 6;
    }
`

export const UsuallyButton = styled.li`
    @media screen and (min-width: 1024px){
        width: 40px;
    }
    @media screen and (max-width: 480px){
        width: 50px;
        height: 50px;
        font-size: 0px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
        border-radius: 50px;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

export const OfferButton = styled.li`
    @media screen and (min-width: 1024px){
        width: 64px;
        margin: 0 -12px;
    }
    @media screen and (max-width: 480px){
        width: 50px;
        height: 50px;
        font-size: 0px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
        border-radius: 50px;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

export const BiographyButton = styled.li`  
    @media screen and (min-width: 1024px){
        width: 128px;
        margin: 0 -44px;
    }
    @media screen and (max-width: 480px){
        width: 50px;
        height: 50px;
        font-size: 0px;
        box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
        border-radius: 50px;
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`

export const RegistrationMark = styled(FontAwesomeIcon)`
    display: flex;
    margin: 0 auto;
    @media screen and (min-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`
export const LinkMark = styled(FontAwesomeIcon)`
    display: block;
    margin: 0 auto;
    @media screen and (min-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const MarkColor = styled.div`
    color: ${props => props.itemScope ? 'rgb(255, 236, 0)' : 'black'};
    filter: ${props => props.itemScope ? 'drop-shadow(0 0 2px #444)' : 'none'};
`

export const ClickBox = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    background: rgba(255, 255, 255, 0.9);
    background-filter: blur(30px);
    @media screen and (min-width: 1024px){
        width: 1020px;
        height: 500px;
        margin: -250px 0 0 -510px;
        padding: 20px;
        border-radius: 20px;
    }
    @media screen and (max-width: 480px){
        width: 95vw;
        height: 95vw;
        margin: -47.5vw 0 0 -47.5vw;
        padding: 10px;
        border-radius: 10px;
    }
`

export const RecentPerformanceSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #FFF;
    @media screen and (min-width: 1024px){
        width: 100%;
        height: 100vh;
    }
    @media screen and (max-width: 480px){
        height: 80vh;
        width: 100%;
        margin: 0 auto;
    }
`

export const RecentPerformanceBox = styled.div`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    @media screen and (min-width: 1024px){
        padding: 80px;
        border-radius: 50px;
    }
    @media screen and (max-width: 480px){
        border-radius: 10px;
        width: 90%;
        height: 500px;
        margin: 0 auto;
        padding: 10px;
    }
`

export const PerformanceInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    @media screen and (min-width: 1024px){
        margin-right: -80px;
        justify-content: space-between;
    }
    @media screen and (max-width: 480px){
    }
`

export const RecentlyPerformanceTitle = styled.div`
    @media screen and (min-width: 1024px){
        margin-left: -110px;
    }
    @media screen and (max-width: 480px){
        margin-left: -16px;
    }
`

export const PerformanceName = styled.p`
    @media screen and (min-width: 1024px){
        font-size: 50px;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const RecentlyPerformanceInfo = styled.div`

`

export const PerformanceDescriptionBox = styled.div`
    word-break: break-word;
    @media screen and (min-width: 1024px){
        width: 450px;
    }
    @media screen and (max-width: 480px){
        width: 95%;
        margin: 0 auto;
    }
`

export const PerformanceComment = styled.div`
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const PerformanceDescription = styled.p`
    @media screen and (min-width: 1024px){
        margin: 30px 0;
    }
    @media screen and (max-width: 480px){
        margin: 15px 0;
        height: 50px;
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
`

export const DesktopPerformancePlace = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
    }
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const MobilePerformancePlace = styled.div`
    @media screen and (min-width: 1024px){
        display: none;
    }
    @media screen and (max-width: 480px){
        display: flex;
    }
`

export const DistanceCard = styled.div`
    @media screen and (min-width: 1024px){
        position: relative;
        right: 100px;
    }
    @media screen and (max-width: 480px){
        width: 100px;
    }
    
`

export const PerformanceHistoryTitle = styled.div`
    @media screen and (min-width: 1024px){
        width: 450px;
    }
    @media screen and (max-width: 480px){
        margin-left: 10px;
    }
`

export const PerformanceHistory = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 90px;
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
    color: #000;
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
    color: #000;
`