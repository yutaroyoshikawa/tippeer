import * as React from 'react'
// import ReactSVG from 'react-svg'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu'
import TipperIcon from '../TipperIcon.svg'
import TipperLogo from '../TipperLogo.svg'

interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

// interface IState {
//     url: string
// }

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }
    public renderTipper = () => (
        this.props.globalMenu[0].agent === 'mobile' || this.props.globalMenu[0].agent === 'tablet' ?
            <img src={TipperLogo} style={{ width: '120px'}} />
        :
            <img src={TipperIcon} style={{ width: '40px' }} />
    )

    public render() {
        return(
            <li>
                <button>
                    {this.renderTipper()}
                </button>
            </li>
        )
    }
}