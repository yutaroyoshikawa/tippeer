import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faAddressBook, faQuestionCircle, faSadTear, faSignOutAlt, faTimes, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Dispatch } from 'redux'
import { IUserMenuState } from 'src/reducers/userMenu'
import * as actions from '../actions/userMenu'

import * as Styled from '../styles/components/userMenu'


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
                <Styled.Top>
                    <Styled.MenuList>
                        <Styled.ListStyle><span><Styled.MenuIcon icon={faAddressBook} /></span>ユーザ情報変更</Styled.ListStyle>
                        <Styled.ListStyle><span><Styled.MenuIcon icon={faSignOutAlt} /></span>ログアウト</Styled.ListStyle>
                        <li><Styled.ListLink to='/privacypolicy' onClick={this.clickMenu.bind(this,)}><span><Styled.MenuIcon icon={faUserSecret} /></span>プライバシーポリシ</Styled.ListLink></li>
                        <Styled.ListStyle><span><Styled.MenuIcon icon={faSadTear} /></span>退会</Styled.ListStyle>
                        <li><Styled.ListLink to='/faq' onClick={this.clickMenu.bind(this,)}><span><Styled.MenuIcon icon={faQuestionCircle} /></span>よくある質問</Styled.ListLink></li>
                    </Styled.MenuList>
                    <Styled.CopyRight><small>TIPPER&copy; all rights reserved</small></Styled.CopyRight>
                </Styled.Top>
        :
            null
    )

    public render() {
        return(
            <Styled.Entire>
                <Styled.MenuButton onClick={this.clickMenu.bind(this,)}>
                    <FontAwesomeIcon icon={this.props.userMenu.mark === 'faUserCircle'? faUserCircle : faTimes} style={{width: '40px', height: '40px'}} />
                </Styled.MenuButton>
                {this.renderMenu()}
            </Styled.Entire>
        )
    }
}