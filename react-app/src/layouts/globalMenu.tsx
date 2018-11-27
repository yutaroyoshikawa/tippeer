import * as React from 'react'

import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu';
import * as actions from '../actions/globalMenu'
import { Back, SearchBox, TipperLogo, UserMenu } from '../components'

interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

// interface IState {
//     url: string
// }

export default class GlobalMenu extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }

    public componentDidMount() {
        this.props.dispatch(actions.getAgentInfo())
    }

    public renderLeyout = () => (
        this.props.globalMenu[0].agent === 'mobile' || this.props.globalMenu[0].agent === 'tablet' ?
            <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none'}}>
                <Back />
                <TipperLogo/>
                <UserMenu />
            </ul>
        :
            <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyle: 'none'}}>
                <TipperLogo/>
                <SearchBox />
                <UserMenu />
            </ul>   
    )

    public render() {
        return(
            <nav style={{padding: '5px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.4)'}}>
                {this.renderLeyout()}
            </nav>
        )
    }
}