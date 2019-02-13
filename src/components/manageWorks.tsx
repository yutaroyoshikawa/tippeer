import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Divider, Fab, Typography } from '@material-ui/core'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import Img from 'react-image'
import { Dispatch } from 'redux'
import { openCropper } from '../actions/cropper'
// import * as actions from '../actions/manage'
import { Cropper } from '../components'
import { ICropperState } from '../reducers/cropper'
import { IManageState } from '../reducers/manage'
import { ArticleTitle } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState, ICropperState {
    dispatch: Dispatch<any>
}

interface IState {
    isOpenDiscribe: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            isOpenDiscribe: false
        }
    }

    public setIconValue(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files
        if (files && files[0]) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (reader.result && files) {
                    this.props.dispatch(openCropper(
                        {
                            data: reader.result.toString(),
                            type: 'works',
                        }
                    ))
                }
            }
            reader.readAsDataURL(files[0])
        }
        e.target.value = ''
    }

    public renderForm = () => (
        <Dialog
            open={this.state.isOpenDiscribe}
            onClose={this.isOpenDialog}
        >
            <DialogTitle>作品情報</DialogTitle>
            <Divider />
            <DialogContent>
                <div>
                    <TextField
                        label="作品名"
                        variant="standard"
                        margin="normal"
                    />
                </div>
                <div>
                    <label>
                        <span>
                            サムネイルを設定
                        </span>
                        <Img
                            src={this.props.cropper.data}
                            // unloader={}
                        />
                        <input
                            style={{display: 'none'}}
                            type="file"
                            onChange={this.setIconValue.bind(this,)}
                        />
                    </label>
                </div>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={this.isOpenDialog}>キャンセル</Button>
                <Button>登録</Button>
            </DialogActions>
        </Dialog>
    )

    public isOpenDialog = () => (
        this.setState({
            isOpenDiscribe: this.state.isOpenDiscribe ? false :true,
        })
    )

    public render() {
        return (
            <div>
                <Cropper />
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <div style={{ margin: '50px 0' }}>
                        <ArticleTitle title="作品" color="light" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab
                            color="secondary"
                            variant="extended"
                            aria-label="Add"
                            onClick={this.isOpenDialog}
                        >
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <span style={{ paddingLeft: '5px' }}>作品を登録する</span>
                        </Fab>
                        {this.renderForm()}
                    </div>
                    <Divider />
                    <Typography component="h3">
                        登録済み作品
                    </Typography>
                    <div style={{ display: 'inline-block', margin: '50px' }}>
                        <Card style={{ width: '300px' }}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Something Works
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

