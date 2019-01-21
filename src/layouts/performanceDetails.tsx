import * as React from 'react'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import * as actions from '../actions/performanceDetails'
import { ArticleTitle, ArtistCard } from '../components'
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
        this.props.dispatch(setMobileMenuState({tabState: 'none'}))
        this.props.dispatch(actions.getPerformanceInfo(this.props.match.params.performanceId))
    }

    public render() {
        return(
            this.props.performanceDetails.findPerformance ?
                <div>
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
                                        <ArticleTitle title={this.props.performanceDetails.performanceTitle} color={'dark'} />
                                    </Styled.PerformanceTitle>
                                    <Styled.PerformanceArtist>
                                        <ArtistCard artistId={this.props.performanceDetails.artistId} size={80} style={'card'} nameHidden={false} color={'dark'} link={true} />
                                    </Styled.PerformanceArtist>
                                    <Styled.MobilePerformanceArtist>
                                        <ArtistCard artistId={this.props.performanceDetails.artistId} size={30} style={'card'} nameHidden={false} color={'dark'} link={true} />
                                    </Styled.MobilePerformanceArtist>
                                    <div>
                                        <Styled.Start>{this.props.performanceDetails.start.toTimeString()}</Styled.Start>
                                        <Styled.Finish>{this.props.performanceDetails.finish.toString()}</Styled.Finish>
                                    </div>
                                </Styled.PerformanceDetails>
                            </Styled.TopPerformanceInfo>
                            <Styled.PerformanceDiscription>{this.props.performanceDetails.discription}</Styled.PerformanceDiscription>
                        </Styled.PerformanceInfo>
                    </Styled.TopSection>
                    
                    {/* <Styled.BottomSection>
                        <GoogleMap placeId={this.props.performanceDetails.placeId} width={'100%'} height={'200px'} />
                        <Styled.PlaceDistance>
                            <DistanceCard placeId={this.props.performanceDetails.placeId} />
                        </Styled.PlaceDistance>
                        <Styled.CommentBox>
                            <CommentBox type={'performance'} />
                        </Styled.CommentBox>
                        <Styled.CommentList>
                            <CommentList type={'performance'} initialWorksComments={null} initialPerformanceComments={this.props.performanceDetails.comments} dark={false} />
                        </Styled.CommentList>
                    </Styled.BottomSection> */}
                </div>
                :
                <NotFound />
        )
    }
}