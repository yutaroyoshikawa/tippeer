import * as React from 'react'
import { IPerformanceComments, IWorksComments } from '../reducers/worksDetails'
import { ArtistCard, Score } from './'

import * as Styled from '../styles/components/commentList'

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

    public renderComments = () => (
        this.props.type === 'works' ?
            this.props.initialWorksComments !== null ?
                this.props.initialWorksComments.map((data, key) => (
                    <div key={key}>
                        <Styled.Commnet>
                            <Styled.CommentElements>
                                <Styled.Artist><ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} color={'dark'} link={false} /></Styled.Artist>
                                <Styled.CommentContents>
                                    <li><Score size={20} /></li>
                                    <li>{data.content}</li>
                                    <Styled.PostedData>
                                        <li>{data.userId}</li>
                                        <li>{data.createdAt.toString()}</li>
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
                    </div>
                ))
            : null
        :
        this.props.initialPerformanceComments !== null ?
            this.props.initialPerformanceComments.map((data, key) => (
                <div key={key}>
                    <Styled.Commnet>
                        <Styled.CommentElements>
                            <Styled.Artist>{<ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} color={'dark'} link={false} />}</Styled.Artist>
                            <Styled.CommentContents>
                                <li>{data.content}</li>
                                <Styled.PostedData>
                                    <Styled.UserId>{data.userId}</Styled.UserId>
                                    <li>{data.createdAt.toString()}</li>
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
                </div>
            ))
        : null
    )

    public render() {
        return(
            <Styled.Entire>
                {this.renderComments()}
            </Styled.Entire>
        )
    }
}