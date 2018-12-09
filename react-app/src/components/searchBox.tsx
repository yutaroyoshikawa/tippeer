import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import * as reactRouter from 'react-router-dom'
import { Dispatch } from 'redux'
import { ISearchBoxState } from 'src/reducers/searchBox'

import * as actions from '../actions/search'
import {setSearchBoxWord} from '../actions/searchBox'

export interface IProps extends ISearchBoxState, reactRouter.RouteComponentProps<{}> {
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

    public render() {
        return(
            <form onSubmit={this.onSubmit.bind(this,)} style={{ borderRadius: '35px', padding: '5px', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center'}}>
                <button style={{padding: '3px'}}>
                    <FontAwesomeIcon icon={faSearch}  style={{width: '20px', height: '20px', color: '#555'}}/>
                </button>
                <input
                    type="text"
                    value={this.props.searchBox.searchWord}
                    onChange={this.setSearchWordState}
                    style={{margin: '0px 10px'}}
                />
            </form>
        )
    }
}

