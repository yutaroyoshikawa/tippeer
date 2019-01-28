import * as React from 'react'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu';
import { requestLogin } from '../actions/auth'
import * as actions from '../actions/globalMenu'
import { Back, MobileMenu, SearchBoxInput, TipperLogo, UserMenu } from '../components'

import * as Styled from '../styles/globalMenu'

export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

export default class GlobalMenu extends React.Component<IProps, {}> {

    constructor(props: IProps){
        super(props);

        this.state = {
            currentPosition: 0,
            flag: false,
            samplingCount: 0,
        }
    }

    public componentDidMount() {
        this.props.dispatch(actions.getAgentInfo())
        this.props.dispatch(requestLogin())
    }


    public renderLeyout = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <Styled.MobileTopMenu>
                <li><Back /></li>
                <li><TipperLogo/></li>
                <li><UserMenu /></li>
            </Styled.MobileTopMenu>
        :
            <Styled.DeskTopMemu>
                <li><TipperLogo/></li>
                <li><SearchBoxInput /></li>
                <li><UserMenu /></li>
            </Styled.DeskTopMemu>   
    )

    public renderMobileMenu = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <MobileMenu />
            
        :
            null
    )

    public render() {
        return(
            <div>
                <Styled.TopGlobalMenu>
                    {this.renderLeyout()}
                </Styled.TopGlobalMenu>
                <Styled.BottomGlobalMenu>
                    {this.renderMobileMenu()}
                </Styled.BottomGlobalMenu>
            </div>
        )
    }
}
