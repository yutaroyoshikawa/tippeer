import styled from './styled-components';

export const Spotlight = styled.section`
    width: 1020px;
    margin: 0 auto;
`

export const TopSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    width: 510px;
    height: 510px;
    background-size: cover;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    margin-right: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const MiddleSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    width: 510px;
    height: 245px;
    background-size: cover;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const SmallLeftSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    width: 245px;
    height: 245px;
    background-size: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 20px;
    display: flex;
    align-items: flex-end; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
`

export const WorksInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const SmallRightSpotlight = styled.div`
    background: url('${props => props.itemProp}') no-repeat center;
    width: 245px;
    height: 245px;
    background-size: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end; 
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
`

export const WorksTitle = styled.p`
    font-size: 25px;
`

export const WorksStoreTitle = styled.div`
    margin: 0 0 30px 60px;
`

export const SpotlightTitle = styled.div`
    margin: 0 0 20px -20px;
`

export const SmallWorksTitle = styled.p`
    fontSize: 25px;
    margin-bottom: 7px;
`

export const SmallWorksArtist = styled.div`
    margin-bottom: -25px;
`

export const FollowArtists = styled.div`
    display: flex;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    marginTop: 40px;
`

export const CardTitle = styled.div`
    margin-left: 80px;
`

export const CardContents = styled.div`
    display: flex;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    margin-top: 40px;
`