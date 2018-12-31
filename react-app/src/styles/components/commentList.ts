import styled from '../styled-components'

export const Entire = styled.ul`
    list-style: none;
    width: 100%;
`

export const Commnet = styled.li`
    padding: 10px 0;
`

export const CommentElements = styled.ul`
    list-style: none;
    display: flex;
`

export const CommentContents = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const PostedData = styled.div`
    display: flex;
`

export const LightSepatateLine = styled.hr`
    border: 0 none;
    margin: 8px 0;
    width: 100%;
    background: radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
    height: 1px;
`

export const DarkSeparateLine = styled.hr`
    border: 0 none;
    margin: 8px 0;
    width: 100%;
    background: radial-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 255));
    height: 1px;
`

export const UserId = styled.li`
    margin-right: 20px;
`