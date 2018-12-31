import * as React from 'react'
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactStreetview from 'react-streetview'
import { Dispatch } from 'redux'
import { ArticleTitle, PerformanceCard } from '../components'
import { googleMapApiKey } from '../keys'
import { IPlaceDetailsState } from '../reducers/placeDetails'
import * as Styled from '../styles/placeDetails'


export interface IProps extends IPlaceDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            placeId: number
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props)
    }

    public componentDidMount = () => {
        document.body.className = 'normal'
    }

    public googleMap = (googleMaps: any) => (
            googleMaps && (
              <ReactGoogleMap
                googleMaps={googleMaps}
                coordinates={[
                  {
                    position: {lat: this.props.placeDetails.latitude, lng: this.props.placeDetails.longitude},
                  },
                ]}
                center={{lat: this.props.placeDetails.latitude, lng: this.props.placeDetails.longitude}}
                zoom={13}
                zoomControl={false}
                mapTypeControl={false}
                streetViewControl={false}
                fullscreenControl={false}
              />
            )
    )

    public googleStreetView = (googleMaps: any) => (
        googleMaps && (
            <ReactStreetview
                apiKey= {googleMapApiKey}
                streetViewPanoramaOptions={{
                    addressControl: false ,
                    enableCloseButton: false ,
                    fullscreenControl: false,
                    imageDateControl: false ,
                    linksControl: false ,
                    motionTracking: true,
                    panControl: false ,
                    position: {lat: this.props.placeDetails.latitude, lng: this.props.placeDetails.longitude},
                    pov: {heading: 100, pitch: 0},
                    scrollwheel: false ,
                    zoom: 1,
                    zoomControl: false ,
                }}
            />
        )
    )

    public renderPerformances = () => (
        this.props.placeDetails.performaces.map((id, i) => (
            <li key={i.toString()}><PerformanceCard performanceId={id} /></li>
        ))
    )

    public render() {
        
        return(
            <div>
                <Styled.StreetViewSection>
                    <Styled.PlaceInfo>
                        <Styled.PlaceName>{this.props.placeDetails.placeName}</Styled.PlaceName>
                        <Styled.PostalCode>〒{this.props.placeDetails.postalcode}</Styled.PostalCode>
                        <Styled.Address>{this.props.placeDetails.address}</Styled.Address>
                    </Styled.PlaceInfo>
                    <ReactGoogleMapLoader
                        params={{
                            key: googleMapApiKey,
                        }}
                        render={this.googleStreetView.bind(this,)}
                    />
                    
                </Styled.StreetViewSection>
                <Styled.Map>
                    <ReactGoogleMapLoader
                        params={{
                            key: googleMapApiKey,
                        }}
                        render={this.googleMap.bind(this,)}
                    />
                </Styled.Map>
                <Styled.PerformanceBox>
                    <Styled.InnerPerformanceBox>
                        <Styled.PerformanceTitle>
                            <ArticleTitle title={'ここのパフォーマンス'} color={'light'} />
                        </Styled.PerformanceTitle>
                        <Styled.PerformanceContent>
                            {this.renderPerformances()}
                        </Styled.PerformanceContent>
                    </Styled.InnerPerformanceBox>
                </Styled.PerformanceBox>
            </div>
        )
    }
}