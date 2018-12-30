import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import * as reactRouter from 'react-router-dom'
import { Dispatch } from 'redux'
import { ISearchBoxState } from 'src/reducers/searchBox'
import * as actions from '../actions/search'
import {setSearchBoxWord} from '../actions/searchBox'
import { IGlobalMenuState } from '../reducers/globalMenu'

import * as Styled from '../styles/components/searchBox'

export interface IProps extends ISearchBoxState, reactRouter.RouteComponentProps<{}>, IGlobalMenuState {
    dispatch: Dispatch<any>;
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }

    public setSearchWordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dispatch(setSearchBoxWord({searchWord: e.currentTarget.value}))
    }

    public onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.dispatch(actions.Search({searchWord: this.props.searchBox.searchWord}))
        this.props.history.push('/search/' + this.props.searchBox.searchWord)
    }

    public renderSearchBox = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
        <Styled.MobileForm onSubmit={this.onSubmit.bind(this,)}>
            <Styled.MobileSearchWordInput
                type="text"
                value={this.props.searchBox.searchWord}
                onChange={this.setSearchWordState}
                placeholder="TIPPERを検索"
            />
            <Styled.MobileSearchButton>
                <Styled.MobileSearchIcon icon={faSearch}/>
            </Styled.MobileSearchButton>
        </Styled.MobileForm>
        :
        <Styled.Form onSubmit={this.onSubmit.bind(this,)}>
            <Styled.SearchWordInput
                type="text"
                value={this.props.searchBox.searchWord}
                onChange={this.setSearchWordState}
                placeholder="TIPPERを検索"
            />
            <Styled.SearchButton>
                <Styled.SearchIcon icon={faSearch}/>
            </Styled.SearchButton>
        </Styled.Form>
    )

    public render() {
        return(
            <div>
                {this.renderSearchBox()}
            </div>
        )
    }
}

