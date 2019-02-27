import styled, { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const TwoSection = styled.div`
position: relative;
@media screen and (min-width: 1024px){
    display: flex;
}
`

export const SecondTwoSection = styled.div`
@media screen and (min-width: 1024px){
    display: block;
}
@media screen and (max-width: 480px){
    display: flex;
    padding: 10px 0 23px 0;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
}
`

export const TopSection = styled.div`
        width: 100%;
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    @media screen and (min-width: 1024px){
        height: 100vh;
        min-height: 900px;
    }
    @media screen and (max-width: 480px){
        height: calc(100vh - 50px);
    }
`

export const Spotlight = styled.section`
    @media screen and (min-width: 1024px){
        width: 1020px;
        margin: 0 auto;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        height: calc(100vh - 100px);
    }
`

export const TopSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    background-size: cover;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    @media screen and (min-width: 1024px){
        width: 510px;
        height: 510px;
        margin-right: 20px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: absolute;
            width: 510px;
            height: 510px;
        }
    }
    @media screen and (max-width: 480px){
        width: 100vw;
        height: 48vw;
        margin: 0 auto 20px auto;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: absolute;
            width: 100vw;
            height: 48vw;
        }
    }
`

export const MiddleSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    background-size: cover;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    display: flex;

    @media screen and (min-width: 1024px){
        width: 510px;
        height: 245px;
        margin-bottom: 20px;
        align-items: flex-end;
        justify-content: center;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: absolute;
            width: 510px;
            height: 245px;
        }
    }
    
    @media screen and (max-width: 480px){
        width: 180px;
        height: 180px;
        align-items: flex-end; 
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        margin-left: 10px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: relative;
            left: -180px;
            width: 180px;
            height: 180px;
        }
    }
`

export const SmallLeftSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    background-size: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 1024px){
        width: 245px;
        height: 245px;
        margin-right: 20px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: absolute;
            width: 245px;
            height: 245px;
        }
    }

    @media screen and (max-width: 480px){
        width: 180px;
        height: 180px;
        margin-left: 20px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: relative;
            left: -180px;
            width: 180px;
            height: 180px;
        }
    }
`

export const LargeWorksInfo = styled.div`
    color: #FFF;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 4;

    @media screen and (min-width: 1024px){
        justify-content: space-around;
    }

    @media screen and (max-width: 480px){
        margin-bottom: -25px;
        font-size: 18px;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const SmallWorksInfo = styled.div`
    color: #FFF;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 4;
    font-size: 18px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
`

export const SmallRightSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    background-size: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;

    @media screen and (min-width: 1024px){
        width: 245px;
        height: 245px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: absolute;
            width: 245px;
            height: 245px;
        }
    }
    
    @media screen and (max-width: 480px){
        width: 180px;
        height: 180px;
        margin: 0 10px 0 20px;

        &::after {
            content: '';
            z-index: 3;
            background: linear-gradient(rgba(0,0,0,0), rgba(184, 84, 155, 0.6));
            position: relative;
            left: -180px;
            width: 180px;
            height: 180px;
        }
    }
`

export const WorksTitle = styled.p`
    font-size: 25px;
    color: #FFF;
`

export const MiddleWorksTitle = styled.p`
@media screen and (min-width: 1024px){
    font-size: 25px;
}

@media screen and (max-width: 480px){
    fontSize: 25px;
}
`

export const WorksStoreTitle = styled.div`
    @media screen and (min-width: 1024px){
        margin: 0 0 30px 60px;
    }

    @media screen and (max-width: 480px){
        display: none;
    }
`

export const SpotlightTitle = styled.div`
    @media screen and (min-width: 1024px){
        margin: 65px 0 0px 10px;
    }

    @media screen and (max-width: 480px){
        margin: 65px 0 0px 10px;
    }
`

export const SmallWorksTitle = styled.p`
    fontSize: 25px;
    margin-bottom: 7px;
    z-index: 4;
    color: #FFF;
`

export const SmallWorksArtist = styled.div`
    margin-bottom: -25px;
    z-index: 4;
    color: #FFF;
`

export const TopFollowArtists = styled.div`
    @media screen and (min-width: 1024px){
        display: none;
    }

    @media screen and (max-width: 480px){
        position: fixed;
        top: 41px;
        z-index: 5;
        display: flex;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        padding-top: 20px;
        background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    }
`

export const BottomFollowArtists = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        width: 100%;
        marginTop: 40px;
    }

    @media screen and (max-width: 480px){
        display: none;
    }
    
`

export const CardTitle = styled.div`
    @media screen and (min-width: 1024px){
        margin-left: 80px;
    }

    @media screen and (max-width: 480px){
        margin-left: 10px;
    }
    
`

export const CardContents = styled.div`
    display: flex;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;

    @media screen and (min-width: 1024px){
        margin-top: 40px;
    }

    @media screen and (max-width: 480px){
        margin-top: 10px;
        position: relative;
    }
`

export const FollowArtists = styled.div`
    margin-left: 15px;
`

export const ListElements = styled.div`
    margin-left: 20px;
`