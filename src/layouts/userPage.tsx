import * as d3Ease from 'd3-ease'
import {fromJS} from 'immutable';
import * as mapbox from 'mapbox-gl'
import * as React from 'react'
import MapGL, * as map from 'react-map-gl'
import ShuffleText from 'react-shuffle-text'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as userPageActions from '../actions/userPage'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { IUserPageState } from '../reducers/userPage'

import * as Styled from '../styles/userPage'

import 'mapbox-gl/dist/mapbox-gl.css'

export interface IProps extends IGlobalMenuState, IUserPageState {
    dispatch: Dispatch<any>
}
if(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN){
    (mapbox as typeof mapbox).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
}

export default class extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        if(this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet'){
            this.props.dispatch(setMobileMenuState('none'))
        }
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
                <Styled.GlobalStyle />
                <Styled.Menu>
                    <Styled.MenuList><Styled.MenuLink to='/works/' >Works Store</Styled.MenuLink></Styled.MenuList>
                    <Styled.MenuList>おすすめパフォーマンス</Styled.MenuList>
                    <Styled.MenuList>近くのパフォーマンス</Styled.MenuList>
                    <li>フォローアーティスト</li>
                </Styled.Menu>
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
                <Styled.PlaceInfo>
                    <Styled.PerformanceName><ShuffleText content={this.props.userPage.nowPerformance.performanceName}/></Styled.PerformanceName>
                    <div>
                        <Styled.PerformanceTime><ShuffleText content={this.props.userPage.nowPerformance.start} /></Styled.PerformanceTime>
                        <Styled.PerformanceTime><ShuffleText content={this.props.userPage.nowPerformance.finish} /></Styled.PerformanceTime>
                        <Styled.PerformancePlaceName><ShuffleText content={this.props.userPage.nowPerformance.placeName} /></Styled.PerformancePlaceName>
                    </div>
                </Styled.PlaceInfo>
                <Styled.Map>
                    <MapGL 
                        {...this.props.userPage.viewport}
                        width= '100%'
                        height= {this.props.globalMenu.agent === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'}
                        mapStyle= 'mapbox://styles/mapbox/dark-v9'
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
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
                </Styled.Map>
            </section>
        )
    }
}
