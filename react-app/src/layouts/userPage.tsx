import * as d3Ease from 'd3-ease'
import {fromJS} from 'immutable';
import * as mapbox from 'mapbox-gl'
import * as React from 'react'
import MapGL, * as map from 'react-map-gl'
import { Link } from 'react-router-dom'
import ShuffleText from 'react-shuffle-text'
import { Dispatch } from 'redux'
import * as actions from '../actions/globalMenu'
import * as userPageActions from '../actions/userPage'
import { mapboxAccessToken } from '../keys'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { IUserPageState } from '../reducers/userPage'


import 'mapbox-gl/dist/mapbox-gl.css'

export interface IProps extends IGlobalMenuState, IUserPageState {
    dispatch: Dispatch<any>
}

(mapbox as typeof mapbox).accessToken = mapboxAccessToken

export default class extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        if(this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet'){
            this.props.dispatch(actions.setMobileMenuState({tabState: 'none'}))
        } 
        document.body.className = 'normal'
        // this.props.dispatch(userPageActions.setInitialProps())
    }

    public mapStyle = () => (
        fromJS({
            'filter': ['==', 'extrude', 'true'],
            'id': '3d-buildings',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-base': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "min_height"]
                ],
                'fill-extrusion-color': '#fff',
    
                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                'fill-extrusion-height': [
                    "interpolate", ["linear"], ["zoom"],
                    15, 0,
                    15.05, ["get", "height"]
                ],
                'fill-extrusion-opacity': .6
            },
            'source': 'composite',
            'source-layer': 'building',
            'type': 'fill-extrusion',
        })
    )

    public onTransitionEnd = () => {
        this.props.dispatch(
            userPageActions.setTransitionType(
                {
                    transitionType: 
                        this.props.userPage.transitionType === 'fly' ?
                        'rotate'
                        :
                        'fly'
                }
            )
        )

        this.props.userPage.transitionType === 'rotate'?
            this.OnRotate()
        :
            this.props.dispatch(userPageActions.setFly())
    }

    public async OnRotate() {
        await this.props.dispatch(userPageActions.setPerformanceInfo())
        await this.props.dispatch(userPageActions.setRotate())
        await this.props.dispatch(userPageActions.setFlyTo())
    }

    public onViewportChange = (viewportData: map.ViewState) => (
        this.props.dispatch(userPageActions.setViewPort(viewportData))
    )

    public render() {
        return(
            <section>
                <ul style={{fontSize: '40px', listStyle: 'none', position: 'absolute', zIndex: 1, top: '0', left: '0', height: '100vh', width: '450px', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', display: 'flex', textShadow: '0 0 5px #FFF, 0 0 40px #000, 0 0 60px #000, 0 0 100px #0FF, 0 0 120px #0FF', color: '#FFF', marginLeft: '50px'}}>
                    <li style={{marginBottom: '25px'}}><Link to='/works/' style={{color: '#FFF'}}>Works Store</Link></li>
                    <li style={{marginBottom: '25px'}}>おすすめパフォーマンス</li>
                    <li style={{marginBottom: '25px'}}>近くのパフォーマンス</li>
                    <li>フォローアーティスト</li>
                </ul>
                <div style={{position: 'absolute', top: '80px', width: '250px', height: '200px', display: 'none', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', background: 'white', zIndex: 11}} >
                    <ul>
                        <li>lat:  {this.props.userPage.viewport.latitude}</li>
                        <li>lng:  {this.props.userPage.viewport.longitude}</li>
                        <li>zoom: {this.props.userPage.viewport.zoom}</li>
                        <li>rotate: {this.props.userPage.viewport.bearing}</li>
                        <li>pitch: {this.props.userPage.viewport.pitch}</li>
                        <li>flyTo: {this.props.userPage.flyTo}</li>
                        <li>transactionType: {this.props.userPage.transitionType}</li>
                    </ul>
                </div>
                <ul style={{width: '600px', height: '100vh', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))', position: 'absolute', right: 0, top: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', flexWrap: 'wrap', zIndex: 3, listStyle: 'none', paddingRight: '100px', color: '#FFF'}}>
                    <li style={{fontSize: '80px'}}><ShuffleText content={this.props.userPage.nowPerformance.performanceName}/></li>
                    <li style={{fontSize: '30px'}}><ShuffleText content={this.props.userPage.nowPerformance.start} /></li>
                    <li style={{fontSize: '30px'}}><ShuffleText content={this.props.userPage.nowPerformance.finish} /></li>
                    <li style={{fontSize: '30px'}}><ShuffleText content={this.props.userPage.nowPerformance.placeName} /></li>
                </ul>
                <div style={{zIndex: 0}}>
                    <MapGL 
                        {...this.props.userPage.viewport}
                        width= '100%'
                        height= {this.props.globalMenu.agent === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'}
                        mapStyle= 'mapbox://styles/mapbox/dark-v9'
                        mapboxApiAccessToken={mapboxAccessToken}
                        transitionDuration={10000}
                        transitionEasing={d3Ease.easeCubicOut}
                        transitionInterpolator={new map.FlyToInterpolator()}
                        onLoad={this.OnRotate.bind(this,)}
                        onViewportChange= {this.onViewportChange.bind(this,)}
                        onTransitionEnd= {this.onTransitionEnd.bind(this,)}
                        dragPan={false}
                        doubleClickZoom={false}
                        dragRotate={false}
                        scrollZoom={false}
                    />
                </div>
            </section>
        )
    }
}
