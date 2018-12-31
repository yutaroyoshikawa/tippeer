import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import {setSearchBoxWord} from '../actions/searchBox'
import { ArtistCard, PerformanceCard, PlaceCard, SearchBox, WorksCard } from '../components'
// import * as actions from '../actions/search'
import { ArticleTitle } from '../components/'
import { IGlobalMenuState } from '../reducers/globalMenu'

import * as Styled from '../styles/search'

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
            <Styled.Elements key={id}>
                <ArtistCard artistId={id} size={130} style={'standalone'} nameHidden={false} color={'light'} link={true} />
            </Styled.Elements>
        ))
    )

    public renderPerformaces = () => (
        this.state.result.performaces.map((id) => (
            <Styled.Elements key={id}>
                <PerformanceCard performanceId={id} />
            </Styled.Elements>
            
        ))
    )

    public renderPlaces = () => (
        this.state.result.places.map((id) => (
            <Styled.Elements>
                <PlaceCard placeId={id} />
            </Styled.Elements>
        ))
    )

    public renderWorks = () => (
        this.state.result.works.map((id) => (
            <Styled.Elements>
                <WorksCard worksId={id} />
            </Styled.Elements>
            
        ))
    )

    public setSearchBox = (word: string) => {
        this.props.dispatch(setSearchBoxWord({searchWord: word}))
    }

    public renderPage = () => (
        this.props.match.params.searchWord ?
        <Styled.Result>
            {
                this.props.globalMenu.agent === 'tablet' || this.props.globalMenu.agent === 'mobile' ?
                null
                :
                <Styled.SearchWord>{this.props.match.params.searchWord}の検索結果</Styled.SearchWord>
            }
            <Styled.PerformanceTitle>
                <ArticleTitle title={'パフォーマンス'} color={'light'} />
            </Styled.PerformanceTitle>    
            <Styled.Contents>
                <Styled.ContentBox>
                    {this.renderPerformaces()}
                </Styled.ContentBox>    
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'アーティスト'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    {this.renderArtists()}
                </Styled.ContentBox> 
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'Works'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    {this.renderWorks()}
                </Styled.ContentBox>
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'場所'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    {this.renderPlaces()}
                </Styled.ContentBox>
            </Styled.Contents>
        </Styled.Result>
        :
        <Styled.Trend>
            <Styled.TrendTitle>トレンド検索</Styled.TrendTitle>
            <Styled.TrendList>
                <Styled.TrendContent><Link to={'/search/hoge'} onClick={this.setSearchBox.bind(this,'hoge')}>hoge</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/hogehoge'} onClick={this.setSearchBox.bind(this,'hogehoge')}>hogehoge</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/piyo'} onClick={this.setSearchBox.bind(this,'piyo')}>piyo</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/piyopiyo'} onClick={this.setSearchBox.bind(this,'piyopiyo')}>piyopiyo</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/huga'} onClick={this.setSearchBox.bind(this,'huga')}>huga</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/hugahuga'} onClick={this.setSearchBox.bind(this,'hugahuga')}>hugahuga</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/foo'} onClick={this.setSearchBox.bind(this,'foo')}>foo</Link></Styled.TrendContent>
                <Styled.TrendContent><Link to={'/search/foofoo'} onClick={this.setSearchBox.bind(this,'foofoo')}>foofoo</Link></Styled.TrendContent>
            </Styled.TrendList>
        </Styled.Trend>
    )

    public renderSearchBox = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
        <Styled.SearchBox><SearchBox /></Styled.SearchBox>
        :
        null
    )

    public render() {
        return(
            <Styled.Entire>
                {this.renderSearchBox()}
                {this.renderPage()}
            </Styled.Entire>
        )
    }
}
