import * as React from 'react'
import { Dispatch } from 'redux'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, DistanceCard, GoogleMap } from '../components'
import { IPerformanceDetailsState } from '../reducers/performaceDetails'

import * as Styled from '../styles/performanceDetails'

export interface IProps extends IPerformanceDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            performancesId: number
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public render() {
        return(
            <div>
                <Styled.TopSection itemProp={this.props.performanceDetails.thumbnail}>
                    <Styled.PerformanceInfo>
                        <Styled.PerformanceArticleTitle>
                            <ArticleTitle title={'Performance'} />
                        </Styled.PerformanceArticleTitle>
                        <Styled.TopPerformanceInfo>
                            <Styled.PerformanceThumbnail>
                                <Styled.Thumbnail src={this.props.performanceDetails.thumbnail} />
                            </Styled.PerformanceThumbnail>
                            <Styled.PerformanceDetails>
                                <Styled.PerformanceTitle>
                                    <ArticleTitle title={this.props.performanceDetails.performanceTitle} />
                                </Styled.PerformanceTitle>
                                <Styled.PerformanceArtist>
                                    <ArtistCard artistId={this.props.performanceDetails.artistId} size={80} style={'card'} nameHidden={false} />
                                </Styled.PerformanceArtist>
                                <Styled.MobilePerformanceArtist>
                                    <ArtistCard artistId={this.props.performanceDetails.artistId} size={30} style={'card'} nameHidden={false} />
                                </Styled.MobilePerformanceArtist>
                                <div>
                                    <Styled.Start>{this.props.performanceDetails.start}</Styled.Start>
                                    <Styled.Finish>{this.props.performanceDetails.finish}</Styled.Finish>
                                </div>
                                
                            </Styled.PerformanceDetails>
                        </Styled.TopPerformanceInfo>
                        <Styled.PerformanceDiscription>{this.props.performanceDetails.discription}</Styled.PerformanceDiscription>
                    </Styled.PerformanceInfo>
                    
                </Styled.TopSection>
                
                <Styled.BottomSection>
                    <GoogleMap placeId={this.props.performanceDetails.placeId} width={'100%'} height={'200px'} />
                    <Styled.PlaceDistance>
                        <DistanceCard placeId={this.props.performanceDetails.placeId} width={'200px'} height={'100px'} />
                    </Styled.PlaceDistance>
                    <Styled.CommentBox>
                        <CommentBox type={'performance'} />
                    </Styled.CommentBox>
                    <Styled.CommentList>
                        <CommentList type={'performance'} initialWorksComments={null} initialPerformanceComments={this.props.performanceDetails.comments} dark={false} />
                    </Styled.CommentList>
                </Styled.BottomSection>
            </div>
        )
    }
}