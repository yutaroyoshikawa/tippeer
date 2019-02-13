import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Divider, Fab, Typography } from '@material-ui/core'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import * as React from 'react'
import { Dispatch } from 'redux'
// import * as actions from '../actions/manage'
import { IManageState } from '../reducers/manage'
import { ArticleTitle } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState {
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

    public renderForm = () => (
        <Dialog
            open={this.state.isOpenDiscribe}
            onClose={this.isOpenDialog}
        >
            <DialogTitle>パフォーマンス情報</DialogTitle>
            <Divider />
            <DialogContent>
                <div>
                    <TextField
                        label="パフォーマンス名"
                        variant="standard"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        label="開始時間"
                        variant="standard"
                        margin="normal"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        label="終了時間"
                        variant="standard"
                        margin="normal"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <label>
                        <img src=""/>
                        <input style={{display: 'none'}} type="file"/>
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
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <div style={{ margin: '50px 0' }}>
                        <ArticleTitle title="パフォーマンス" color="light" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab
                            color="secondary"
                            variant="extended"
                            aria-label="Add"
                            onClick={this.isOpenDialog}
                        >
                            <FontAwesomeIcon icon={faPlusCircle} />
                            <span style={{ paddingLeft: '5px' }}>パフォーマンスを登録する</span>
                        </Fab>
                        {this.renderForm()}
                    </div>
                    <Divider />
                    <Typography component="h3">
                        登録済みパフォーマンス
                    </Typography>
                    <div style={{ display: 'inline-block', margin: '50px' }}>
                        <Card style={{ width: '300px' }}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    Something Performance
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

