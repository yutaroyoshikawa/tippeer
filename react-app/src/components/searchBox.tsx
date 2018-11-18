import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Dispatch } from 'redux'
import { ISearchBoxState } from 'src/reducers/searchBox'

interface IProps extends ISearchBoxState {
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
                <form>
                    <button>
                        <FontAwesomeIcon icon={faSearch}  style={{width: '50px', height: '50px'}}/>
                    </button>
                    <input
                        type="text"
                        value={this.state.searchWord}
                        onChange={this.setSearchWordState}
                    />
                </form>
            </li>
        )
    }
}