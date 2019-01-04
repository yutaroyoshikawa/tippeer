import * as firebase from 'firebase'
import * as React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Dispatch } from 'redux'
import {failureCurrentUserInfo, successCurrenUserInfo} from '../actions/auth'
import { IAuthState } from '../reducers/auth'
import * as Styled from '../styles/components/auth'


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
            (user) => user ?
            this.props.dispatch(successCurrenUserInfo(
                {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    uid: user.uid,
                }
            ))
            :
            this.props.dispatch(failureCurrentUserInfo({errorMsg: 'error'}))
        );
    }

    public render() {
        return(
            <Styled.Entire>
                <StyledFirebaseAuth
                    uiConfig={{
                        callbacks: {
                            signInSuccessWithAuthResult: () => false, 
                        },
                        credentialHelper: 'none',
                        popupMode: true,
                        privacyPolicyUrl: '/privacypolicy',
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