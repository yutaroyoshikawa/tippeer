import { faMoneyBill, faPaintBrush, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
// import * as actions from '../actions/globalMenu'
// import { tabType } from '../reducers/globalMenu'
import { IGlobalMenuState } from '../reducers/globalMenu'

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
            <ul style={{display: 'flex', justifyContent: 'space-around', alignContent: 'space-between', listStyle: 'none', boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.4)', position: 'fixed', bottom: '0', width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.5', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', transform: 'translate3d(0, 0, 0)'}}>
                <li style={{textAlign: 'center', fontSize: '10px', display: 'flex'}}><button><Link to='/search' style={{textDecoration:'none'}} className={this.props.mobileMenu.tabState === 'search'? 'active' : 'inactive'} ><span style={{display:'block'}}><FontAwesomeIcon icon={faSearch} style={{width: '20px', height: '20px'}} /></span>Search</Link></button></li>
                <li style={{textAlign: 'center', fontSize: '10px', display: 'flex'}}><button><Link to='/tipping' className={this.props.mobileMenu.tabState === 'tipping'? 'active' : 'inactive'}><span style={{display:'block'}}><FontAwesomeIcon icon={faMoneyBill} style={{width: '20px', height: '20px'}} /></span>Tipping</Link></button></li>
                <li style={{textAlign: 'center', fontSize: '10px', display: 'flex'}}><button><Link to='/works' className={this.props.mobileMenu.tabState === 'works'? 'active' : 'inactive'} ><span style={{display:'block'}}><FontAwesomeIcon icon={faPaintBrush} style={{width: '20px', height: '20px'}} /></span>Works</Link></button></li>
                <li className={this.props.mobileMenu.tabState === 'library'? 'active' : 'inactive'} style={{textAlign: 'center', fontSize: '10px', display: 'flex'}}><button><span style={{display:'block'}}><FontAwesomeIcon icon={faShoppingBag} style={{width: '20px', height: '20px'}} /></span>Library</button></li>
            </ul>
        )
    }
}