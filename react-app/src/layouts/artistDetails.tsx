import { faBell, faComments, faHistory, faPaintBrush, faStar } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import * as actions from '../actions/artistDetails'
import { setMobileMenuState } from '../actions/globalMenu'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, DistanceCard, GoogleMap, PerformanceCard } from '../components'
import { IArtistDetailsState } from '../reducers/artistDetails'

import * as Styled from '../styles/artistDetails'

export interface IProps extends IArtistDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            artistId: string
        }
    }
}

interface IState {
    offerBoxState: boolean
    biographyState: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        
        this.state={
            biographyState: false,
            offerBoxState: false,
        }
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState({tabState: 'none'}))
    }

    public renderPerformanceCard = () => (
        this.props.artistDetails.performanceHistory.map((id, key) => (
            <Styled.ListElements key={key}>
                <PerformanceCard performanceId={id} />
            </Styled.ListElements>
        ))
    )

    public renderOfferBox = () => (
        this.state.offerBoxState ?
        <Styled.ClickBox>
            <ArticleTitle title={'オファー'} color={'light'} />
            <form>
                <textarea cols={30} rows={10} />
            </form>
        </Styled.ClickBox>
        :
        null
    )

    public renderBiographyBox = () => (
        this.state.biographyState ?
        <Styled.ClickBox>
            <ArticleTitle title={'バイオグラフィー'} color={'light'} />
        </Styled.ClickBox>
        :
        null
    )

    public setOfferboxState = () => {
        this.setState({offerBoxState: this.state.offerBoxState ? false : true, biographyState: false})
    }

    public setBiographyState = () => {
        this.setState({biographyState: this.state.biographyState ? false : true, offerBoxState: false})
    }

    public render() {
        return(
            <section>
                <Styled.GlobalStyle />
                <Styled.TopSection itemProp={this.props.artistDetails.topImage}>
                    <Styled.ArtistInfo>
                        <Styled.TopArtistinfo>
                            <div>
                                <Styled.JobTitle>{this.props.artistDetails.jobTitle}</Styled.JobTitle>
                                <Styled.ArtistName>{this.props.artistDetails.artistName}</Styled.ArtistName>
                            </div>
                            <Styled.ArtistCard>
                                <ArtistCard size={150} style={'standalone'} artistId={this.props.match.params.artistId} nameHidden={true} color={'dark'} link={false} />
                            </Styled.ArtistCard>
                        </Styled.TopArtistinfo>
                        
                        <Styled.SelfIntroduction>{this.props.artistDetails.selfIntroduction}</Styled.SelfIntroduction>
                        <Styled.MobileArtistCard>
                                <ArtistCard size={80} style={'standalone'} artistId={this.props.match.params.artistId} nameHidden={true} color={'dark'} link={false} />
                        </Styled.MobileArtistCard>
                    </Styled.ArtistInfo>
                    <Styled.FunctionList>
                        <Styled.UsuallyButton><button onClick={this.props.dispatch.bind(this, this.props.artistDetails.subscribeState ? actions.successUnsubscribe() : actions.successSubscribe() )}><Styled.MarkColor itemScope={this.props.artistDetails.subscribeState} ><Styled.RegistrationMark icon={faStar}/></Styled.MarkColor><span>登録</span></button></Styled.UsuallyButton>
                        <Styled.UsuallyButton><button onClick={this.props.dispatch.bind(this, this.props.artistDetails.notifyState ? actions.successUnnotify() : actions.successNotify() )}><Styled.MarkColor itemScope={this.props.artistDetails.notifyState} ><Styled.RegistrationMark icon={faBell} /></Styled.MarkColor><span>通知</span></button></Styled.UsuallyButton>
                        <Styled.UsuallyButton><button><Link to={'/artists/' + this.props.match.params.artistId + '/works'}><Styled.LinkMark icon={faPaintBrush} /><span>作品</span></Link></button></Styled.UsuallyButton>
                        <Styled.OfferButton><button onClick={this.setOfferboxState.bind(this,)}><Styled.LinkMark icon={faComments} /><span>オファー</span></button></Styled.OfferButton>
                        <Styled.BiographyButton><button onClick={this.setBiographyState.bind(this,)}><Styled.LinkMark icon={faHistory} /><span>バイオグラフィー</span></button></Styled.BiographyButton>
                    </Styled.FunctionList> 
                    {this.renderOfferBox()}
                    {this.renderBiographyBox()}
                </Styled.TopSection>
                
                <Styled.RecentPerformanceSection>
                    <Styled.RecentPerformanceBox>
                        <Styled.PerformanceInfo>
                            <div>
                                <Styled.RecentlyPerformanceTitle>
                                    <ArticleTitle title={'最新のパフォーマンス'} color={'light'} />
                                </Styled.RecentlyPerformanceTitle>
                                <Styled.PerformanceName>{this.props.artistDetails.recentlyPerformanceTitle}</Styled.PerformanceName>
                                <Styled.RecentlyPerformanceInfo>
                                    <Styled.Start>{this.props.artistDetails.recentlyPerformanceStart}</Styled.Start>
                                    <Styled.Finish>{this.props.artistDetails.recentlyPerformanceFinish}</Styled.Finish>
                                </Styled.RecentlyPerformanceInfo>
                                <Styled.PerformanceDescriptionBox>
                                    <Styled.PerformanceDescription>{this.props.artistDetails.recentlyPerformanceDescription}</Styled.PerformanceDescription>
                                </Styled.PerformanceDescriptionBox>
                            </div>
                            <Styled.DesktopPerformancePlace>
                                <GoogleMap placeId={this.props.artistDetails.recentlyPerformancePlaceId} width={'250px'} height={'250px'} />
                                <Styled.DistanceCard>
                                    <DistanceCard placeId={this.props.artistDetails.recentlyPerformancePlaceId} />
                                </Styled.DistanceCard>
                            </Styled.DesktopPerformancePlace>
                            <Styled.MobilePerformancePlace>
                                <GoogleMap placeId={this.props.artistDetails.recentlyPerformancePlaceId} width={'100px'} height={'100px'} />
                                <Styled.DistanceCard>
                                    <DistanceCard placeId={this.props.artistDetails.recentlyPerformancePlaceId} />
                                </Styled.DistanceCard>
                            </Styled.MobilePerformancePlace>
                        </Styled.PerformanceInfo>
                        
                        <Styled.PerformanceComment>
                            <div>
                                <CommentBox type={'performance'} />
                            </div>
                            <CommentList type={'performance'} initialPerformanceComments={this.props.artistDetails.recentlyPerformanceComments} initialWorksComments={null} dark={false} />
                        </Styled.PerformanceComment>
                    </Styled.RecentPerformanceBox>  
                </Styled.RecentPerformanceSection>
                <Styled.PerformanceHistoryTitle>
                    <ArticleTitle title={'過去のパフォーマンス'} color={'light'} />
                </Styled.PerformanceHistoryTitle>
                <Styled.PerformanceHistory>
                    {this.renderPerformanceCard()}
                </Styled.PerformanceHistory>    
            </section>
        )
    }
}