import * as React from 'react'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu';
import * as actions from '../actions/globalMenu'
import { Back, MobileMenu, SearchBox, TipperLogo, UserMenu } from '../components'

export interface IProps extends IGlobalMenuState {
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
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <div>
                <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none', padding: '5px', boxShadow: '0px -5px 20px 0px rgba(0,0,0,0.4)', backgroundColor: 'rgb(255, 255, 255)'}}>
                    <li><Back /></li>
                    <li><TipperLogo/></li>
                    <li><UserMenu /></li>
                </ul>
                <MobileMenu />
            </div>
        :
            <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyle: 'none', padding: '5px', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.4)', backgroundColor: 'white'}}>
                <li><TipperLogo/></li>
                <li><SearchBox /></li>
                <li><UserMenu /></li>
                
            </ul>   
    )

    public render() {
        return(
            <nav style={{position: 'fixed', width: '100%', height: '50px',zIndex: 10, top: '0px'}}>
                {this.renderLeyout()}
            </nav>
        )
    }
}
