import styled from './styled-components'

export const Entire = styled.div`
    @media screen and (min-width: 1024px){
        width: 1020px;
        margin: 0 auto;
    }
    @media screen and (max-width: 480px){
        width: 100%;
    }
`

export const WorksInfo = styled.section`
    @media screen and (min-width: 1024px){
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media screen and (max-width: 480px){
        width: 98%;
        margin: 0 auto;
    }
`

export const TopWorksInfo = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
    }
    @media screen and (max-width: 480px){
        width: 98%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const WorksThumbnail = styled.div`
    display: flex;
    align-items: center;
    filter: drop-shadow(0 0 2px #555);

    @media screen and (min-width: 1024px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width: 480px){
        width: 35vw;
        height: 35vw;
    }
`

export const InnerWorksThumbnail = styled.div`
    @media screen and (min-width: 1024px){
        width: 300px;
    }
    @media screen and (max-width: 480px){
        width: 35vw;
    }
`

export const WorksDetails = styled.div`
    @media screen and (min-width: 1024px){
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media screen and (max-width: 480px){
        margin-left: 20px;
    }
`

export const WorksTitle = styled.h2`
    font-weight: normal;

    @media screen and (min-width: 1024px){
        font-size: 60px;
    }
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const Description = styled.p`
    @media screen and (min-width: 1024px){
        margin: 50px
    }
    @media screen and (max-width: 480px){
        margin: -8px 20px 20px 20px;
    }
`

export const ContentSection = styled.section`
    @media screen and (min-width: 1024px){
        margin: 50p 0;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 20px;
    }
`

export const ContentList = styled.ul`
    list-style: none;
    font-size: 20px;
`

export const Contents = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

export const ContentTitle = styled.li`
    @media screen and (min-width: 1024px){
        width: 60%;
    }
    @media screen and (max-width: 480px){
        width: 35%;
        font-size: 16px;
    }
`

export const ContentArtist = styled.li`
    @media screen and (min-width: 1024px){
        width: 10%;
    }
    @media screen and (max-width: 480px){
        width: 20%;
    }
`

export const ContentPrice = styled.li`
    text-align: center;

    @media screen and (min-width: 1024px){
        width: 30%;
    }
    @media screen and (max-width: 480px){
        width: 30%;
    }
`

export const ContentsBorder = styled.hr`
    border: 0 none;
    width: 95%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    height: 1px;

    @media screen and (min-width: 1024px){
        margin: 8px 0;
    }
    @media screen and (max-width: 480px){
        margin: 4px 0;
    }
`

export const CommentSection = styled.section`
    @media screen and (min-width: 1024px){
        margin-bottom: 50px;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 20px;
    }
`

export const Comments = styled.div`
    list-style: none;
    margin: 0 auto;

    @media screen and (min-width: 1024px){
        width: 65%;
    }
    @media screen and (max-width: 480px){
        width: 95%;
    }
`