import { faClipboard, faComment, faMale, faPaintBrush, faQrcode, faSignLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import { Dispatch } from 'redux'
import * as actions from '../actions/manage'
import { IAdminManagementPage, IManageState } from '../reducers/manage'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public openDrawer = () => (
        this.props.dispatch(actions.openDrawer())
    )

    public closeDrawer = () => (
        this.props.dispatch(actions.closeDrawer())
    )

    public setManagementPage = (page: IAdminManagementPage) => {
        this.props.dispatch(actions.setAdminManagementPage(page))
        this.props.dispatch(actions.closeDrawer())
    }

    public renderDrawer = () => (
        <SwipeableDrawer
            anchor="left"
            open={this.props.manage.isOpenDrawer}
            onClose={this.closeDrawer}
            onOpen={this.openDrawer}
        >
            <List>
                <ListItem onClick={this.setManagementPage.bind(null, 'top')}>
                    <ListItemIcon><FontAwesomeIcon icon={faClipboard} /></ListItemIcon>
                    <ListItemText primary={'トップ'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'qr')}>
                    <ListItemIcon><FontAwesomeIcon icon={faQrcode} /></ListItemIcon>
                    <ListItemText primary={'申請'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'message')}>
                    <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                    <ListItemText primary={'ユーザ管理'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'performance')}>
                    <ListItemIcon><FontAwesomeIcon icon={faSignLanguage} /></ListItemIcon>
                    <ListItemText primary={'パフォーマンス'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'works')}>
                    <ListItemIcon><FontAwesomeIcon icon={faPaintBrush} /></ListItemIcon>
                    <ListItemText primary={'作品'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'artistInfo')}>
                    <ListItemIcon style={{padding: '0 5px'}} ><FontAwesomeIcon icon={faMale} /></ListItemIcon>
                    <ListItemText primary={'問い合わせ'} />
                </ListItem>
            </List>
        </SwipeableDrawer>
    )

    public renderManageMentPage() {
        switch(this.props.manage.adminManagementPage){
            case 'top' :
                return(null)
            case 'applications' :
                return(null)
            case 'message' :
                return(null)
            case 'performances' :
                return(null)
            case 'user' :
                return(null)
            case 'works' :
                return(null)
        }
    }

    public render() {
        return (
            <div>
                {this.renderDrawer()}
                {
                    !this.props.manage.isHideDrawerOpenner ?
                        <div onClick={this.openDrawer} style={{position: "fixed", top: '70px', left: '20px', display: 'flex', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgb(254, 215, 220)', filter: 'drop-shadow(0 0 2px #444)', justifyContent: 'center', alignItems: 'center'}}><ListIcon style={{width: '30px', height: '30px', color: '#444'}} /></div>
                        :
                        null
                }
                {this.renderManageMentPage()}
            </div>
        )
    }
}

