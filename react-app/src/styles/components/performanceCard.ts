import styled from '../styled-components'

export const Entire = styled.article`
    background: #FFF;
    filter: drop-shadow(0 0 2px #555);
    width: 200px;
    border-radius: 8px;
`

export const PerformanceThumbnail = styled.img`
    width: 100%;
    height: 110px;
    object-fit: cover;
`

export const PerformanceInfo = styled.div`
    padding: 10px 20px 20px 20px;
    height: 140px;
`

export const PerformanceName = styled.h3`
    font-weight: normal;
    font-size: 20px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
`

export const Start = styled.p`
    &::before {
        content: 'start';
        display: inline-block;
        background-color: rgb(255, 135, 161);
        color: #000;
        border-radius: 8px;
        padding: 3px 8px;
        text-align: center;
        margin-right: 5px;
    }
    margin-bottom: 2px;
    color: #333;
    font-size: 12px;
`

export const Finish = styled.p`
    &::before {
        content: 'finish';
        display: inline-block;
        background-color: rgb(255, 135, 161);
        color: #000;
        border-radius: 8px;
        padding: 3px 6px;
        text-align: center;
        margin-right: 5px;
    }
    color: #333;
    font-size: 12px;
`

export const PlaceInfo = styled.p`
    font-size: 20px;
    color: #666;
`
