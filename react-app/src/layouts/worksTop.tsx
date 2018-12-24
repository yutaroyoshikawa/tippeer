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

    public renderFollowArtists = () => (
        this.props.worksTop.followArtists.map((data, i) => (
            <div key={i}>
                <ArtistCard artistId={data} size={100} style={'standalone'} nameHidden={true} />
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
                <div style={{width: '100%', height: '100vh', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', minHeight: '900px'}}>
                    <Styled.WorksStoreTitle>
                        <ArticleTitle title={'Works Store'} />
                    </Styled.WorksStoreTitle>
                    <Styled.Spotlight>
                        <Styled.SpotlightTitle>
                            <ArticleTitle title={'Spotlight'} />
                        </Styled.SpotlightTitle>
                        <div style={{display: 'flex'}}>
                            <article>
                                <Link to={'/works/' + this.props.worksTop.spotlight[0].worksId} >
                                    <Styled.TopSpotlight itemProp={this.props.worksTop.spotlight[0].thumbnail}>
                                        <Styled.WorksInfo>
                                            <Styled.WorksTitle>{this.props.worksTop.spotlight[0].worksTitle}</Styled.WorksTitle>
                                            <div>
                                                <ArtistCard artistId={this.props.worksTop.spotlight[0].artistId} size={50} style={'card'} nameHidden={false} />
                                            </div>
                                        </Styled.WorksInfo>
                                        
                                    </Styled.TopSpotlight>
                                </Link>  
                            </article>
                            <div>
                                <article>
                                    <Link to={'/works/' + this.props.worksTop.spotlight[1].worksId} >
                                        <Styled.MiddleSpotlight itemProp={this.props.worksTop.spotlight[1].thumbnail}>
                                            <Styled.WorksInfo>
                                                <Styled.WorksTitle>{this.props.worksTop.spotlight[1].worksTitle}</Styled.WorksTitle>
                                                <div>
                                                    <ArtistCard artistId={this.props.worksTop.spotlight[1].artistId} size={50} style={'card'} nameHidden={false} />
                                                </div>
                                            </Styled.WorksInfo>
                                        </Styled.MiddleSpotlight>
                                    </Link>
                                </article>
                                <div style={{display: 'flex'}}>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[2].worksId} >
                                            <Styled.SmallLeftSpotlight itemProp={this.props.worksTop.spotlight[2].thumbnail}>
                                                <Styled.SmallWorksTitle>{this.props.worksTop.spotlight[2].worksTitle}</Styled.SmallWorksTitle>
                                                <Styled.SmallWorksArtist>
                                                    <ArtistCard artistId={this.props.worksTop.spotlight[2].artistId} size={50} style={'card'} nameHidden={false} />
                                                </Styled.SmallWorksArtist>
                                            </Styled.SmallLeftSpotlight>
                                        </Link>
                                    </article>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[3].worksId} >
                                            <Styled.SmallRightSpotlight itemProp={this.props.worksTop.spotlight[3].thumbnail}>
                                                <Styled.SmallWorksTitle>{this.props.worksTop.spotlight[3].worksTitle}</Styled.SmallWorksTitle>
                                                <Styled.SmallWorksArtist>
                                                    <ArtistCard artistId={this.props.worksTop.spotlight[3].artistId} size={50} style={'card'} nameHidden={false} />
                                                </Styled.SmallWorksArtist>
                                            </Styled.SmallRightSpotlight>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Styled.Spotlight>
                    <Styled.FollowArtists>
                        {this.renderFollowArtists()}
                    </Styled.FollowArtists>
                </div>
                
                
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'あなたにおすすめ'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderRecommend()}
                    </Styled.CardContents>
                </section>
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'ニューリリース'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderNewrelease()}
                    </Styled.CardContents>
                </section>
                <section>
                    <Styled.CardTitle>
                        <ArticleTitle title={'ランキング'} />
                    </Styled.CardTitle>
                    <Styled.CardContents>
                        {this.renderRanking()}
                    </Styled.CardContents>
                </section>
            </div>
        )
    }
}