import * as React from 'react'
import { Index, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import {setSearchBoxWord} from '../actions/searchBox'
import { GoogleMap, PriceCard, SearchBoxInput } from '../components'
// import * as actions from '../actions/search'
import { ArticleTitle, ArtistCard } from '../components/'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { ISearchBoxState } from '../reducers/searchBox'

import * as Performance from '../styles/components/performanceCard'
import * as Place from '../styles/components/placeCard'
import * as Works from '../styles/components/worksCard'
import * as Styled from '../styles/search'


export interface IProps extends IGlobalMenuState, ISearchBoxState {
    dispatch: Dispatch<any>
    match: {
        params: {
            searchWord: string
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState('search'))
        this.props.dispatch(setSearchBoxWord(this.props.match.params.searchWord))
    }

    public pushHistory = () => (
        window.history.pushState(null, '', '/search/' + this.props.searchBox.searchWord)
    )

    public renderArtists = (hits: any) => (
        hits.hit ?
            <Styled.ArtistEntire>
                <Styled.ArtistLink to={"/artists/" + hits.hit.objectID} onClick={this.pushHistory.bind(this,)} >
                    <Styled.ArtistCard><Styled.ArtistIcon src={hits.hit.iconUrl} alt="ArtistIcon"/></Styled.ArtistCard>
                    <Styled.Name>{hits.hit.name}</Styled.Name>
                </Styled.ArtistLink>
            </Styled.ArtistEntire>
            :
            null
    )

    public renderPerformaces = (hits: any) => (
        hits.hit ?
            <Performance.Entire>
                <Link to={"/performances/" + hits.hit.objectID}  onClick={this.pushHistory.bind(this,)} >
                    <figure><Performance.PerformanceThumbnail src={hits.hit.thumbnail} alt="PerformanceThumbnail" /></figure>
                </Link>
                <Performance.PerformanceInfo>
                    <Link to={"/performances/" + hits.hit.objectID}  onClick={this.pushHistory.bind(this,)} >
                        <Performance.PerformanceName>{hits.hit.name}</Performance.PerformanceName>
                        <Performance.Start>{hits.hit.start}</Performance.Start>
                        <Performance.Finish>{hits.hit.finish}</Performance.Finish>
                    </Link>
                    <Link to={"/places/" + hits.hit.placeId}  onClick={this.pushHistory.bind(this,)}>
                        <Performance.PlaceInfo>{hits.hit.placeName}</Performance.PlaceInfo>
                    </Link>        
                </Performance.PerformanceInfo> 
            </Performance.Entire>
            :
            null
    )

    public renderPlaces = (hits: any) => (
        hits.hit ?
            <Place.Entire>
                <Link to={"/places/" + hits.hit.objectID}  onClick={this.pushHistory.bind(this,)} >
                    <figure><GoogleMap latitude={hits.hit.geoPlace.lat} longitude={hits.hit.geoPlace.long} width={'100%'} height={'110px'} /></figure>
                    <Place.PlaceInfo>
                        <Place.Name>{hits.hit.name}</Place.Name>
                        <Place.PostalCode>〒{hits.hit.postalCode}</Place.PostalCode>
                        <Place.Address>{hits.hit.address}</Place.Address>
                    </Place.PlaceInfo>
                </Link>
            </Place.Entire>
            :
            null
    )

    public renderWorks = (hits: any) => (
        hits.hit ?
            <Works.Entire>
                <Link to={"/works/" + hits.hit.objectID}  onClick={this.pushHistory.bind(this,)} >
                    <p><Works.WorksThumbnail src={hits.hit.thumbnail} alt="worksThumbnail"/></p>
                </Link>
                <Works.WorksInfo>
                    <Link to={"/works/" + hits.hit.objectID}  onClick={this.pushHistory.bind(this,)} >
                        <Works.WorksName>{hits.hit.name}</Works.WorksName>
                    </Link>
                    <Link to={'/artists/' + hits.hit.artistId}  onClick={this.pushHistory.bind(this,)} >
                        <ArtistCard artistId={hits.hit.artistId} size={40} style={'card'} nameHidden={false} color={'light'} link={true} />
                    </Link>
                    <Works.Price><PriceCard type={'circle'} price={hits.hit.price} size={80} /></Works.Price>
                </Works.WorksInfo>
            </Works.Entire>
            :
            null
    )

    public setSearchBox = (word: string) => {
        this.props.dispatch(setSearchBoxWord(word))
    }

    public renderPage = () => (
        this.props.searchBox.searchWord ?
        <Styled.Result>
            {
                this.props.globalMenu.agent === 'tablet' || this.props.globalMenu.agent === 'mobile' ?
                null
                :
                <Styled.SearchWord>{this.props.searchBox.searchWord}の検索結果</Styled.SearchWord>
            }
            <Styled.PerformanceTitle>
                <ArticleTitle title={'パフォーマンス'} color={'light'} />
            </Styled.PerformanceTitle>    
            <Styled.Contents>
                <Styled.ContentBox>
                    <Index indexName="performances">
                        <Styled.HitList hitComponent={this.renderPerformaces.bind(this,)} />
                    </Index>
                </Styled.ContentBox>    
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'アーティスト'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    <Index indexName="artists">
                        <Styled.HitList hitComponent={this.renderArtists.bind(this,)} />
                    </Index>
                </Styled.ContentBox> 
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'Works'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    <Index indexName="works">
                        <Styled.HitList hitComponent={this.renderWorks.bind(this,)} />
                    </Index>
                </Styled.ContentBox>
            </Styled.Contents>
            <Styled.PerformanceTitle>
                <ArticleTitle title={'場所'} color={'light'} />
            </Styled.PerformanceTitle>
            <Styled.Contents>
                <Styled.ContentBox>
                    <Index indexName="places">
                        <Styled.HitList hitComponent={this.renderPlaces.bind(this,)} />
                    </Index>
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

    public renderSearchBoxInput = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
        <Styled.SearchBox><SearchBoxInput /></Styled.SearchBox>
        :
        null
    )

    public render() {
        return(
            <Styled.Entire>
                <InstantSearch
                    apiKey={process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ? process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY : ''}
                    appId={process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ? process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID : ''}
                    indexName="performances"
                >
                    <SearchBox defaultRefinement={this.props.searchBox.searchWord} />
                    <Styled.GlobalStyle />
                    {this.renderSearchBoxInput()}
                    {this.renderPage()}
                </InstantSearch>
            </Styled.Entire>
        )
    }
}
