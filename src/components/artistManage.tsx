import { faClipboard, faComment, faMale, faPaintBrush, faQrcode, faSignLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import { Dispatch } from 'redux'
import * as actions from '../actions/manage'
import { IArtistManagementPage, IManageState } from '../reducers/manage'
import { ManageArtist, ManagePerformance, ManageQR, ManageWorks } from './'
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

    public setManagementPage = (page: IArtistManagementPage) => {
        this.props.dispatch(actions.setArtistManagementPage(page))
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
                <ListItem onClick={this.setManagementPage.bind(null, 'top')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon><FontAwesomeIcon icon={faClipboard} /></ListItemIcon>
                    <ListItemText primary={'トップ'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'qr')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon><FontAwesomeIcon icon={faQrcode} /></ListItemIcon>
                    <ListItemText primary={'QRコード'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'message')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                    <ListItemText primary={'メッセージ'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'performance')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon><FontAwesomeIcon icon={faSignLanguage} /></ListItemIcon>
                    <ListItemText primary={'パフォーマンス'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'works')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon><FontAwesomeIcon icon={faPaintBrush} /></ListItemIcon>
                    <ListItemText primary={'作品'} />
                </ListItem>
                <ListItem onClick={this.setManagementPage.bind(null, 'artistInfo')} style={{ cursor: 'pointer' }}>
                    <ListItemIcon style={{padding: '0 5px'}} ><FontAwesomeIcon icon={faMale} /></ListItemIcon>
                    <ListItemText primary={'アーティスト情報'} />
                </ListItem>
            </List>
        </SwipeableDrawer>
    )

    public renderManageMentPage() {
        switch(this.props.manage.artistManagementPage){
            case 'top' :
                return(null)
            case 'qr' :
                return(<ManageQR />)
            case 'message' :
                return(null)
            case 'performance' :
                return(<ManagePerformance />)
            case 'works' :
                return(<ManageWorks />)
            case 'artistInfo' :
                return(<ManageArtist />)
        }
    }

    public renderDrawerOpenner = () => (
        !this.props.manage.isHideDrawerOpenner ?
            <div onClick={this.openDrawer} style={{position: "fixed", top: '70px', left: '20px', display: 'flex', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgb(254, 215, 220)', filter: 'drop-shadow(0 0 2px #444)', justifyContent: 'center', alignItems: 'center'}}><ListIcon style={{width: '30px', height: '30px', color: '#444'}} /></div>
            :
            null
    )

    public render() {
        return (
            <div>
                {this.renderDrawer()}
                {this.renderDrawerOpenner()}
                {this.renderManageMentPage()}
            </div>
        )
    }
}

