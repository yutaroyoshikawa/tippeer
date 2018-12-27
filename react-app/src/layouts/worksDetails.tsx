import * as React from 'react'
import { Dispatch } from 'redux'
import { Score } from '../components'
import { ArticleTitle } from '../components'
import { ArtistCard, CommentBox, CommentList, PriceCard } from '../components'
import { IWorksDetailsState } from '../reducers/worksDetails'

import * as Styled from '../styles/worksDetails'

export interface IProps extends IWorksDetailsState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.body.className = 'worksDetails'
        document.body.style.background = 'url(' + this.props.worksDetails.worksThumbnail + ') no-repeat center'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundAttachment = 'fixed'
    }

    public componentWillUnmount() {
        document.body.style.background = 'none'
    }

    public renderContents = () => (
        this.props.worksDetails.contents.map((data,key) => (
            <div key={key}>
                <li>
                    <Styled.Contents>
                        <Styled.ContentTitle>{data.title}</Styled.ContentTitle>
                        <Styled.ContentArtist><ArtistCard artistId={data.artistId} size={40} style={'card'} nameHidden={false} /></Styled.ContentArtist>
                        <Styled.ContentPrice><PriceCard type={'ellipse'} price={data.price} size={20} /></Styled.ContentPrice>
                    </Styled.Contents>
                </li>
                {key !== this.props.worksDetails.contents.length - 1 ? <Styled.ContentsBorder /> : null}
            </div>
        ))
    )

    public render() {
        return(
            <Styled.Entire className={'worksDetailsBody'}>
                <Styled.WorksInfo>
                    <Styled.TopWorksInfo>
                        <Styled.WorksThumbnail>
                            <Styled.InnerWorksThumbnail>
                                <img style={{width: '100%'}} src={this.props.worksDetails.worksThumbnail} alt="worksThumbnail"/>
                            </Styled.InnerWorksThumbnail>
                        </Styled.WorksThumbnail>
                        <Styled.WorksDetails>
                            <Styled.WorksTitle>{this.props.worksDetails.worksTitle}</Styled.WorksTitle>
                            <ArtistCard artistId={this.props.worksDetails.artistId} size={50} style={'card'} nameHidden={false} />
                            <PriceCard type={'ellipse'} price={this.props.worksDetails.price} size={30} />
                            <Score size={40} />
                        </Styled.WorksDetails>
                    </Styled.TopWorksInfo>
                    <Styled.Description>{this.props.worksDetails.description}</Styled.Description>
                    <Styled.ContentSection>
                        <ArticleTitle title={'Contents'} />
                        <Styled.ContentList>
                            {this.renderContents()}
                        </Styled.ContentList>
                    </Styled.ContentSection>
                </Styled.WorksInfo>
                
                <Styled.CommentSection>
                    <ArticleTitle title={'Comments'} />
                    <CommentBox type={'works'} />
                    <Styled.Comments>
                        <CommentList initialWorksComments={this.props.worksDetails.comments} initialPerformanceComments={null} type={'works'} dark={true} />
                    </Styled.Comments>
                </Styled.CommentSection>
            </Styled.Entire>
        )
    }
}