import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
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
    mark: any;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);

        this.state = {
            mark: faUserCircle,
            openState: false,
        }
    }

    public clickMenu = (): void => {
        if(this.props.userMenu[0].openState) {
            this.props.dispatch(actions.closeMenu())
            this.setState({mark: faUserCircle})
        }else{
            this.props.dispatch(actions.openMenu())
            this.setState({mark: faTimes})
        }
            
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
                <button onClick={this.clickMenu}>
                <FontAwesomeIcon icon={this.state.mark} style={{width: '50px', height: '50px'}} />
                </button>
                {this.renderMenu()}
            </li>
        )
    }
}