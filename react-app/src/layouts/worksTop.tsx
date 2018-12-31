import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import { ArticleTitle } from '../components'
import { ArtistCard, WorksCard } from '../components'
import { IWorksTopState } from '../reducers/worksTop'

import * as Styled from '../styles/worksTop'

export interface IProps extends IWorksTopState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState({tabState: 'works'}))
        document.body.className = 'normal'
    }

    public renderFollowArtists = (size: number) => (
        this.props.worksTop.followArtists.map((data, i) => (
            <div key={i}>
                <ArtistCard artistId={data} size={size} style={'standalone'} nameHidden={true} color={'light'} link={true} />
            </div>
        ))
    )

    public renderRecommend = () => (
        this.props.worksTop.recommend.map((data, i) => (
            <div key={i} >
                <WorksCard worksId={data} />
            </div>
        ))
    )

    public renderNewrelease = () => (
        this.props.worksTop.newReleace.map((data, i) => (
            <div key={i}>
                <WorksCard worksId={data} />
            </div>
        ))
    )

    public renderRanking = () => (
        this.props.worksTop.runking.map((data, i) => (
            <div key={i}>
                <WorksCard worksId={data} />
            </div>
        ))
    )

    public render() {
        return(
            <div>
                <Styled.TopSection>
                    <Styled.TopFollowArtists>
                        {this.renderFollowArtists(50)}
                    </Styled.TopFollowArtists>
                    <Styled.WorksStoreTitle>
                        <ArticleTitle title={'Works Store'} color={'dark'} />
                    </Styled.WorksStoreTitle>
                    <Styled.Spotlight>
                        <Styled.SpotlightTitle>
                            <ArticleTitle title={'Spotlight'} color={'dark'} />
                        </Styled.SpotlightTitle>
                        <Styled.TwoSection>
                            <article>
                                <Link to={'/works/' + this.props.worksTop.spotlight[0].worksId} >
                                    <Styled.TopSpotlight itemProp={this.props.worksTop.spotlight[0].thumbnail}>
                                        <Styled.LargeWorksInfo>
                                            <Styled.WorksTitle>{this.props.worksTop.spotlight[0].worksTitle}</Styled.WorksTitle>
                                            <div style={{color: '#FFF'}}>
                                                <ArtistCard artistId={this.props.worksTop.spotlight[0].artistId} size={50} style={'card'} nameHidden={false} color={'light'} link={true} />
                                            </div>
                                        </Styled.LargeWorksInfo>  
                                    </Styled.TopSpotlight>
                                </Link>  
                            </article>
                            <Styled.SecondTwoSection>
                                <article>
                                    <Link to={'/works/' + this.props.worksTop.spotlight[1].worksId} >
                                        <Styled.MiddleSpotlight itemProp={this.props.worksTop.spotlight[1].thumbnail}>
                                            <Styled.LargeWorksInfo>
                                                <Styled.MiddleWorksTitle>{this.props.worksTop.spotlight[1].worksTitle}</Styled.MiddleWorksTitle>
                                                <div>
                                                    <ArtistCard artistId={this.props.worksTop.spotlight[1].artistId} size={50} style={'card'} nameHidden={false} color={'light'} link={true} />
                                                </div>
                                            </Styled.LargeWorksInfo>
                                        </Styled.MiddleSpotlight>
                                    </Link>
                                </article>
                                <div style={{display: 'flex'}}>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[2].worksId} >
                                            <Styled.SmallLeftSpotlight itemProp={this.props.worksTop.spotlight[2].thumbnail}>
                                                <Styled.SmallWorksInfo>
                                                    <Styled.SmallWorksTitle>{this.props.worksTop.spotlight[2].worksTitle}</Styled.SmallWorksTitle>
                                                    <Styled.SmallWorksArtist>
                                                        <ArtistCard artistId={this.props.worksTop.spotlight[2].artistId} size={50} style={'card'} nameHidden={false} color={'light'} link={true} />
                                                    </Styled.SmallWorksArtist>
                                                </Styled.SmallWorksInfo>
                                            </Styled.SmallLeftSpotlight>
                                        </Link>
                                    </article>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[3].worksId} >
                                            <Styled.SmallRightSpotlight itemProp={this.props.worksTop.spotlight[3].thumbnail}>
                                                <Styled.SmallWorksInfo>
                                                    <Styled.SmallWorksTitle>{this.props.worksTop.spotlight[3].worksTitle}</Styled.SmallWorksTitle>
                                                    <Styled.SmallWorksArtist>
                                                        <ArtistCard artistId={this.props.worksTop.spotlight[3].artistId} size={50} style={'card'} nameHidden={false} color={'light'} link={true} />
                                                    </Styled.SmallWorksArtist>
                                                </Styled.SmallWorksInfo>
                                            </Styled.SmallRightSpotlight>
                                        </Link>
                                    </article>
                                </div>
                            </Styled.SecondTwoSection>
                        </Styled.TwoSection>
                    </Styled.Spotlight>
                    <Styled.BottomFollowArtists>
                        {this.renderFollowArtists(100)}
                    </Styled.BottomFollowArtists>
                </Styled.TopSection>
                
                
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'あなたにおすすめ'} color={'dark'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderRecommend()}
                    </Styled.CardContents>
                </section>
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'ニューリリース'} color={'dark'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderNewrelease()}
                    </Styled.CardContents>
                </section>
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'ランキング'} color={'dark'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderRanking()}
                    </Styled.CardContents>
                </section>
            </div>
        )
    }
}