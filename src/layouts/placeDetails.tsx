import * as React from 'react'
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactStreetview from 'react-streetview'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as actions from '../actions/placeDetails'
import { ArticleTitle, PerformanceCard } from '../components'
import { IPlaceDetailsState } from '../reducers/placeDetails'
import * as Styled from '../styles/placeDetails'

export interface IProps extends IPlaceDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            placeId: string
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.title = 'TIPPEER | ' + this.props.placeDetails.placeName
        this.props.dispatch(setMobileMenuState('none'))
        this.props.dispatch(actions.requestFindPlaceInfo(this.props.match.params.placeId))
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public googleMap = (googleMaps: any) => (
        googleMaps && (
            <ReactGoogleMap
                googleMaps={googleMaps}
                coordinates={[
                    {
                        position: {
                            lat: this.props.placeDetails.geoPlace.latitude,
                            lng: this.props.placeDetails.geoPlace.longitude
                        },
                    },
                ]}
                center={{
                    lat: this.props.placeDetails.geoPlace.latitude,
                    lng: this.props.placeDetails.geoPlace.longitude
                }}
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
                apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
                streetViewPanoramaOptions={{
                    addressControl: false,
                    enableCloseButton: false,
                    fullscreenControl: false,
                    imageDateControl: false,
                    linksControl: false,
                    motionTracking: true,
                    panControl: false,
                    position: {
                        lat: this.props.placeDetails.geoPlace.latitude,
                        lng: this.props.placeDetails.geoPlace.longitude
                    },
                    pov: { heading: 100, pitch: 0 },
                    scrollwheel: false,
                    zoom: 1,
                    zoomControl: false,
                }}
            />
        )
    )

    public renderPerformances = () => (
        this.props.placeDetails.performaces.map((id, i) => (
            <Styled.ListElements key={i.toString()}><PerformanceCard performanceId={id.id} /></Styled.ListElements>
        ))
    )

    public render() {
        return (
            this.props.placeDetails.isFind ?
            <section>
                <Styled.GlobalStyle />
                <Styled.StreetViewSection>
                    <Styled.PlaceInfo>
                        <Styled.PlaceName>{this.props.placeDetails.placeName}</Styled.PlaceName>
                        <Styled.PostalCode>〒{this.props.placeDetails.postalcode}</Styled.PostalCode>
                        <Styled.Address>{this.props.placeDetails.address}</Styled.Address>
                    </Styled.PlaceInfo>
                    <ReactGoogleMapLoader
                        params={{
                            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                        }}
                        render={this.googleStreetView.bind(this,)}
                    />

                </Styled.StreetViewSection>
                <Styled.Map>
                    <ReactGoogleMapLoader
                        params={{
                            key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
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
            </section>
            :
            null
        )
    }
}