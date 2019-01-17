import * as React from 'react'
import * as Styled from '../styles/components/distanceCard'

export interface IProps {
    placeId: number
}

interface IState {
    address: string
    latitude: number
    longitude: number
    distance: number
    postalcode: string
}

export class DistanceCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            address: '東京都小金井市関野町１−１３−１',
            distance: 10,
            latitude: 35.71706,
            longitude: 139.517882,
            postalcode: '123-4567',
        }
    }

    public render() {
        return(
            <Styled.Entire>
                <Styled.DistanceBlock>ここから<Styled.Distance>{this.state.distance}</Styled.Distance>m</Styled.DistanceBlock>
                <Styled.PostalCode>〒{this.state.postalcode}</Styled.PostalCode>
                <Styled.Address>{this.state.address}</Styled.Address>
            </Styled.Entire>
        )
    }
}