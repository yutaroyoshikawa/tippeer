import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu'
import { requestCanselRegistUser } from '../actions/registUser'
import * as actions from '../actions/userMenu'
import { IAuthState } from '../reducers/auth'
import { IUserMenuState } from '../reducers/userMenu'
import TipperIcon from '../TipperIcon.svg'
import TipperLogo from '../TipperLogo.svg'

import * as Styled from '../styles/components/tipperLogo'

export interface IProps extends IAuthState, IGlobalMenuState, IUserMenuState {
    dispatch: Dispatch<any>;
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }

    public renderTipper = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <Styled.LongLogo src={TipperLogo} />
        :
            <Styled.Logo src={TipperIcon} />
    )

    public closeUserMenu = () => {
        this.props.dispatch(actions.closeMenu())
        if(this.props.userMenu.isRegistration){
            this.props.dispatch(requestCanselRegistUser())
        }
            
    }

    public render() {
        return(
            <div>
                <button onClick={this.closeUserMenu.bind(this,)}>
                    <Link
                        to={this.props.auth.userType === 'user' ? '/' : '/manage'}
                    >
                        {this.renderTipper()}
                    </Link>
                </button>
            </div>
        )
    }
}