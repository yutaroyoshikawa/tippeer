import * as React from 'react'
import { Dispatch } from 'redux'
import * as actions from '../actions/globalMenu'
import { IGlobalMenuState } from '../reducers/globalMenu'

export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
        this.props.dispatch(actions.setMobileMenuState({tabState: 'none'}))
    :
        null
    ) 

    public render() {
        return(
            <section style={{margin: '50px 0'}}>
                hoge
            </section>
        )
    }
}
