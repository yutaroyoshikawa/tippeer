import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faAddressBook, faQuestionCircle, faSignOutAlt, faTimes, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Img from 'react-image'
import { Dispatch } from 'redux'
import { IUserMenuState } from 'src/reducers/userMenu'
import { hideAuth, requestLogout, showAuth } from '../actions/auth'
import { requestCanselRegistUser } from '../actions/registUser'
import * as actions from '../actions/userMenu'
import { Auth, RegistUser } from '../components'
import { IAuthState } from '../reducers/auth'
import * as Styled from '../styles/components/userMenu'


export interface IProps extends IUserMenuState, IAuthState {
    dispatch: Dispatch<any>;
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public clickMenu = (): void => {
        this.props.userMenu.openState ?
            this.props.dispatch(actions.closeMenu())
            :
            this.props.dispatch(actions.openMenu())

        if (this.props.userMenu.isRegistration) {
            this.props.dispatch(requestCanselRegistUser())
        }
    }

    public renderAuth = () => (
        !this.props.auth.hideAuth ?
            <Auth />
            :
            null
    )

    public renderButton = () => (
        this.props.auth.isSignedIn ?
            <Styled.ListStyle
                onClick={this.props.dispatch.bind(this, requestLogout())}
                itemProp={'400'}
            >
                <span>
                    <Styled.MenuIcon icon={faSignOutAlt} />
                </span>
                ログアウト
            </Styled.ListStyle>
            :
            <Styled.ListStyle
                onClick={this.setAuthState}
                itemProp={'400'}
            >
                <span>
                    <Styled.MenuIcon icon={faSignOutAlt} />
                </span>
                ログインまたは登録
            </Styled.ListStyle>
    )

    public setAuthState = () => (
        !this.props.auth.hideAuth ?
            this.props.dispatch(hideAuth())
            :
            this.props.dispatch(showAuth())
    )

    public renderChangeUserInfo = () => (
        this.props.auth.isSignedIn ?
            <Styled.ListStyle itemProp={'300'}>
                <span>
                    <Styled.MenuIcon icon={faAddressBook}/>
                </span>
                ユーザ情報変更
            </Styled.ListStyle>
            :
            null
    )

    public renderMenu = () => (
        <Styled.Top
            in={this.props.userMenu.openState}
            timeout={400}
            unmountOnExit={true}
        >
            {this.props.userMenu.isRegistration ?
                <RegistUser />
                :
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                    <Styled.MenuList>
                        {this.renderAuth()}
                        {this.renderChangeUserInfo()}
                        {this.renderButton()}
                        <li><Styled.ListLink to='/privacypolicy' onClick={this.clickMenu} itemProp={'500'}><span><Styled.MenuIcon icon={faUserSecret} /></span>プライバシーポリシ</Styled.ListLink></li>
                        <li><Styled.ListLink to='/faq' onClick={this.clickMenu} itemProp={'600'}><span><Styled.MenuIcon icon={faQuestionCircle} /></span>よくある質問</Styled.ListLink></li>
                    </Styled.MenuList>
                    <Styled.CopyRight><small>TIPPER&copy; all rights reserved</small></Styled.CopyRight>
                </div>
            }
        </Styled.Top>
    )

    public render() {
        return (
            <Styled.Entire>
                <Styled.MenuButton onClick={this.clickMenu}>
                    {
                        this.props.userMenu.openState ?
                            <FontAwesomeIcon icon={faTimes} style={{ width: '40px', height: '40px' }} />
                            :
                            <Img
                                src={this.props.auth.photoURL}
                                unloader={<FontAwesomeIcon icon={faUserCircle} style={{ width: '40px', height: '40px' }} />}
                                alt="userIcon"
                                style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '-4px' }}
                            />
                    }
                </Styled.MenuButton>
                {this.renderMenu()}
            </Styled.Entire>
        )
    }
}