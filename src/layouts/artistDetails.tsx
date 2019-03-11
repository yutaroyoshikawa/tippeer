import { faBell, faComments, faHistory, faPaintBrush, faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, Fab, TextField } from '@material-ui/core'
import * as dateformat from 'dateformat'
import * as React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Dispatch } from 'redux'
import * as actions from '../actions/artistDetails'
import { setCommentType } from '../actions/commentBox'
import { setMobileMenuState } from '../actions/mobileMenu'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, PerformanceCard, WorksCard } from '../components'
import { IArtistDetailsState } from '../reducers/artistDetails'
import { NotFound } from './'

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
    worksState: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        
        this.state={
            biographyState: false,
            offerBoxState: false,
            worksState: false,
        }
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState('none'))
        this.props.dispatch(actions.requestGetArtistInfo(this.props.match.params.artistId))
        this.props.dispatch(setCommentType('performance'))
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public renderPerformanceCard = () => (
        this.props.artistDetails.performanceHistories.map((id, key) => (
            <Styled.ListElements key={key}>
                <PerformanceCard performanceId={id.id} />
            </Styled.ListElements>
        ))
    )

    public renderOfferBox = () => (
        this.state.offerBoxState ?
        <Styled.ClickBox>
            <Styled.Title>
                <ArticleTitle title={'オファー'} color={'light'} />
            </Styled.Title>
            <button onClick={this.setOfferboxState}>
                <Styled.Closer icon={faTimesCircle} />
            </button>
            <Styled.Timeline>
                <Card style={{ width: '300px' }}>
                    <CardContent>
                        <TextField
                            placeholder="文章を入力"
                            multiline={true}
                            rows={2}
                            rowsMax={4}
                            variant="outlined"
                            style={{width: '100%'}}
                        />
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                            <Fab
                                color="secondary"
                                variant="extended"
                            >
                                送信
                            </Fab>
                        </div>
                    </CardContent>
                </Card>
            </Styled.Timeline>
        </Styled.ClickBox>
        :
        null
    )

    public renderWorks = () => (
        this.state.worksState ?
        <Styled.ClickBox>
            <Styled.Title>
                <ArticleTitle title="Works" color="dark" />
            </Styled.Title>
            <button onClick={this.setWorksState}>
                <Styled.Closer icon={faTimesCircle} />
            </button>
            <Styled.List>
                <Styled.Card itemProp="0">
                    <WorksCard
                        worksId="NgSLFZbF5ovpJfgi9hA7L"
                    />
                </Styled.Card>
                <Styled.Card itemProp="100">
                    <WorksCard
                        worksId="W3lkVwKPCt008xfRAI8Bn"
                    />
                </Styled.Card>
                <Styled.Card itemProp="200">
                    <WorksCard
                        worksId="sP0_0HyBrLtQsJdt2AC8j"
                    />
                </Styled.Card>
                <Styled.Card itemProp="300">
                    <WorksCard
                        worksId="wctQqO3E1EmEU2yhJshKA"
                    />
                </Styled.Card>
            </Styled.List>
        </Styled.ClickBox>
        :
        null
    )

    public renderBiographyBox = () => (
        this.state.biographyState ?
        <Styled.ClickBox>
            <Styled.Title>
                <ArticleTitle title={'バイオグラフィー'} color={'dark'} />
            </Styled.Title>
            <button onClick={this.setBiographyState}>
                <Styled.Closer icon={faTimesCircle} />
            </button>
            
            <Styled.Timeline>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<div />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<div />}
                />
                </VerticalTimeline>
            </Styled.Timeline>

        </Styled.ClickBox>
        :
        null
    )

    public setOfferboxState = () => {
        this.setState({offerBoxState: this.state.offerBoxState ? false : true, biographyState: false, worksState: false})
    }

    public setBiographyState = () => {
        this.setState({biographyState: this.state.biographyState ? false : true, offerBoxState: false, worksState: false})
    }

    public setWorksState = () => {
        this.setState({worksState: this.state.worksState ? false : true, offerBoxState: false, biographyState: false})
    }

    public render() {
        return(
            this.props.artistDetails.findArtist ?
                <section style={{position: 'absolute', top: 0, width: '100vw'}}>
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
                            <Styled.UsuallyButton>
                                <button
                                    onClick={
                                        this.props.dispatch.bind(this,
                                            this.props.artistDetails.subscribeState ?
                                                actions.requestUnfollow(this.props.match.params.artistId)
                                                :
                                                actions.requestFollow(this.props.match.params.artistId)
                                            )
                                    }
                                    disabled={this.props.artistDetails.isLoadFollow}
                                >
                                    <Styled.MarkColor
                                        itemScope={this.props.artistDetails.subscribeState}
                                    >
                                        <Styled.RegistrationMark icon={faStar}/>
                                    </Styled.MarkColor>
                                    <span>フォロー</span>
                                </button>
                            </Styled.UsuallyButton>
                            <Styled.UsuallyButton>
                                <button
                                    onClick={
                                        this.props.dispatch.bind(this,
                                            this.props.artistDetails.notifyState?
                                                actions.requestUnnotify()
                                                :
                                                actions.requestNotify()
                                        )
                                    }
                                    disabled={this.props.artistDetails.isLoadNotify}
                                >
                            <Styled.MarkColor itemScope={this.props.artistDetails.notifyState} ><Styled.RegistrationMark icon={faBell} /></Styled.MarkColor><span>通知</span></button></Styled.UsuallyButton>
                            <Styled.UsuallyButton><button onClick={this.setWorksState}><Styled.LinkMark icon={faPaintBrush} /><span>作品</span></button></Styled.UsuallyButton>
                            <Styled.OfferButton><button onClick={this.setOfferboxState}><Styled.LinkMark icon={faComments} /><span>オファー</span></button></Styled.OfferButton>
                            <Styled.BiographyButton><button onClick={this.setBiographyState}><Styled.LinkMark icon={faHistory} /><span>バイオグラフィー</span></button></Styled.BiographyButton>
                        </Styled.FunctionList> 
                        {this.renderOfferBox()}
                        {this.renderBiographyBox()}
                        {this.renderWorks()}
                    </Styled.TopSection>
                    
                    <Styled.RecentPerformanceSection>
                        <Styled.RecentPerformanceBox>
                            <Styled.PerformanceInfo>
                                <div>
                                    <Styled.RecentlyPerformanceTitle>
                                        <ArticleTitle title={'最新のパフォーマンス'} color={'light'} />
                                    </Styled.RecentlyPerformanceTitle>
                                    <Styled.PerformanceName>{this.props.artistDetails.recentlyPerformance.title}</Styled.PerformanceName>
                                    <Styled.RecentlyPerformanceInfo>
                                        <Styled.Start>{dateformat(this.props.artistDetails.recentlyPerformance.start, 'yyyy/mm/dd hh:MM')}</Styled.Start>
                                        <Styled.Finish>{dateformat(this.props.artistDetails.recentlyPerformance.finish, 'yyyy/mm/dd hh:MM')}</Styled.Finish>
                                    </Styled.RecentlyPerformanceInfo>
                                    <Styled.PerformanceDescriptionBox>
                                        <Styled.PerformanceDescription>{this.props.artistDetails.recentlyPerformance.description}</Styled.PerformanceDescription>
                                    </Styled.PerformanceDescriptionBox>
                                </div>
                                {/* <Styled.DesktopPerformancePlace>
                                    <GoogleMap placeId={this.props.artistDetails.recentlyPerformance.placeId} width={'250px'} height={'250px'} />
                                    <Styled.DistanceCard>
                                        <DistanceCard placeId={this.props.artistDetails.recentlyPerformancePlaceId} />
                                    </Styled.DistanceCard>
                                </Styled.DesktopPerformancePlace>
                                <Styled.MobilePerformancePlace>
                                    <GoogleMap placeId={this.props.artistDetails.recentlyPerformancePlaceId} width={'100px'} height={'100px'} />
                                    <Styled.DistanceCard>
                                        <DistanceCard placeId={this.props.artistDetails.recentlyPerformancePlaceId} />
                                    </Styled.DistanceCard>
                                </Styled.MobilePerformancePlace> */}
                            </Styled.PerformanceInfo>
                            
                            <Styled.PerformanceComment>
                                <div>
                                    <CommentBox />
                                </div>
                                <div style={{width: '90%', overflowY: 'scroll', webkitOverFlowScrolling: 'touch', margin: '0 auto', height: '300px'}}>
                                    <CommentList type={'performance'} initialPerformanceComments={this.props.artistDetails.recentlyPerformance.comments} initialWorksComments={null} dark={false} />
                                </div>
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
                :
                <NotFound />
        )
    }
}