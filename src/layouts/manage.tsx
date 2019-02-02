import * as React from 'react'
import { Dispatch } from 'redux'
import { hideGlobalMenu } from '../actions/globalMenu'
import { hideMobileMenu } from '../actions/mobileMenu'
import { setMobileMenuState } from '../actions/mobileMenu'
import { AdminManage, ArtistManage } from '../components'
import { NotFound } from '../layouts'
import { IAuthState } from '../reducers/auth'
// import * as Styled from '../styles/manage'

export interface IProps extends IAuthState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {

    constructor(props: IProps){
        super(props)
    }

    public componentDidMount() {
        document.title = 'TIPPEER | Manage'
        this.props.dispatch(setMobileMenuState('manage'))
        this.props.dispatch(hideGlobalMenu())
        this.props.dispatch(hideMobileMenu())
    }

    public renderPage = () => {
        switch(this.props.auth.userType){
            case 'user' :
                return(<NotFound />)
            case 'artist' :
                return(<ArtistManage />)
            case 'admin' :
                return(<AdminManage />)
        }
    }

    public render() {
        return(
            this.renderPage()
        )
    }
}
