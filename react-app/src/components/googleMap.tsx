import * as React from 'react'
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"
import { googleMapApiKey } from '../keys'

export interface IProps {
    placeId: number
    width: string
    height: string
}

interface IState {
    latitude: number
    longitude: number
}

export class GoogleMap extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            latitude: 35.71706,
            longitude: 139.517882,
        }
    }

    public googleMap = (googleMaps: any) => (
        googleMaps && (
          <ReactGoogleMap
            googleMaps={googleMaps}
            coordinates={[
              {
                position: {lat: this.state.latitude, lng: this.state.longitude},
              },
            ]}
            center={{lat: this.state.latitude, lng: this.state.longitude}}
            zoom={13}
            zoomControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
          />
        )
    )

    public render() {
        return(
            <div style={{width: this.props.width, height: this.props.height}}>
                <ReactGoogleMapLoader
                    params={{
                        key: googleMapApiKey,
                    }}
                    render={this.googleMap.bind(this,)}
                />
            </div>
        )
    }
}