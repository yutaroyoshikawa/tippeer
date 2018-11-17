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
    }

    public render() {
        return(
            <li>
                <input type="text"/>
                <button>検索</button>
            </li>
        )
    }
}