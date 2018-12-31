import styled from '../styled-components'

export const Entire = styled.div`
    border-bottom: solid 2px ${props => props.color === 'light' ? '#555': '#FFF'};
    margin: 5px 0 20px 0;
    display: inline-block;
`

export const Title = styled.h2`
    margin: 0 -20px 0 10px;
    font-size: 30px;
`