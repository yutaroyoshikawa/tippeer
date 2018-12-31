import styled from './styled-components'

export const Result = styled.div`
    width: 100%;
    position: relative;
`

export const PerformanceTitle = styled.div`
    display: block;
    margin: 10px;
    color: #444;
`

export const Contents = styled.section`
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    margin: 10px 0;
    width: 100%;
`

export const ContentBox = styled.div`
    display: flex;
`

export const Elements = styled.div`
    margin-left: 20px;
`

export const SearchWord = styled.h2`
    display: inline-block;
    background-color: #FFF;
    filter: drop-shadow(0 0 1px #555);
    margin: 10px;
    padding: 3px 30px;
    border-radius: 15px;
    color: #999;
    font-weight: normal;
    font-size: 20px;
`

export const Trend = styled.div`
    position: absolute;
    background-color: rgb(215, 187, 187);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const TrendTitle = styled.h2`
    text-align: center;
    color: #555;
    margin: 20px auto;
`

export const TrendList = styled.ul`
    text-align: center;
    list-style: none;
`

export const TrendContent = styled.li`
    margin: 10px 0;
`

export const SearchBox = styled.div`
    position: fixed;
    filter: drop-shadow(0 0 1px #555);
    z-index: 5;
    top: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const Entire = styled.div`
    padding: 60px 0 20px 0;
    background-color: rgb(215, 187, 187);
    width: 100%;
`