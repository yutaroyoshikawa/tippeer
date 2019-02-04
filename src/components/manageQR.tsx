import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Divider, Fab, Typography } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import Fullscreen from "react-full-screen"
import { Dispatch } from 'redux'
import * as actions from '../actions/manage'
import { IManageState } from '../reducers/manage'
import { IManageQRState } from '../reducers/manageQR'
import { ArticleTitle, TippingQR } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState, IManageQRState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

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

    public render() {
        return (
            <div>
                <div style={{width: '90%', margin: '0 auto'}}>
                    <div style={{margin: '50px 0'}}>
                        <ArticleTitle title="QRコード表示" color="light" />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0'}}>
                        {
                            this.props.manageQR.performance ?
                                <Card style={{width: '300px'}}>
                                    <CardContent>
                                        <Typography  color="textSecondary">
                                            現在のパフォーマンス
                                        </Typography>
                                        <Typography  component="h3">
                                            Example Performance
                                        </Typography>
                                    </CardContent>
                                </Card>
                                :
                                <Card style={{width: '300px'}}>
                                    <CardContent>
                                        <Typography  component="h3">
                                            現在実施されているパフォーマンスはありません。
                                        </Typography>
                                    </CardContent>
                                </Card>
                        }
                        
                    </div>
                    <Divider />
                    <div style={{display: 'flex', justifyContent: 'center', margin: '50px 0'}}>
                        <Fab onClick={this.openQR} color="secondary" variant="extended" aria-label="Add" disabled={!this.props.manageQR.isEnabledButton} >
                            <FontAwesomeIcon icon={faQrcode} />
                            <span style={{paddingLeft: '5px'}}>QRコードを表示する</span>
                        </Fab>
                    </div>
                </div>
                <Fullscreen
                    enabled={this.props.manage.isOpenTippingQR}
                    onChange={this.onScreenChange.bind(this,)}
                >
                    {this.renderTippingQR()}
                </Fullscreen>
            </div>
        )
    }
}

