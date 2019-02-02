import * as firebase from 'firebase'
import * as React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Dispatch } from 'redux'
import { hideAuth, requestLogin} from '../actions/auth'
import { IAuthState } from '../reducers/auth'
import * as Styled from '../styles/components/auth'

import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IProps extends IAuthState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    public unregisterAuthObserver: firebase.Unsubscribe

    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            () => this.props.dispatch(requestLogin())
        );
    }

    public closeAuth = () => (
        this.props.dispatch(hideAuth())
    )

    public render() {
        return(
            <Styled.Entire>
                <div onClick={this.closeAuth} style={{width: '100%', height: '40px', marginBottom: '10px', position: 'relative', top: 0}}>
                    <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: '40px', color: '#333'}} />
                </div>
                <StyledFirebaseAuth
                    uiConfig={{
                        callbacks: {
                            signInSuccessWithAuthResult: () => false, 
                        },
                        credentialHelper: 'none',
                        popupMode: true,
                        signInFlow: 'popup',
                        signInOptions: [
                            {
                                defaultCountry: 'JP',
                                provider: firebase.auth.PhoneAuthProvider.PHONE_SIGN_IN_METHOD,
                                recaptchaParameters: {
                                    badge: 'bottomleft',
                                    size: 'invisible',
                                    type: 'image',
                                },
                            }
                        ],
                        siteName: 'TIPPER',
                    }}
                    firebaseAuth={firebase.auth()}
                />
            </Styled.Entire>
        )
    }
}