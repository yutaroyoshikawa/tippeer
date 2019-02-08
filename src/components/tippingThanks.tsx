import * as React from 'react'
import { Random } from 'react-animated-text'
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
                <Styled.ThanksRipple>
                    <Styled.ThanksLine>
                        <Styled.ThanksText>
                            <Random text="Thank you" />
                        </Styled.ThanksText>
                    </Styled.ThanksLine>
                </Styled.ThanksRipple>
            </Styled.Section>
        )
    }
}