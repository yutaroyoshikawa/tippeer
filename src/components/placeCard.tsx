import * as React from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap } from './'

import * as Styled from '../styles/components/placeCard'

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
            <Styled.Entire>
                <Link to={"/places/" + this.props.placeId}  >
                    <figure><GoogleMap placeId={this.props.placeId} width={'100%'} height={'110px'} /></figure>
                    <Styled.PlaceInfo>
                        <Styled.Name>{this.state.placeName}</Styled.Name>
                        <Styled.PostalCode>〒{this.state.postalCode}</Styled.PostalCode>
                        <Styled.Address>{this.state.address}</Styled.Address>
                    </Styled.PlaceInfo>
                </Link>
            </Styled.Entire>
        )
    }
}