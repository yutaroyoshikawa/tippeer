import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Dispatch } from 'redux'
import { IUserMenuState } from 'src/reducers/userMenu'
import * as actions from '../actions/userMenu'

interface IProps extends IUserMenuState {
    dispatch: Dispatch<any>;
}

interface IState {
    openState: boolean;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
    }

    public clickMenu = (): void => {
        this.props.userMenu[0].openState ?
            this.props.dispatch(actions.closeMenu())
        :
            this.props.dispatch(actions.openMenu())
    }

    public renderMenu = () => (
        this.props.userMenu[0].openState ?
                <nav　style={{width: '180px', height: '180px', position: 'absolute', left: '50%', top: '50%', marginTop: '-90px', marginLeft: '-90px'}}>
                    <ul>
                        <li>ユーザ情報変更</li>
                        <li>ログアウト</li>
                        <li>プライバシーポリシ</li>
                        <li>退会</li>
                        <li>よくある質問</li>
                    </ul>
                    <p><small>TIPPER&copy; all rights reserved</small></p>
                </nav>
        :
            null
    )

    public render() {
        return(
            <li>
                <span onClick={this.clickMenu}><FontAwesomeIcon icon={faUserCircle}  style={{width: '50px', height: '50px', cursor: 'pointer'}}/></span>
                {this.renderMenu()}
            </li>
        )
    }
}