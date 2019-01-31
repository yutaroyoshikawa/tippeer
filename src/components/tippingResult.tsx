import * as React from 'react'
import { Dispatch } from 'redux'
import TipperLogo from 'src/TipperIcon.svg'
import { openDialog } from '../actions/dialog'
import * as actions from '../actions/tipping'
import { IAuthState } from '../reducers/auth'
import { ITippingState } from '../reducers/tipping'
import * as Styled from '../styles/tipping'

export interface IProps extends ITippingState, IAuthState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public setComponentState = () => (
        this.props.auth.isSignedIn ?
            this.props.dispatch(actions.setComponent('tipping'))
            :
            this.props.dispatch(openDialog(
                {
                    buttons: [
                        {
                            action: "CLOSE_DIALOG",
                            label: "はい"
                        }
                    ],
                    content: "ログインしてください。",
                    title: "Tipping"
                }
            ))
    )

    public render() {
        return (
            <Styled.ResultSection>
                <div onClick={this.setComponentState}>
                    <Styled.ResultIcon src={TipperLogo} />
                    <Styled.ToTipping>
                        Tap to Tipping
                    </Styled.ToTipping>
                </div>
            </Styled.ResultSection>
        )
    }
}