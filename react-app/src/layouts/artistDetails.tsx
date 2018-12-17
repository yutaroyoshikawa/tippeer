import { faBell, faComments, faHistory, faPaintBrush, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import * as actions from '../actions/artistDetails'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, DistanceCard, GoogleMap, PerformanceCard } from '../components'
import { IArtistDetailsState } from '../reducers/artistDetails'


export interface IProps extends IArtistDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            artistId: string
        }
    }
}

interface IState {
    offerBoxState: boolean
    biographyState: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        
        this.state={
            biographyState: false,
            offerBoxState: false,
        }
    }

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public renderPerformanceCard = () => (
        this.props.artistDetails.performanceHistory.map((id, key) => (
            <div key={key}>
                <PerformanceCard performanceId={id} />
            </div>
        ))
    )

    public renderOfferBox = () => (
        this.state.offerBoxState ?
        <div style={{position: 'absolute', width: '1020px', height: '500px', left: '50%', top: '50%', margin: '-250px 0 0 -510px', background: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '20px', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)'}}>
            <ArticleTitle title={'オファー'} />
            <form>
                <textarea cols={30} rows={10} />
            </form>
        </div>
        :
        null
    )

    public renderBiographyBox = () => (
        this.state.biographyState ?
        <div style={{position: 'absolute', width: '1020px', height: '500px', left: '50%', top: '50%', margin: '-250px 0 0 -510px', background: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '20px', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)'}}>
            <ArticleTitle title={'バイオグラフィー'} />
        </div>
        :
        null
    )

    public setOfferboxState = () => {
        this.setState({offerBoxState: this.state.offerBoxState ? false : true, biographyState: false})
    }

    public setBiographyState = () => {
        this.setState({biographyState: this.state.biographyState ? false : true, offerBoxState: false})
    }

    public render() {
        return(
            <section>
                <div style={{width: '100%', height: '80vh', background: 'url(' + this.props.artistDetails.topImage + ') no-repeat center', backgroundSize: 'cover', marginBottom: '15vh', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)' }}>
                    <div style={{background: 'rgba(255, 255, 255, 0.8)', display: 'inline-block', backdropFilter: 'blur(17px)', padding: '50px', margin: '10vh 0', width: '700px'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <div>
                                <p style={{textAlign: 'right', fontSize: '30px'}}>{this.props.artistDetails.jobTitle}</p>
                                <h2 style={{textAlign: 'right', fontSize: '90px'}}>{this.props.artistDetails.artistName}</h2>
                            </div>
                            <div>
                                <ArtistCard size={150} style={'standalone'} artistId={this.props.match.params.artistId} nameHidden={true} />
                            </div>
                        </div>
                        
                        <p style={{fontSize: '20px', paddingTop: '30px'}}>{this.props.artistDetails.selfIntroduction}</p>
                    </div>
                    <ul style={{display: 'flex', background: 'rgb(255, 255, 255)', padding: '30px', width: '1020px', listStyle: 'none', alignItems: 'center', position: 'absolute', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)', height: '90px', justifyContent: 'space-around', borderRadius: '20px', top: '80vh', left: '50%', marginLeft: '-510px'}}>
                        <li style={{width: '40px'}}><button onClick={this.props.dispatch.bind(this, this.props.artistDetails.subscribeState ? actions.successUnsubscribe() : actions.successSubscribe() )}><FontAwesomeIcon icon={faStar} style={{display: 'block', margin: '0 auto', fontSize: '40px', color: this.props.artistDetails.subscribeState ? 'rgb(255, 236, 0)' : 'black', filter: this.props.artistDetails.subscribeState ? 'drop-shadow(0 0 1px #555)' : 'none'}} /><span>登録</span></button></li>
                        <li style={{width: '40px'}}><button onClick={this.props.dispatch.bind(this, this.props.artistDetails.notifyState ? actions.successUnnotify() : actions.successNotify() )}><FontAwesomeIcon icon={faBell} style={{display: 'block', margin: '0 auto', fontSize: '40px', color: this.props.artistDetails.notifyState ? 'rgb(255, 236, 0)' : 'black', filter: this.props.artistDetails.notifyState ? 'drop-shadow(0 0 1px #555)' : 'none'}} /><span>通知</span></button></li>
                        <li style={{width: '40px'}}><button><Link to={'/artists/' + this.props.match.params.artistId + '/works'}><FontAwesomeIcon icon={faPaintBrush} style={{display: 'block', margin: '0 auto', fontSize: '40px'}} /><span>作品</span></Link></button></li>
                        <li style={{width: '64px', margin: '0 -12px'}}><button onClick={this.setOfferboxState.bind(this,)}><FontAwesomeIcon icon={faComments} style={{display: 'block', margin: '0 auto', fontSize: '40px'}} /><span>オファー</span></button></li>
                        <li style={{width: '128px', margin: '0 -44px'}}><button onClick={this.setBiographyState.bind(this,)}><FontAwesomeIcon icon={faHistory} style={{display: 'block', margin: '0 auto', fontSize: '40px'}} /><span>バイオグラフィー</span></button></li>
                    </ul> 
                    {this.renderOfferBox()}
                    {this.renderBiographyBox()}
                </div>
                
                <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center', background: '#fff'}}>
                    <div style={{boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)', padding: '80px', borderRadius: '50px', display: 'flex'}}>
                        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'space-between', marginRight: '-80px'}}>
                            <div>
                                <div style={{marginLeft: '-110px'}}>
                                    <ArticleTitle title={'最新のパフォーマンス'} />
                                </div>
                                <p style={{fontSize: '50px', marginBottom: '10px'}}>{this.props.artistDetails.recentlyPerformanceTitle}</p>
                                <div style={{display: 'flex'}}>
                                    <p>{this.props.artistDetails.recentlyPerformanceStart}</p>
                                    <p><span style={{margin: '0 10px'}}>-</span></p>
                                    <p>{this.props.artistDetails.recentlyPerformanceFinish}</p>
                                </div>
                                    <div style={{width: '450px', wordBreak: 'break-word'}}>
                                    <p style={{margin: '30px 0'}}>{this.props.artistDetails.recentlyPerformanceDescription}</p>
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <GoogleMap placeId={this.props.artistDetails.recentlyPerformancePlaceId} width={'250px'} height={'250px'} />
                                <div style={{position: 'relative', right: '100px'}}>
                                    <DistanceCard placeId={this.props.artistDetails.recentlyPerformancePlaceId} width={'300px'} height={'200px'} />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                <CommentBox type={'performance'} />
                            </div>
                            <CommentList type={'performance'} initialPerformanceComments={this.props.artistDetails.recentlyPerformanceComments} initialWorksComments={null} dark={false} />
                        </div>
                    </div>
                    
                </div>
                <div style={{margin: '0 0 10px 50px'}}>
                    <ArticleTitle title={'過去のパフォーマンス'} />
                </div>
                <div style={{display: 'flex'}}>
                    {this.renderPerformanceCard()}
                </div>    
            </section>
        )
    }
}