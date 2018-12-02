import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu'
import * as actions from '../actions/userMenu'
import TipperIcon from '../TipperIcon.svg'
import TipperLogo from '../TipperLogo.svg'

export interface IProps extends IGlobalMenuState {
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
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <img src={TipperLogo} style={{ width: '120px'}} />
        :
            <img src={TipperIcon} style={{ width: '40px' }} />
    )
    public closeUserMenu = () => (
        this.props.dispatch(actions.closeMenu())
    )

    public render() {
        return(
            <li>
                <button onClick={this.closeUserMenu.bind(this,)}>
                    <Link to='/'>{this.renderTipper()}</Link>
                </button>
            </li>
        )
    }
}