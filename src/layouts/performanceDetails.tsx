import * as dateformat from 'dateformat'
import * as React from 'react'
import { Dispatch } from 'redux'
import { setCommentType } from '../actions/commentBox'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as actions from '../actions/performanceDetails'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, DistanceCard, GoogleMap } from '../components'
import { IPerformanceDetailsState } from '../reducers/performaceDetails'
import * as Styled from '../styles/performanceDetails'
import { NotFound } from './'

export interface IProps extends IPerformanceDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            performanceId: string
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState('none'))
        this.props.dispatch(actions.getPerformanceInfo(this.props.match.params.performanceId))
        this.props.dispatch(setCommentType('performance'))
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public render() {
        return(
            this.props.performanceDetails.findPerformance ?
                <section style={{position: 'absolute', top: 0, width: '100vw'}}>
                    <Styled.GlobalStyle />
                    <Styled.TopSection itemProp={this.props.performanceDetails.thumbnail}>
                        <Styled.PerformanceInfo>
                            <Styled.PerformanceArticleTitle>
                                <ArticleTitle title={'Performance'} color={'dark'} />
                            </Styled.PerformanceArticleTitle>
                            <Styled.TopPerformanceInfo>
                                <Styled.PerformanceThumbnail>
                                    <Styled.Thumbnail src={this.props.performanceDetails.thumbnail} />
                                </Styled.PerformanceThumbnail>
                                <Styled.PerformanceDetails>
                                    <Styled.PerformanceTitle>
                                        {this.props.performanceDetails.performanceTitle}
                                    </Styled.PerformanceTitle>
                                    <Styled.PerformanceArtist>
                                        <ArtistCard artistId={this.props.performanceDetails.artistId} size={80} style={'card'} nameHidden={false} color={'dark'} link={true} />
                                    </Styled.PerformanceArtist>
                                    <Styled.MobilePerformanceArtist>
                                        <ArtistCard artistId={this.props.performanceDetails.artistId} size={30} style={'card'} nameHidden={false} color={'dark'} link={true} />
                                    </Styled.MobilePerformanceArtist>
                                    <div>
                                        <Styled.Start>{dateformat(this.props.performanceDetails.start, 'yyyy/mm/dd hh:MM')}</Styled.Start>
                                        <Styled.Finish>{dateformat(this.props.performanceDetails.finish, 'yyyy/mm/dd hh:MM')}</Styled.Finish>
                                    </div>
                                </Styled.PerformanceDetails>
                            </Styled.TopPerformanceInfo>
                            <Styled.PerformanceDiscription>{this.props.performanceDetails.discription}</Styled.PerformanceDiscription>
                        </Styled.PerformanceInfo>
                    </Styled.TopSection>
                    
                    <Styled.BottomSection>
                        <GoogleMap latitude={this.props.performanceDetails.geoLocate[0]} longitude={this.props.performanceDetails.geoLocate[1]} width={'100%'} height={'200px'} />
                        <Styled.PlaceDistance>
                            <DistanceCard placeId={0} />
                        </Styled.PlaceDistance>
                        <Styled.CommentBox>
                            <CommentBox />
                        </Styled.CommentBox>
                        <Styled.CommentList>
                            <CommentList type={'performance'} initialWorksComments={null} initialPerformanceComments={this.props.performanceDetails.comments} dark={false} />
                        </Styled.CommentList>
                    </Styled.BottomSection>
                </section>
                :
                <NotFound />
        )
    }
}