import { faMapPin, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress'
import * as d3Ease from 'd3-ease'
import * as dateformat from 'dateformat'
import { fromJS } from 'immutable';
import * as mapbox from 'mapbox-gl'
import * as React from 'react'
import MapGL, * as map from 'react-map-gl'
import { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import ShuffleText from 'react-shuffle-text'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as userPageActions from '../actions/userPage'
import { ArticleTitle, ArtistCard, PerformanceCard } from '../components'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { IUserPageState } from '../reducers/userPage'
import * as Styled from '../styles/userPage'

import 'mapbox-gl/dist/mapbox-gl.css'

export interface IProps extends IGlobalMenuState, IUserPageState {
    dispatch: Dispatch<any>
}
if (process.env.REACT_APP_MAPBOX_ACCESS_TOKEN) {
    (mapbox as typeof mapbox).accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
}

export default class extends React.Component<IProps, {}> {
    private mapGLRef: MapGL | null

    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        if (this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet') {
            this.props.dispatch(setMobileMenuState('none'))
        }
        this.props.dispatch(userPageActions.playEffect())
        this.props.dispatch(userPageActions.requestGetRealPerformance())
        if(this.mapGLRef){
            const reactMap = this.mapGLRef.getMap()
            reactMap.on('load', () => 
                reactMap.addLayer(this.mapStyle())
            )
        }
    }

    public componentWillUnmount = () => {
        this.props.dispatch(userPageActions.endEffect())
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

        this.props.userPage.transitionType === 'rotate' ?
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

    public hundleRecommendClick = () => {
        if (!this.props.userPage.isLoad && this.props.userPage.isHideWindow) {
            this.props.dispatch(userPageActions.setSelectedWindow('recommend'))
            this.props.dispatch(userPageActions.requestLoadRecommend())
            this.props.dispatch(userPageActions.openWindow())
        }
    }

    public hundleNearbyClick = () => {
        if (!this.props.userPage.isLoad && this.props.userPage.isHideWindow) {
            this.props.dispatch(userPageActions.setSelectedWindow('nearby'))
            this.props.dispatch(userPageActions.requestLoadNearby())
            this.props.dispatch(userPageActions.openWindow())
        }
    }

    public hundleFollowingClick = () => {
        if (!this.props.userPage.isLoad && this.props.userPage.isHideWindow) {
            this.props.dispatch(userPageActions.setSelectedWindow('following'))
            this.props.dispatch(userPageActions.requestLoadFollower())
            this.props.dispatch(userPageActions.openWindow())
        }
    }

    public hundleWindowCloseClick = () => (
        this.props.dispatch(userPageActions.closeWindow())
    )

    public renderPerformances = () => (
        <Styled.Window
            in={!this.props.userPage.isHideWindow}
            timeout={200}
        >
            <Styled.WindowCloser
                onClick={this.hundleWindowCloseClick}
            >
                <Styled.Cancel icon={faTimesCircle} />
            </Styled.WindowCloser>
            <Styled.WindowTitle>
                <ArticleTitle
                    color={'dark'}
                    title={
                        this.props.userPage.selectedWindow === 'following' ?
                            'フォローアーティスト'
                            :
                            this.props.userPage.selectedWindow === 'nearby' ?
                                '近くのパフォーマンス'
                                :
                                this.props.userPage.selectedWindow === 'recommend' ?
                                    'おすすめパフォーマンス'
                                    :
                                    ''
                    }
                />
            </Styled.WindowTitle>
            <Styled.List>
                {
                    !this.props.userPage.isLoadWindow ?
                        this.props.userPage.selectedWindow === 'recommend' ?
                            this.props.userPage.recommendPerformances.map((performance, i) => (
                                <Styled.Card itemProp={(100 * i).toString()}>
                                    <PerformanceCard performanceId={performance} />
                                </Styled.Card>
                            ))
                            :
                            this.props.userPage.selectedWindow === 'following' ?
                                this.props.userPage.followingArtist.map((artist, i) => (
                                    <Styled.Card itemProp={(100 * i).toString()}>
                                        <ArtistCard
                                            artistId={artist}
                                            size={100}
                                            nameHidden={false}
                                            style={'standalone'}
                                            color={'light'}
                                            link={true}
                                        />
                                    </Styled.Card>
                                ))
                                :
                                this.props.userPage.selectedWindow === 'nearby' ?
                                    this.props.userPage.nearbyPerformances.map((performance, i) => (
                                        <Styled.Card itemProp={(100 * i).toString()}>
                                            <PerformanceCard performanceId={performance} />
                                        </Styled.Card>
                                    ))
                                    :
                                    null
                        :
                        null
                }
            </Styled.List>
        </Styled.Window>
    )

    public renderMapBox = () => (
        <MapGL
            {...this.props.userPage.viewport}
            width='100%'
            height={this.props.globalMenu.agent === 'undefined' ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'}
            mapStyle='mapbox://styles/mapbox/dark-v9'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            transitionDuration={10000}
            transitionEasing={d3Ease.easeCubicOut}
            transitionInterpolator={new map.FlyToInterpolator()}
            onLoad={this.OnRotate.bind(this,)}
            onViewportChange={this.onViewportChange.bind(this,)}
            onTransitionEnd={this.onTransitionEnd.bind(this,)}
            dragPan={false}
            doubleClickZoom={false}
            dragRotate={false}
            scrollZoom={false}
            ref={reactMap => this.mapGLRef = reactMap}
        >
            {
                this.props.userPage.initialMapPerformances.map(perform => 
                    <Marker
                        key={perform.performanceId}
                        latitude={perform.latitude}
                        longitude={perform.longitude}
                    >
                        <Styled.mapPinZone>
                            <Styled.mapPinName>{perform.performanceName}</Styled.mapPinName>
                            <Styled.mapPinIcon icon={faMapPin} />
                        </Styled.mapPinZone>
                    </Marker>
                )
            }
        </MapGL>
    )

    public renderLoadingThumb = () => (
        <Styled.LoadingImage>
            <CircularProgress />
        </Styled.LoadingImage>
    )

    public render() {
        return (
            !this.props.userPage.isLoad ?
                <section>
                    <Styled.GlobalStyle />
                    <Styled.Menu>
                        <Styled.MenuList><Styled.MenuLink to='/works/' >Works Store</Styled.MenuLink></Styled.MenuList>
                        <Styled.MenuList onClick={this.hundleRecommendClick}>おすすめパフォーマンス</Styled.MenuList>
                        <Styled.MenuList onClick={this.hundleNearbyClick}>近くのパフォーマンス</Styled.MenuList>
                        <li onClick={this.hundleFollowingClick}>フォローアーティスト</li>
                    </Styled.Menu>
                    <Link to={'/performances/' + this.props.userPage.nowPerformance.performanceId} >
                        <Styled.PlaceInfo itemProp={this.props.globalMenu.agent}>
                            <Styled.PerformanceName>
                                <ShuffleText content={this.props.userPage.nowPerformance.performanceName} />
                            </Styled.PerformanceName>
                            <Styled.performanceThumb>
                                <Styled.thumbImage
                                    src={this.props.userPage.nowPerformance.performanceThumbnail}
                                    loader={this.renderLoadingThumb()}
                                />
                            </Styled.performanceThumb>
                            <div>
                                <Styled.PerformanceTime>
                                    <ShuffleText content={dateformat(this.props.userPage.nowPerformance.start, 'yyyy/mm/dd hh:MM')} />
                                </Styled.PerformanceTime>
                                <Styled.PerformanceTime>
                                    <ShuffleText content={dateformat(this.props.userPage.nowPerformance.finish, 'yyyy/mm/dd hh:MM')} />
                                </Styled.PerformanceTime>
                                <Styled.PerformancePlaceName>
                                    <ShuffleText content={this.props.userPage.nowPerformance.placeName} />
                                </Styled.PerformancePlaceName>
                            </div>
                        </Styled.PlaceInfo>
                    </Link>
                    <Styled.Map itemProp={this.props.globalMenu.agent}>
                        {this.renderMapBox()}
                    </Styled.Map>
                    {this.renderPerformances()}
                </section>
                :
                null
        )
    }
}
