import styled from '../styled-components'

export const Entire = styled.article`
    background: #FFF;
    filter: drop-shadow(0 0 2px #555);
    width: 200px;
    border-radius: 8px;
`

export const WorksThumbnail = styled.img`
    width: 100%;
    height: 110px;
    object-fit: cover;
`

export const WorksInfo = styled.div`
    padding: 10px 20px 20px 20px;
    margin-bottom: 52px;
    height: 140px;
`

export const WorksName = styled.h3`
    font-weight: normal;
    font-size: 20px;
    color: #666;
    margin-bottom: 20px;
    text-align: center;
`

export const Price = styled.p`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
`