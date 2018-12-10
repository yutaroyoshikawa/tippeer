import * as React from 'react'
import ReactGoogleMap from "react-google-map"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactStreetview from 'react-streetview'
import { Dispatch } from 'redux'
import { ArticleTitle, PerformanceCard } from '../components'
import { googleMapApiKey } from '../keys'
import { IPlaceDetailsState } from '../reducers/placeDetails'


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
        this.props.placeDetails.performaces.map((id) => (
            <li><PerformanceCard performanceId={id} /></li>
        ))
    )

    public render() {
        
        return(
            <section>
                <div style={{width: '100%', height: '600px', zIndex: 1, position: 'fixed', top: '50px'}}>
                    <div style={{display: 'flex', position: 'absolute', zIndex: 2, justifyContent: 'center', width: '100%', height: '600px', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap', color: '#fff', background: 'linear-gradient(rgba(144, 69, 201, 0.5), rgba(226, 167, 119, 0.5))'}}>
                        <h2 style={{marginBottom: '25px', fontSize: '40px', fontWeight: 'normal'}}>{this.props.placeDetails.placeName}</h2>
                        <p style={{fontSize: '18px', fontWeight: 'normal'}}>〒{this.props.placeDetails.postalcode}</p>
                        <p style={{fontSize: '20px', fontWeight: 'normal'}}>{this.props.placeDetails.address}</p>
                    </div>
                    <ReactGoogleMapLoader
                        params={{
                            key: googleMapApiKey,
                        }}
                        render={this.googleStreetView.bind(this,)}
                    />
                    
                </div>
                <div style={{width: '300px', height: '300px', position: 'absolute',top: '500px', right: '50%', zIndex: 3, boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)', marginRight: '-150px', borderRadius: '20px'}}>
                    <ReactGoogleMapLoader
                        params={{
                            key: googleMapApiKey,
                        }}
                        render={this.googleMap.bind(this,)}
                    />
                </div>
                <div style={{width: '100%',height: '1000px', backgroundColor: 'rgba(255,255,255,0.7)', zIndex: 2, marginTop: '600px', position: 'relative', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)', backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(1px)'}}>
                    <div style={{padding: '200px 0 200px'}}>
                        <div style={{marginLeft: '20px'}}>
                            <ArticleTitle title={'ここのパフォーマンス'} />
                        </div>
                        <ul style={{padding: '50px 0 50px', display: 'flex', overflow: 'scroll', listStyle: 'none', WebkitOverflowScrolling: 'touch'}}>
                            {this.renderPerformances()}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}