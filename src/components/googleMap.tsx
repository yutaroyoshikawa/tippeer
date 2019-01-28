import * as React from 'react'
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"

export interface IProps {
    latitude: number
    longitude: number
    width: string
    height: string
}

export class GoogleMap extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public googleMap = (googleMaps: any) => (
        googleMaps && (
          <ReactGoogleMap
            googleMaps={googleMaps}
            coordinates={[
              {
                position: {lat: this.props.latitude, lng: this.props.longitude},
              },
            ]}
            center={{lat: this.props.latitude, lng: this.props.longitude}}
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
                        key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                    }}
                    render={this.googleMap.bind(this,)}
                />
            </div>
        )
    }
}