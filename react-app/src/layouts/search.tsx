import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import {setSearchBoxWord} from '../actions/searchBox'
import { ArtistCard, PerformanceCard, PlaceCard, SearchBox, WorksCard } from '../components'
// import * as actions from '../actions/search'
import { ArticleTitle } from '../components/'
import { IGlobalMenuState } from '../reducers/globalMenu'



export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>
    match: {
        params: {
            searchWord: string | undefined
        }
    }
}

export interface IState {
    result: {
        artists: string[]
        performaces: number[]
        places: number[]
        works: number[]
    }
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state={
            result: {
                artists: [],
                performaces: [],
                places: [],
                works: [],
            }
        }
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState({tabState: 'search'}))
        this.setState({
            result: {
                artists: ['hoge', 'huga', 'piyo', 'foo'],
                performaces: [0, 1, 2, 3],
                places: [0, 1, 2, 3],
                works: [0, 1, 2, 3],
            }
        })
        document.body.className = 'search'
    }

    public renderArtists = () => (
        this.state.result.artists.map((id) => (
            <div>
                <ArtistCard artistId={id} size={130} style={'standalone'} />
            </div>
        ))
    )

    public renderPerformaces = () => (
        this.state.result.performaces.map((id) => (
            <div>
                <PerformanceCard performanceId={id} />
            </div>
            
        ))
    )

    public renderPlaces = () => (
        this.state.result.places.map((id) => (
            <div>
                <PlaceCard placeId={id} />
            </div>
        ))
    )

    public renderWorks = () => (
        this.state.result.works.map((id) => (
            <div>
                <WorksCard worksId={id} />
            </div>
            
        ))
    )

    public setSearchBox = (word: string) => {
        this.props.dispatch(setSearchBoxWord({searchWord: word}))
    }

    public renderPage = () => (
        this.props.match.params.searchWord ?
        <div style={{width: '100%', position: 'relative'}}>
            {this.props.globalMenu.agent === 'tablet' || this.props.globalMenu.agent === 'mobile' ? null : <h2 style={{display: 'inline-block', backgroundColor: 'white', filter: 'drop-shadow(0 0 1px #555)', margin: '10px', padding: '3px 30px', borderRadius: '15px', color: '#999', fontWeight: 'normal', fontSize: '20px'}}>{this.props.match.params.searchWord}の検索結果</h2>}
            <div style={{display: 'block', margin: '10px', color: '#444'}}>
                <ArticleTitle title={'パフォーマンス'} />
            </div>    
            <div style={{overflowY: 'auto', WebkitOverflowScrolling: 'touch', margin: '10px 0', width: '100%'}}>
            <div style={{display: 'flex'}}>
                {this.renderPerformaces()}
            </div>    
            </div>
            <div style={{display:'block', margin: '10px', color: '#444'}}>
                <ArticleTitle title={'アーティスト'} />
            </div>
            <div style={{overflowY: 'auto', WebkitOverflowScrolling: 'touch', margin: '10px 0', width: '100%'}}>
            <div style={{display: 'flex'}}>
                {this.renderArtists()}
            </div>
                
            </div>
            
            <div style={{display:'block', margin: '10px', color: '#444'}}>
                <ArticleTitle title={'Works'} />
            </div>
            <div style={{overflowY: 'auto', WebkitOverflowScrolling: 'touch', margin: '10px 0', width: '100%'}}>
            <div style={{display: 'flex'}}>
                {this.renderWorks()}
            </div>
                
            </div>
            
            <div style={{display: 'block', margin: '10px', color: '#444'}}>
                <ArticleTitle title={'場所'} />
            </div>
            <div style={{overflowY: 'auto', WebkitOverflowScrolling: 'touch', margin: '10px 0', width: '100%'}}>
            <div style={{display: 'flex'}}>
            {this.renderPlaces()}
            </div>
                
            </div>
        </div>
        :
        <div style={{position: 'absolute', top: '25%', right: 0, bottom: 0, left: 0, margin: 'auto'}}>
            <h2 style={{textAlign: 'center', color: '#555', margin: '20px auto'}}>トレンド検索</h2>
            <ul style={{textAlign: 'center'}}>
                <li style={{margin: '10px 0'}}><Link to={'/search/hoge'} onClick={this.setSearchBox.bind(this,'hoge')}>hoge</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/hogehoge'} onClick={this.setSearchBox.bind(this,'hogehoge')}>hogehoge</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/piyo'} onClick={this.setSearchBox.bind(this,'piyo')}>piyo</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/piyopiyo'} onClick={this.setSearchBox.bind(this,'piyopiyo')}>piyopiyo</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/huga'} onClick={this.setSearchBox.bind(this,'huga')}>huga</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/hugahuga'} onClick={this.setSearchBox.bind(this,'hugahuga')}>hugahuga</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/foo'} onClick={this.setSearchBox.bind(this,'foo')}>foo</Link></li>
                <li style={{margin: '10px 0'}}><Link to={'/search/foofoo'} onClick={this.setSearchBox.bind(this,'foofoo')}>foofoo</Link></li>
            </ul>
        </div>
    )

    public renderSearchBox = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
        <div style={{position: 'fixed', filter: 'drop-shadow(0 0 1px #555)', zIndex: 5, left: '50%', transform: 'translate(-50%, -40px)', width: '80%'}}><SearchBox /></div>
        :
        null
    )

    public render() {
        return(
            <section style={{paddingTop: '60px', paddingBottom: '20px', backgroundColor: 'rgb(215, 187, 187)', overflow: 'hidden', width: '100%'}}>
                {this.renderSearchBox()}
                {this.renderPage()}
            </section>
        )
    }
}
