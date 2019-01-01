import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import styled from '../styled-components'

export const Entire = styled.ul`
    list-style: none;
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.4);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
`

export const InnerMenu = styled.div`
    width: 100%;
    height: 50px;
    max-width: 480px;
    min-width: 300px;
    display: flex;
    justify-content: space-around;
`

export const ListElement = styled.li`
    text-align: center;
    font-size: 10px;
    display: flex;
`

export const TabLink = styled(Link)`
    ${props => props.itemProp === props.itemRef ?
        {
            color: 'rgb(0, 122, 204)',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
        }
        :
        {
            color: 'rgb(70, 70, 70)',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
        }
    }
`

export const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
`