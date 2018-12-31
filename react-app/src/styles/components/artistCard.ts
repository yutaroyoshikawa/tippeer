import { Link } from 'react-router-dom'
import styled from '../styled-components'

export const Entire = styled.article`
    width: 100%;
    text-align: center;
`
export const ArtistCard = styled.figure`
    ${props => props.itemProp === 'card' ?
        {
            filter: 'drop-shadow(0 0 1px #555)',
            marginRight: '10px',
        }
        :
        {
            filter: 'drop-shadow(0 0 1px #555)',
        }
    }
`

export const ArtistLink = styled(Link)`
    ${props => props.itemProp === 'card' ?
        {
            alignItems: 'center',
            display: 'flex',

        }
        :
        {}
    }
`

export const IconBox = styled.div`
    ${props => props.itemProp === 'card' ?
        {
            alignItems: 'center',
            display: 'flex',
            
        }
        :
        {}
    }
`

export const ArtistIcon = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.width}px;
    border-radius: ${props => props.width}px;
`

export const Name = styled.p`
    color: ${props => props.itemProp === 'light' ? '#555': '#FFF'};
    display: block;
`