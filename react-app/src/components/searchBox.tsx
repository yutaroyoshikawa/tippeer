import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Dispatch } from 'redux'
import { ISearchBoxState } from 'src/reducers/searchBox'

export interface IProps extends ISearchBoxState {
    dispatch: Dispatch<any>;
}

interface IState {
    searchWord: string;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            searchWord: '',
        }
    }

    public setSearchWordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchWord: e.currentTarget.value})
    }

    public render() {
        return(
            <li>
                <form style={{border: 'solid 0.5px #555', borderRadius: '35px', padding: '5px', width: '700px'}}>
                    <button style={{padding: '3px'}}>
                        <FontAwesomeIcon icon={faSearch}  style={{width: '20px', height: '20px'}}/>
                    </button>
                    <input
                        type="text"
                        value={this.state.searchWord}
                        onChange={this.setSearchWordState}
                        style={{margin: '0px 10px'}}
                    />
                </form>
            </li>
        )
    }
}

