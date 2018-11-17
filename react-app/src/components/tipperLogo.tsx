import * as React from 'react'
import { Dispatch } from 'redux'
import { ITipperLogoState } from 'src/reducers/tipperLogo'
import Tippericon from '../Tippericon.png'

interface IProps extends ITipperLogoState {
    dispatch: Dispatch<any>;
}

interface IState {
    url: string
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
    }

    public render() {
        return(
            <li>
                <img src={Tippericon} alt="TipperLogo" style={{'width': '50px'}}/>
            </li>
        )
    }
}