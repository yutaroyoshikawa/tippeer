import * as React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={"/place/" + this.props.placeId}  >
                <article>
                    <h3>{this.state.placeName}</h3>
                    <p>{this.state.postalCode}</p>
                    <p>{this.state.address}</p>
                </article>
            </Link>
        )
    }
}