import { Star, StarBorder } from '@material-ui/icons'
import * as dateformat from 'dateformat'
import * as React from 'react'
import Rating from 'react-rating'
import { IPerformanceComments, IWorksComments } from '../reducers/worksDetails'
import { ArtistCard } from './'

import * as Styled from '../styles/components/commentList'
import * as ScoreStyled from '../styles/components/score'

export interface IProps {
    type: 'performance' | 'works' | 'standalone'
    initialWorksComments: IWorksComments[] | null
    initialPerformanceComments: IPerformanceComments[] | null
    dark: boolean
}

export class CommentList extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderScore = (rate: number) => (
        <ScoreStyled.ScoreBox>
            <Rating
                initialRating={rate}
                emptySymbol={<StarBorder />}
                fullSymbol={<Star />}
                readonly={true}
            />
        </ScoreStyled.ScoreBox>
    )

    public renderComments = () => (
        this.props.type === 'works' ?
            this.props.initialWorksComments !== null ?
                this.props.initialWorksComments.map((data, key) => (
                    <Styled.ListWrapper key={key}>
                        <Styled.Commnet>
                            <Styled.CommentElements>
                                <Styled.Artist><ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} color={'dark'} link={false} /></Styled.Artist>
                                <Styled.CommentContents>
                                    <li>{this.renderScore(data.score)}</li>
                                    <li>{data.content}</li>
                                    <Styled.PostedData>
                                        <li style={{marginRight: '10px'}}>{data.userId}</li>
                                        <li>{dateformat(data.createdAt, 'yyyy/mm/dd hh:MM')}</li>
                                    </Styled.PostedData>
                                </Styled.CommentContents>
                            </Styled.CommentElements>
                        </Styled.Commnet>
                        {
                            this.props.initialWorksComments !== null ?
                                key !== this.props.initialWorksComments.length - 1 ?
                                    this.props.dark ?
                                        <Styled.LightSepatateLine />
                                        :
                                        <Styled.DarkSeparateLine />
                                    : null
                                : null
                        }
                    </Styled.ListWrapper>
                ))
                : null
            :
            this.props.initialPerformanceComments !== null ?
                this.props.initialPerformanceComments.map((data, key) => (
                    <Styled.ListWrapper
                        key={key}
                        itemScope={
                            this.props.initialPerformanceComments ?
                                this.props.initialPerformanceComments.length === key ? true : false
                                :
                                false
                        }
                    >
                        <Styled.Commnet>
                            <Styled.CommentElements>
                                <Styled.Artist>{<ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} color={'dark'} link={false} />}</Styled.Artist>
                                <Styled.CommentContents>
                                    <li>{data.content}</li>
                                    <Styled.PostedData>
                                        <Styled.UserId>{data.userId}</Styled.UserId>
                                        <li>{dateformat(data.createdAt, 'yyyy/mm/dd hh:MM')}</li>
                                    </Styled.PostedData>
                                </Styled.CommentContents>
                            </Styled.CommentElements>
                        </Styled.Commnet>
                        {
                            this.props.initialPerformanceComments !== null ?
                                key !== this.props.initialPerformanceComments.length - 1 ?
                                    this.props.dark ?
                                        <Styled.LightSepatateLine />
                                        :
                                        <Styled.DarkSeparateLine />
                                    : null
                                : null
                        }
                    </Styled.ListWrapper>
                ))
                : null
    )

    public render() {
        return (
            <Styled.Entire>
                {this.renderComments()}
            </Styled.Entire>
        )
    }
}