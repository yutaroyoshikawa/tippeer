import * as React from 'react'
import { Link } from 'react-router-dom'

import mapExample from 'src/mapExample.png'

export interface IProps {
    placeId: number
}

type loadState = 'complete' | 'loading' | 'none'

export interface IState {
    placeName: string
    postalCode: string
    address: string
    latitude: number
    loadState: loadState
    longitude: number
}

export class PlaceCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            address: 'hogehoge',
            latitude: 123.123,
            loadState: 'complete',
            longitude: 123.123,
            placeName: 'hoge',
            postalCode: '123-4567',
        })
    }

    public componentDidMount() {
        this.setState({
            address: 'hogehoge',
            latitude: 123.123,
            loadState: 'complete',
            longitude: 123.123,
            placeName: 'hoge',
            postalCode: '123-4567',
        })
    }

    public render() {
        return(
            <article style={{backgroundColor: 'white', padding: '30px 20px', filter: 'drop-shadow(0 0 2px #555)', margin: '5px 20px', width: '200px'}}>
                <Link to={"/places/" + this.props.placeId}  >
                    <figure><img src={mapExample} style={{width: '100%'}} alt=""/></figure>
                    <h3 style={{fontWeight: 'normal', fontSize: '30px', color: '#666', marginBottom: '20px'}}>{this.state.placeName}</h3>
                    <p style={{color: '#999'}}>〒{this.state.postalCode}</p>
                    <p style={{color: '#999'}}>{this.state.address}</p>
                </Link>
            </article>
        )
    }
}