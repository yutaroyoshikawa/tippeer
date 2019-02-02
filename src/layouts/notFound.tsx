import * as React from 'react'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as Styled from '../styles/notFound'

export interface IProps {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    public componentDidMount() {
        document.title = 'TIPPEER | 404 NotFound'
        this.props.dispatch(setMobileMenuState('none'))
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public render() {
        return(
            <Styled.Entire>
                <Styled.GlobalStyle />
                <Styled.Top>
                    404
                </Styled.Top>
                <Styled.Bottom>
                    not found
                </Styled.Bottom>
            </Styled.Entire>
        )
    }
}