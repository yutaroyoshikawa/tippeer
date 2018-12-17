import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import { ArticleTitle } from '../components'
import { ArtistCard, WorksCard } from '../components'
import { IWorksTopState } from '../reducers/worksTop'

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
                    <div style={{margin: '0 0 30px 60px'}}>
                        <ArticleTitle title={'Works Store'} />
                    </div>
                    <section style={{width: '1020px', margin: '0 auto'}}>
                        <div style={{display: 'block', margin: '0 0 20px -20px'}}>
                            <ArticleTitle title={'Spotlight'} />
                        </div>
                        <div style={{display: 'flex'}}>
                            <article>
                                <Link to={'/works/' + this.props.worksTop.spotlight[0].worksId} style={{background: 'url(' + this.props.worksTop.spotlight[0].thumbnail + ') no-repeat center', width: '510px', height: '510px', backgroundSize: 'cover', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', marginRight: '20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-evenly'}} >
                                    <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around'}}>
                                        <p style={{fontSize: '25px'}}>{this.props.worksTop.spotlight[0].worksTitle}</p>
                                        <div>
                                            <ArtistCard artistId={this.props.worksTop.spotlight[0].artistId} size={50} style={'card'} nameHidden={false} />
                                        </div>
                                    </div>
                                </Link>  
                            </article>
                            <div>
                                <article>
                                    <Link to={'/works/' + this.props.worksTop.spotlight[1].worksId} style={{background: 'url(' + this.props.worksTop.spotlight[1].thumbnail + ') no-repeat center', width: '510px', height: '245px', backgroundSize: 'cover', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', marginBottom: '20px', display: 'flex', alignItems: 'flex-end'}} >
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                                            <p style={{fontSize: '25px'}}>{this.props.worksTop.spotlight[1].worksTitle}</p>
                                            <div>
                                                <ArtistCard artistId={this.props.worksTop.spotlight[1].artistId} size={50} style={'card'} nameHidden={false} />
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                                <div style={{display: 'flex'}}>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[2].worksId}  style={{background: 'url(' + this.props.worksTop.spotlight[2].thumbnail + ') no-repeat center', width: '245px', height: '245px', backgroundSize: 'cover', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center'}}>
                                            <p style={{fontSize: '25px', marginBottom: '7px'}}>{this.props.worksTop.spotlight[2].worksTitle}</p>
                                            <div style={{marginBottom: '-25px'}}>
                                                <ArtistCard artistId={this.props.worksTop.spotlight[2].artistId} size={50} style={'card'} nameHidden={false} />
                                            </div>
                                        </Link>
                                    </article>
                                    <article>
                                        <Link to={'/works/' + this.props.worksTop.spotlight[3].worksId} style={{background: 'url(' + this.props.worksTop.spotlight[3].thumbnail + ') no-repeat center', width: '245px', height: '245px', backgroundSize: 'cover', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', marginLeft: '20px', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center'}} >
                                            <p style={{fontSize: '25px', marginBottom: '7px'}}>{this.props.worksTop.spotlight[3].worksTitle}</p>
                                            <div style={{marginBottom: '-25px'}}>
                                                <ArtistCard artistId={this.props.worksTop.spotlight[3].artistId} size={50} style={'card'} nameHidden={false} />
                                            </div>
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{display: 'flex', overflow: 'scroll', WebkitOverflowScrolling: 'touch', width: '100%', marginTop: '40px'}}>
                        {this.renderFollowArtists()}
                    </div>
                </div>
                
                
                <section>
                    <div style={{marginLeft: '80px'}}>
                        <ArticleTitle title={'あなたにおすすめ'} />
                    </div>
                    <div style={{display: 'flex', overflow: 'scroll', WebkitOverflowScrolling: 'touch', width: '100%', marginTop: '40px'}}>
                        {this.renderRecommend()}
                    </div>
                </section>
                <section>
                    <div style={{marginLeft: '80px'}}>
                        <ArticleTitle title={'ニューリリース'} />
                    </div>
                    <div style={{display: 'flex', overflow: 'scroll', WebkitOverflowScrolling: 'touch', width: '100%', marginTop: '40px'}}>
                        {this.renderNewrelease()}
                    </div>
                </section>
                <section>
                    <div style={{marginLeft: '80px'}}>
                        <ArticleTitle title={'ランキング'} />
                    </div>
                    <div style={{display: 'flex', overflow: 'scroll', WebkitOverflowScrolling: 'touch', width: '100%', marginTop: '40px'}}>
                        {this.renderRanking()}
                    </div>
                </section>
            </div>
        )
    }
}