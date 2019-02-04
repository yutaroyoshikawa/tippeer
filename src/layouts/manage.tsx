import * as React from 'react'
import { Dispatch } from 'redux'
import { setArtistManagementPage } from '../actions/manage'
import { setMobileMenuState } from '../actions/mobileMenu'
import { AdminManage, ArtistManage } from '../components'
import { NotFound } from '../layouts'
import { IAuthState } from '../reducers/auth'
import { IArtistManagementPage } from '../reducers/manage'
// import * as Styled from '../styles/manage'

export interface IProps extends IAuthState {
    dispatch: Dispatch<any>
    match: {
        params: {
            managePage: IArtistManagementPage
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props)
    }

    public componentDidMount() {
        document.title = 'TIPPEER | Manage'
        this.props.dispatch(setMobileMenuState('manage'))
        if(this.props.match.params.managePage) {
            this.props.dispatch(setArtistManagementPage(this.props.match.params.managePage))
        }
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
