import * as React from 'react'
import ReactSVG from 'react-svg'
import { Dispatch } from 'redux'
import { ITipperLogoState } from 'src/reducers/tipperLogo'
import TipperIcon from '../TipperIcon.svg'

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
                <button>
                    <ReactSVG src={TipperIcon} svgStyle={{ width: 50 }} />
                </button>
            </li>
        )
    }
}