import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { IUserMenuState } from 'src/reducers/userMenu'
import * as actions from '../actions/userMenu'


export interface IProps extends IUserMenuState {
    dispatch: Dispatch<any>;
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }

    public clickMenu = (): void => {
        if(this.props.userMenu.openState) {
            this.props.dispatch(actions.closeMenu())
        }else{
            this.props.dispatch(actions.openMenu())
        }
            
    }

    public renderMenu = () => (
        this.props.userMenu.openState ?
                <nav　style={{width: '180px', height: '180px', position: 'absolute', left: '50%', top: innerHeight/2, marginTop: '-90px', marginLeft: '-90px', backgroundColor: 'white'}}>
                    <ul>
                        <li>ユーザ情報変更</li>
                        <li>ログアウト</li>
                        <li><Link to='/privacypolicy' onClick={this.clickMenu.bind(this,)}>プライバシーポリシ</Link></li>
                        <li>退会</li>
                        <li><Link to='/faq' onClick={this.clickMenu.bind(this,)}>よくある質問</Link></li>
                    </ul>
                    <p><small>TIPPER&copy; all rights reserved</small></p>
                </nav>
        :
            null
    )

    public render() {
        return(
            <li>
                <button onClick={this.clickMenu.bind(this,)}>
                <FontAwesomeIcon icon={this.props.userMenu.mark === 'faUserCircle'? faUserCircle : faTimes} style={{width: '40px', height: '40px'}} />
                </button>
                {this.renderMenu()}
            </li>
        )
    }
}