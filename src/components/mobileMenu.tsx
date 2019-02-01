import { faMoneyBill, faPaintBrush, faSearch, faShoppingBag, faTasks, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { Dispatch } from 'redux'
import { IAuthState } from '../reducers/auth'
import { tabType } from '../reducers/mobileMenu'
import { IMobileMenuState } from '../reducers/mobileMenu'
import * as Styled from '../styles/components/mobileMenu'

export interface IProps extends IMobileMenuState, IAuthState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderTab = (displayName: string, stateName: tabType, icon: IconDefinition) => (
        <Styled.ListElement>
            <button>
                <Styled.TabLink
                    to={'/' + stateName}
                    itemRef={stateName}
                    itemProp={this.props.mobileMenu.tabState}
                >
                    <span><Styled.Icon icon={icon} /></span>
                    {this.props.mobileMenu.tabState === stateName ? displayName : null}
                </Styled.TabLink>
            </button>
        </Styled.ListElement>
    )

    public render() {
        return (
            <Motion style={{y: spring(this.props.mobileMenu.isHide ? 100 : 0)}}>
                {(value: any) => 
                    <Styled.Entire itemProp={value.y}>
                        <Styled.InnerMenu>
                            {this.renderTab('Search', 'search', faSearch)}
                            {this.renderTab('Tippig', 'tipping', faMoneyBill)}
                            {this.renderTab('Works', 'works', faPaintBrush)}
                            {
                                this.props.auth.isSignedIn ?
                                    this.renderTab('Library', 'library', faShoppingBag)
                                    :
                                    null
                            }
                            {
                                this.props.auth.userType === 'admin' || this.props.auth.userType === 'artist' ?
                                    this.renderTab('Manage', 'manage', faTasks)
                                    :
                                    null
                            }
                        </Styled.InnerMenu>
                    </Styled.Entire>
                }
            </Motion>
            
        )
    }
}