import styled, { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: #FFF;
    }
`

export const StreetViewSection = styled.section`
    width: 100%;
    height: 600px;
    z-index: 1;
    position: fixed;
    top: 50px;
`

export const PlaceInfo = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    justify-content: center;
    width: 100%;
    height: 600px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    color: #FFF;
    background: linear-gradient(rgba(144, 69, 201, 0.5), rgba(226, 167, 119, 0.5));
`

export const PlaceName = styled.h2`
    margin-bottom: 25px;
    font-size: 40px;
    font-weight: normal;
`

export const PostalCode = styled.p`
    font-size: 18px;
    font-weight: normal;
`

export const Address = styled.p`
    font-size: 20px;
    font-weight: normal;
`

export const PerformanceBox = styled.div`
    width: 100%;
    height: 1000px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 2;
    margin-top: 600px;
    position: relative;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
`

export const Map = styled.div`
    width: 300px;
    height: 300px;
    position: absolute;
    top: 500px;
    right: 50%;
    z-index: 3;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    margin-right: -150px;
    border-radius: 20px;
`

export const InnerPerformanceBox = styled.div`
    padding: 200px 0 200px;
`

export const PerformanceTitle = styled.div`
    margin-left: 20px;
`

export const PerformanceContent = styled.ul`
    padding: 50px 0 50px;
    display: flex;
    overflow: scroll;
    list-style: none;
    -webkit-overflow-scrolling: touch;
`

export const ListElements = styled.li`
    margin-left: 20px;
`
