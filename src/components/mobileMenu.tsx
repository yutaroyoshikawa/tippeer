import { faMoneyBill, faPaintBrush, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Dispatch } from 'redux'
// import * as actions from '../actions/globalMenu'
// import { tabType } from '../reducers/globalMenu'
import { IGlobalMenuState } from '../reducers/globalMenu'

import * as Styled from '../styles/components/mobileMenu'

export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    // public setTabState = (tabName: tabType) => {
    //     this.props.dispatch(actions.setMobileMenuState({tabState: tabName}))
    // }
    
    public render() {
        return(
            <Styled.Entire>
                <Styled.InnerMenu>
                    <Styled.ListElement><button><Styled.TabLink to='/search' itemRef={'search'} itemProp={this.props.mobileMenu.tabState} ><span><Styled.Icon icon={faSearch} /></span>Search</Styled.TabLink></button></Styled.ListElement>
                    <Styled.ListElement><button><Styled.TabLink to='/tipping' itemRef={'tipping'} itemProp={this.props.mobileMenu.tabState}><span><Styled.Icon icon={faMoneyBill} /></span>Tipping</Styled.TabLink></button></Styled.ListElement>
                    <Styled.ListElement><button><Styled.TabLink to='/works' itemRef={'works'} itemProp={this.props.mobileMenu.tabState}><span><Styled.Icon icon={faPaintBrush} /></span>Works</Styled.TabLink></button></Styled.ListElement>
                    <Styled.ListElement><button><Styled.TabLink to='/library' itemRef={'library'} itemProp={this.props.mobileMenu.tabState}><span><Styled.Icon icon={faShoppingBag} /></span>Library</Styled.TabLink></button></Styled.ListElement>
                </Styled.InnerMenu>
            </Styled.Entire>
        )
    }
}