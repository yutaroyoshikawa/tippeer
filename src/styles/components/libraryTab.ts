import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from '../styled-components'

export const TabSection = styled.div`
    display: flex;
`

const TabButton = css`
    background-color: rgb(124, 90, 251);
    width: 100px;
    padding: 10px 0;
    text-align: center;
    color: #FFF;
`

export const LeftButton = styled.button`
    ${TabButton}
    border-radius: 25px 0 0 25px;
`

export const CenterButton = styled.button`
    ${TabButton}
    border-right: solid 1px rgb(159, 147, 252);
    border-left: solid 1px rgb(159, 147, 252);
`

export const RightButton = styled.button`
    ${TabButton}
    border-radius: 0 25px 25px 0;
`

export const TabIcon = styled(FontAwesomeIcon)`

`