import * as React from 'react'

export interface IProps {
    placeId: number
    width: string
    height: string
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
            <div style={{background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.7)', padding: '20px 50px', display: 'inline-block'}}>
                <p style={{fontSize: '40px'}}>ここから<span style={{fontSize: '50px'}}>{this.state.distance}</span>m</p>
                <p>〒{this.state.postalcode}</p>
                <p>{this.state.address}</p>
            </div>
        )
    }
}