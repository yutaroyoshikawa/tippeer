import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, Divider, Fab, Typography } from '@material-ui/core'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import * as React from 'react'
import Img from 'react-image'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { Dispatch } from 'redux'
import { openCropper } from '../actions/cropper'
// import * as actions from '../actions/manage'
import * as worksActions from '../actions/manageWorks'
import { Cropper } from '../components'
import { ICropperState } from '../reducers/cropper'
import { IManageState } from '../reducers/manage'
import { IManageWorksState } from '../reducers/manageWorks'
import { ArticleTitle } from './'
// import * as Styled from '../styles/tipping'

// let host = 'wss://obniz.io'

// let host = 'wss://obniz.io'

export interface IProps extends IManageState, ICropperState, IManageWorksState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props)
        // this.connect()
    }

    // public connect = async () => {
    //     const socket = await new WebSocket(host + '/obniz/2175-2297/ws/1')

    //     socket.onmessage = (event) => {
    //         const arr = JSON.parse(event.data);
    //         arr.map(async (obj: any) => {
    //             if (obj.ws && obj.ws.redirect) {
    //                 host = obj.ws.redirect;
    //                 this.setState({isReadyObniz: true})
    //                 socket.onmessage = null;
    //                 await socket.close();
    //                 // await this.connect();
    //             }
    //         })
    //     }
    // }

    // public sendObniz = async () => {
    //     if(this.state.isReadyObniz){
    //         const socket = await new WebSocket(host + '/obniz/2175-2297/ws/1')
    //         socket.onmessage = async (event) => {
    //             const data = JSON.parse(event.data)
    //             if(data[0].ws.ready){
    //                 await socket.send(JSON.stringify([
    //                     {
    //                         "display": {
    //                             "clear": true
    //                         }
    //                     },
    //                     {
    //                         "display": {
    //                             "text": this.props.manageWorks.regist.title
    //                         }
    //                     }
    //                 ]));
    //             }
    //         }
    //         await socket.close()
    //     }
    // }

    public requestRegist = () => (
        this.props.dispatch(worksActions.requestRegistWorks())
    )

    public renderNumberFormat = () => (
        <NumberFormat
            thousandSeparator={true}
            prefix="¥"
            onValueChange={this.setEntirePrice}
        />
    )

    public renderAddWorksNumberFormat = () => (
        <NumberFormat
            thousandSeparator={true}
            prefix="¥"
            onValueChange={this.setAddWorksPrice}
        />
    )

    public setIconValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    public setDiscription = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(worksActions.setRegistWorksDiscription(e.target.value))
    )

    public setWorksType = (e: React.ChangeEvent<{}>, value: any) => (
        this.props.dispatch(worksActions.setRegistWorksType(value))
    )

    public setEntirePrice = (e: NumberFormatValues) => (
        this.props.dispatch(worksActions.setEntirePrice(Number(e.value)))
    )

    public renderUnloader = () => (
        <div style={{ width: '250px', height: '250px', borderRadius: '5px', border: 'solid 1px #555', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>サムネイルを設定</div>
    )

    public resetThumb = () => (
        this.props.dispatch(worksActions.setRegistWorksThumb(''))
    )

    public setAddWorksTitle = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(worksActions.setAddWorksTitle(e.target.value))
    )

    public setAddWorksPrice = (e: NumberFormatValues) => (
        this.props.dispatch(worksActions.setAddWorksPrice(Number(e.value)))
    )

    public addRegistWorksList = () => (
        this.props.manageWorks.regist.addWorks.data && this.props.manageWorks.regist.addWorks.fileName ?
            this.props.dispatch(worksActions.addRegistWorksList())
            :
            null
    )

    public removeRegistWorksList = (index: number) => (
        this.props.dispatch(worksActions.removeRegistWorksList(index))
    )

    public setAddWorksData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files[0]) {
            const name = files[0].name
            const reader = new FileReader()
            reader.onloadend = () => {
                if (reader.result && files) {
                    this.props.dispatch(worksActions.setAddWorksData(
                        {
                            data: reader.result.toString(),
                            fileName: name,
                        }
                    ))
                }
            }
            reader.readAsDataURL(files[0])
        }
        e.target.value = ''
    }

    public renderRegistWorksList = () => (
        this.props.manageWorks.regist.works.map((works, i) => (
            <TableRow>
                <TableCell>
                    <button
                        onClick={this.removeRegistWorksList.bind(null, i)}
                    >
                        <Cancel/>
                    </button>
                </TableCell>
                <TableCell>{works.title}</TableCell>
                <TableCell align="right">¥{works.price}</TableCell>
                <TableCell align="right">{works.fileName}</TableCell>
            </TableRow>
        ))
    )

    public renderForm = () => (
        <Dialog
            open={this.props.manageWorks.regist.isOpenRegist}
            onClose={this.isOpenDialog}
        >
            <DialogTitle>作品情報</DialogTitle>
            {/* {this.state.isReadyObniz.toString()} */}
            <Divider />
            <DialogContent>
                <div>
                    <TextField
                        label="作品名"
                        variant="standard"
                        margin="normal"
                        value={this.props.manageWorks.regist.title}
                        onChange={this.setWorksTitle}
                        style={{ width: '100%' }}
                    />
                </div>
                <Divider />
                <div style={{ margin: '10px 0' }}>
                    <div>
                        <FormLabel>サムネイル</FormLabel>
                    </div>
                    <label style={{ cursor: 'pointer' }}>
                        <Img
                            style={{ width: '250px' }}
                            src={this.props.manageWorks.regist.thumbData}
                            unloader={this.renderUnloader()}
                        />
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            onChange={this.setIconValue}
                        />
                    </label>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <Button
                            onClick={this.resetThumb}
                        >
                            リセット
                        </Button>
                    </div>
                </div>
                <Divider />
                <div>
                    <TextField
                        label="説明"
                        multiline={true}
                        rows={2}
                        rowsMax={4}
                        value={this.props.manageWorks.regist.discription}
                        onChange={this.setDiscription}
                        style={{ width: '100%' }}
                    />
                </div>
                <Divider />
                <div style={{ margin: '10px 0' }}>
                    <TextField
                        label="全体価格"
                        value={this.props.manageWorks.regist.entirePrice}
                        InputProps={{
                            inputComponent: this.renderNumberFormat
                        }}
                        style={{width: '100%'}}
                    />
                </div>
                <Divider />
                <div>
                    <FormLabel>作品種</FormLabel>
                    <RadioGroup
                        onChange={this.setWorksType}
                        value={this.props.manageWorks.regist.type}
                        row={true}
                    >
                        <FormControlLabel value="music" control={<Radio />} label="音楽" />
                        <FormControlLabel value="movie" control={<Radio />} label="映像" />
                        <FormControlLabel value="image" control={<Radio />} label="画像" />
                    </RadioGroup>
                </div>
                <Divider />
                <div>
                    <FormLabel>作品の登録</FormLabel>
                    <Card>
                        <CardContent>
                            <div>
                                <TextField
                                    label="作品名"
                                    value={this.props.manageWorks.regist.addWorks.title}
                                    onChange={this.setAddWorksTitle}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div>
                                <TextField
                                    label="価格"
                                    value={this.props.manageWorks.regist.addWorks.price}
                                    InputProps={{
                                        inputComponent: this.renderAddWorksNumberFormat
                                    }}
                                    style={{ width: '100%', margin: '10px 0' }}
                                />
                            </div>
                            <div>
                                <label style={{ cursor: 'pointer' }}>
                                    {
                                        !this.props.manageWorks.regist.addWorks.data ?
                                            <div style={{padding: '5px 0', width: '100%', textAlign: 'center', border: 'solid 1px #555', borderRadius: '10px', cursor: 'pointer'}}>データを指定</div>
                                            :
                                            <div style={{padding: '5px 0', width: '100%', textAlign: 'center', border: 'solid 1px #555', borderRadius: '10px', cursor: 'pointer'}}>{this.props.manageWorks.regist.addWorks.fileName}</div>
                                    }
                                    <input
                                        style={{ display: 'none' }}
                                        type="file"
                                        accept={
                                            this.props.manageWorks.regist.type === 'music' ?
                                                'audio/*'
                                                :
                                                this.props.manageWorks.regist.type === 'movie' ?
                                                    'video/*'
                                                    :
                                                    'image/*'
                                        }
                                        onChange={this.setAddWorksData}
                                    />
                                </label>
                            </div>
                            <div>
                                <Fab
                                    color="secondary"
                                    variant="extended"
                                    aria-label="Add"
                                    onClick={this.addRegistWorksList}
                                    style={{ marginTop: '10px', width: '100%' }}
                                >
                                    <FontAwesomeIcon icon={faPlusCircle} />

                                    <span style={{ paddingLeft: '5px' }}>追加</span>
                                </Fab>
                            </div>
                        </CardContent>
                    </Card>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>名前</TableCell>
                                <TableCell>価格</TableCell>
                                <TableCell>データ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderRegistWorksList()}
                        </TableBody>
                    </Table>
                </div>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={this.isOpenDialog}>キャンセル</Button>
                <Button
                    onClick={this.requestRegist}
                    disabled={this.props.manageWorks.regist.isRegisting}
                >
                    登録
                </Button>
            </DialogActions>
        </Dialog >
    )

    public isOpenDialog = () => (
        this.props.manageWorks.regist.isOpenRegist ?
            this.props.dispatch(worksActions.closeWorksRegister())
            :
            this.props.dispatch(worksActions.openWorksRegister())
    )

    public renderThumb = () => (
        this.props.manage
    )

    public setWorksTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dispatch(worksActions.setRegistWorksTitle(e.target.value))
        // this.sendObniz()
    }

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

