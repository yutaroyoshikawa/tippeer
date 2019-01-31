import * as React from 'react'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'

export interface IProps {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props)
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState('library'))
    }

    public render() {
        return(
            <div />
        )
    }
}