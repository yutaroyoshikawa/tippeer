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
        this.props.dispatch(actions.setComponent('result'))
    )

    public render() {
        return(
            <Styled.Section onClick={this.setComponentState}>
                <h2>Thank you</h2>
            </Styled.Section>
        )
    }
}