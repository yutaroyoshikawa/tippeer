import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '../styled-components'

export const Star = styled(FontAwesomeIcon)`
    font-size: ${prop => prop.tabIndex}px;
    @media screen and (min-width: 1024px){
        padding-right: 5px;
    }
    @media screen and (max-width: 480px){
        padding-right: 3px;
    }
`

export const ColorStar = styled.div`
    color: rgb(255, 236, 0);
`

export const MonoStar = styled.div`
    color: rgb(190, 190, 190);
`

export const ScoreBox = styled.div`
    display: flex;
    filter: drop-shadow(0 0 1px #555);
`