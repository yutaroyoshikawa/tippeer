import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from './styled-components'

export const Entire = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: colmn;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgb(255, 188, 247), rgb(255, 135, 161));
    color: #FFF;
`

export const Section = styled.div`
    display: flex;
    flex-direction: colmn;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const QrCode = styled(FontAwesomeIcon)`
    width: 80vw;
    height: 80vw;
`

export const QrDesctiption = styled.p`
    display: inline-block;
    width: 80%;
    font-size: 30px;
`

export const ToTipping = styled.div`
    width: 100%;
    height: 200px;
    background: #FFF;
    color: #000;
`