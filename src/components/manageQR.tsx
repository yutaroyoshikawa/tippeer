import { faImage, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, CardMedia, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Fab, Typography } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import Fullscreen from "react-full-screen"
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import * as actions from '../actions/manage'
import * as qrActions from '../actions/manageQR'
import { IManageState } from '../reducers/manage'
import { IManageQRState } from '../reducers/manageQR'
import { ArticleTitle, TippingQR } from './'

// import * as Styled from '../styles/components/manageQR'

export interface IProps extends IManageState, IManageQRState {
    dispatch: Dispatch<any>
}

interface IState {
    isMount: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            isMount: true
        }
    }

    public componentWillUnmount = () => (
        this.setState({
            isMount: false,
        })
    )

    public componentDidMount = () => (
        this.props.dispatch(qrActions.requestGetManageQrPerformance())
    )

    public renderTippingQR = () => (
        this.props.manage.isOpenTippingQR ?
            <TippingQR />
            :
            null
    )

    public openDrawer = () => (
        this.props.dispatch(actions.openDrawer())
    )

    public closeDrawer = () => (
        this.props.dispatch(actions.closeDrawer())
    )

    public openQR = () => (
        this.props.dispatch(actions.openQR())
    )

    public onScreenChange = (isFull: boolean) => (
        isFull ?
            this.props.dispatch(actions.openQR())
            :
            this.props.dispatch(actions.closeQR())
    )

    public renderNoThumbnail = () => (
        <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CCC' }}>
            <FontAwesomeIcon icon={faImage} style={{ fontSize: '80px', color: '#FFF' }} />
        </div>
    )

    public renderTippingPerformance = () => (
        this.props.manageQR.performance.id ?
            <Card style={{ width: '300px' }}>
                <Link to={'/performances/' + this.props.manageQR.performance.id} >
                    {
                        this.props.manageQR.performance.thumbnail ?
                            <CardMedia
                                image={this.props.manageQR.performance.thumbnail}
                                title="thumbnail"
                                style={{ height: '300px', width: '300px' }}
                            />
                            :
                            <CardMedia
                                component={this.renderNoThumbnail}
                                title="No Thumbnail"
                                style={{ height: '300px', width: '300px' }}
                            />
                    }
                </Link>
                <CardContent>
                    <Typography color="textSecondary">
                        {this.props.manageQR.performance.name}
                    </Typography>
                    <ExpansionPanel>
                        <ExpansionPanelSummary>
                            <Typography component="p">
                                概要
                        </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography component="p">
                                {this.props.manageQR.performance.discription}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </CardContent>
            </Card>
            :
            <Card style={{ width: '300px' }}>
                <CardContent>
                    <Typography component="h3">
                        現在実施されているパフォーマンスはありません。
                    </Typography>
                </CardContent>
            </Card>
    )

    public render() {
        return (
            <div>
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <div style={{ margin: '50px 0' }}>
                        <ArticleTitle title="QRコード表示" color="light" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        {this.renderTippingPerformance()}
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab onClick={this.openQR} color="secondary" variant="extended" aria-label="Add" disabled={!this.props.manageQR.isEnabledButton} >
                            <FontAwesomeIcon icon={faQrcode} />
                            <span style={{ paddingLeft: '5px' }}>QRコードを表示する</span>
                        </Fab>
                    </div>
                </div>
                <Fullscreen
                    enabled={this.props.manage.isOpenTippingQR}
                    onChange={this.onScreenChange}
                >
                    {this.renderTippingQR()}
                </Fullscreen>
            </div>
        )
    }
}

