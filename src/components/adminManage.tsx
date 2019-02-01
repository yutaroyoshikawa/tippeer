import * as React from 'react'
import { Dispatch } from 'redux'
import { IManageState } from '../reducers/manage'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            <div />
        )
    }
}

