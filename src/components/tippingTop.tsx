import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { Dispatch } from 'redux'
import * as actions from '../actions/tipping'
import { ITippingState } from '../reducers/tipping'

import * as Styled from '../styles/tipping'

export interface IProps extends ITippingState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public setComponentState = () => (
        this.props.dispatch(actions.setComponent('scan'))
    )

    public render() {
        return(
            <Styled.Section>
                <div onClick={this.setComponentState}>
                    <Styled.QrCode icon={faQrcode} />
                </div>
                <Styled.QrDesctiption>タップしてQRコードを読み込む</Styled.QrDesctiption>
            </Styled.Section>
        )
    }
}