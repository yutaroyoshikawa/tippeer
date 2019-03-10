import { Star, StarBorder } from '@material-ui/icons'
import * as React from 'react'
import Rating from 'react-rating'
import { Dispatch } from 'redux'
import { setCommentType } from '../actions/commentBox'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as actions from '../actions/worksDetails'
import { ArticleTitle } from '../components'
import { ArtistCard, CommentBox, CommentList, PriceCard } from '../components'
import { IWorksDetailsState } from '../reducers/worksDetails'

import * as ScoreStyled from '../styles/components/score'
import * as Styled from '../styles/worksDetails'

import paymentConfig from '../paymentConfig'

export interface IProps extends IWorksDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            worksId: string
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentWillUnmount() {
        document.body.style.background = 'none'
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState('none'))
        this.props.dispatch(actions.requestFindWorksInfo(this.props.match.params.worksId))
        this.props.dispatch(setCommentType('works'))
    }

    public renderScore = (rate: number, size: number) => (
        <ScoreStyled.ScoreBox>
            <Rating
                initialRating={rate}
                emptySymbol={<StarBorder />}
                fullSymbol={<Star />}
                readonly={true}
            />
        </ScoreStyled.ScoreBox>
    )

    public renderContents = () => (
        this.props.worksDetails.contents.map((data, key) => (
            <div key={key}>
                <li>
                    <Styled.Contents>
                        <Styled.ContentTitle>{data.title}</Styled.ContentTitle>
                        <Styled.ContentArtist><ArtistCard artistId={data.artistId} size={40} style={'card'} nameHidden={false} color={'dark'} link={true} /></Styled.ContentArtist>
                        <Styled.ContentPrice>
                            <PriceCard
                                type={'ellipse'}
                                price={data.price}
                                size={15}
                                config={paymentConfig(
                                    {
                                        total: {
                                            amount: {
                                                currency: 'JPY',
                                                value: data.price.toString(),
                                            },
                                            label: data.title,
                                        },
                                    }
                                )}
                            />
                        </Styled.ContentPrice>
                    </Styled.Contents>
                </li>
                {key !== this.props.worksDetails.contents.length - 1 ? <Styled.ContentsBorder /> : null}
            </div>
        ))
    )

    public render() {
        return (
            <Styled.Entire itemProp={this.props.worksDetails.worksThumbnail}>
                <div style={{ width: '100vw', position: 'relative', zIndex: 5, display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <Styled.WorksInfo>
                            <Styled.TopWorksInfo>
                                <Styled.WorksThumbnail>
                                    <Styled.InnerWorksThumbnail>
                                        <img style={{ width: '100%' }} src={this.props.worksDetails.worksThumbnail} alt="worksThumbnail" />
                                    </Styled.InnerWorksThumbnail>
                                </Styled.WorksThumbnail>
                                <Styled.WorksDetails>
                                    <Styled.WorksTitle>{this.props.worksDetails.worksTitle}</Styled.WorksTitle>
                                    <ArtistCard artistId={this.props.worksDetails.artistId} size={50} style={'card'} nameHidden={false} color={'dark'} link={true} />
                                    <Styled.DesktopPriceCard>
                                        <PriceCard
                                            type={'ellipse'}
                                            price={this.props.worksDetails.entirePrice}
                                            size={30}
                                            config={paymentConfig(
                                                {
                                                    total: {
                                                        amount: {
                                                            currency: 'JPY',
                                                            value: this.props.worksDetails.entirePrice.toString(),
                                                        },
                                                        label: this.props.worksDetails.worksTitle,
                                                    },
                                                }
                                            )}
                                        />
                                    </Styled.DesktopPriceCard>
                                    <Styled.MobilePriceCard>
                                        <PriceCard
                                            type={'ellipse'}
                                            price={this.props.worksDetails.entirePrice}
                                            size={18}
                                            config={paymentConfig(
                                                {
                                                    total: {
                                                        amount: {
                                                            currency: 'JPY',
                                                            value: this.props.worksDetails.entirePrice.toString(),
                                                        },
                                                        label: this.props.worksDetails.worksTitle,
                                                    },
                                                }
                                            )}
                                        />
                                    </Styled.MobilePriceCard>
                                    <Styled.DesktopScore>
                                        {this.renderScore(this.props.worksDetails.score, 40)}
                                    </Styled.DesktopScore>
                                    <Styled.MobileScore>
                                        {this.renderScore(this.props.worksDetails.score, 25)}
                                    </Styled.MobileScore>
                                </Styled.WorksDetails>
                            </Styled.TopWorksInfo>
                            <Styled.Description>{this.props.worksDetails.description}</Styled.Description>
                            <Styled.ContentSection>
                                <ArticleTitle title={'Contents'} color={'dark'} />
                                <Styled.ContentList>
                                    {this.renderContents()}
                                </Styled.ContentList>
                            </Styled.ContentSection>
                        </Styled.WorksInfo>

                        <Styled.CommentSection>
                            <ArticleTitle title={'Comments'} color={'dark'} />
                            <CommentBox />
                            <Styled.Comments>
                                <CommentList initialWorksComments={this.props.worksDetails.comments} initialPerformanceComments={null} type={'works'} dark={true} />
                            </Styled.Comments>
                        </Styled.CommentSection>
                    </div>
                </div>
            </Styled.Entire>
        )
    }
}