import DateFnsUtils from '@date-io/date-fns'
import { faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardContent, CardMedia, Divider, Fab, Typography } from '@material-ui/core'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core'
// import ListIcon from '@material-ui/icons/List'
import { InlineDateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'
import * as React from 'react'
import Img from 'react-image'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { Dispatch } from 'redux'
import { openCropper } from '../actions/cropper'
// import * as actions from '../actions/manage'
import * as performanceActions from '../actions/managePerformance'
import { Cropper } from '../components'
import { IManageState } from '../reducers/manage'
import { IManagePerformanceState } from '../reducers/managePerformance'
import { ArticleTitle } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState, IManagePerformanceState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        this.props.dispatch(performanceActions.requestGetRegistedPerformances())
    }

    public hundleClickDialog = () => (
        this.props.managePerformance.regist.isOpenRegist ?
            this.props.dispatch(performanceActions.closeRegistDialog())
            :
            this.props.dispatch(performanceActions.openRegistDialog())
    )

    public setTitle = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(performanceActions.setRegistPerformanceTitle(e.target.value))
    )

    public setStart = (e: any) => (
        this.props.dispatch(performanceActions.setRegistPerformanceStart(new Date(e)))
    )

    public setFinish = (e: any) => (
        this.props.dispatch(performanceActions.setRegistPerformanceFinish(new Date(e)))
    )

    public setDiscription = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(performanceActions.setRegistDescription(e.target.value))
    )

    public renderThumbInput = () => (
        <div style={{ width: '100%', height: '100px' }} >
            サムネイルの設定
        </div>
    )

    public setIconValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files && files[0]) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if(reader.result && files){
                    this.props.dispatch(openCropper(
                        {
                            data: reader.result.toString(),
                            type: 'performance',
                        }
                    ))
                }
            }
            reader.readAsDataURL(files[0])
        }
        e.target.value = ''
    }

    public setPlaceId = (e: any) => {
        this.props.dispatch(performanceActions.setPerformancePlace(e.value))
    }

    public renderUnloader = () => (
        <div style={{ width: '250px', height: '250px', borderRadius: '5px', border: 'solid 1px #555', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>サムネイルを設定</div>
    )

    public resetThumb = () => (
        this.props.dispatch(performanceActions.setRegistPerformanceThumb(''))
    )

    public requestRegist = () => (
        this.props.dispatch(performanceActions.requestRegistPerformance())
    )

    public renderForm = () => (
        <Dialog
            open={this.props.managePerformance.regist.isOpenRegist}
            onClose={this.hundleClickDialog}
        >
            <DialogTitle>パフォーマンス情報</DialogTitle>
            <Divider />
            <DialogContent>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div>
                        <TextField
                            label="パフォーマンス名"
                            variant="standard"
                            margin="normal"
                            value={this.props.managePerformance.regist.title}
                            onChange={this.setTitle}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <Typography component="h3">
                            パフォーマンス場所
                        </Typography>
                        <Select
                            options={
                                [
                                    { value: 'hoge', label: '小金井公園' },
                                ]
                            }
                            onChange={this.setPlaceId}
                        />
                    </div>
                    <div>
                        <TextField
                            label="説明"
                            multiline={true}
                            rows={2}
                            rowsMax={4}
                            value={this.props.managePerformance.regist.discription}
                            onChange={this.setDiscription}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <InlineDateTimePicker
                            label="開始時間"
                            value={this.props.managePerformance.regist.start}
                            minDate={new Date()}
                            onChange={this.setStart}
                            format={"yyyy/MM/dd hh:mm a"}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <InlineDateTimePicker
                            label="終了時間"
                            value={this.props.managePerformance.regist.finish}
                            minDate={this.props.managePerformance.regist.start}
                            maxDate={this.props.managePerformance.regist.start}
                            onChange={this.setFinish}
                            format={"yyyy/MM/dd hh:mm a"}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <Typography component="h3">
                            サムネイル
                        </Typography>
                        <label style={{ cursor: 'pointer' }}>
                            <Img
                                style={{ width: '250px' }}
                                src={this.props.managePerformance.regist.thumbData}
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
                </MuiPickersUtilsProvider>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={this.hundleClickDialog}>キャンセル</Button>
                <Button
                    onClick={this.requestRegist}
                    disabled={this.props.managePerformance.regist.isRegisting ? true : false}
                >
                    登録
                </Button>
            </DialogActions>
        </Dialog>
    )

    public renderNoThumbnail = () => (
        <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CCC' }}>
            <FontAwesomeIcon icon={faImage} style={{ fontSize: '80px', color: '#FFF' }} />
        </div>
    )

    public renderRegistedPerformance = () => (
        this.props.managePerformance.registed.map(performance => (
            <div style={{ display: 'inline-block', margin: '50px' }} key={performance.id}>
                <Card style={{ width: '300px' }}>
                    <Link to={'/performances/' + performance.id} >
                        {
                            performance.thumbnail ?
                                <CardMedia
                                    image={performance.thumbnail}
                                    title="thumbnail"
                                    style={{ height: '300px', width: '300px' }}
                                />
                                :
                                <CardMedia
                                    component={this.renderNoThumbnail}
                                    title="No Thumbnail"
                                    style={{ height: '300px', width: '300px'}}
                                />
                        }
                    </Link>
                    <CardContent>
                        <Typography color="textSecondary">
                            {performance.name}
                        </Typography>
                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Typography component="p">
                                    概要
                                    </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography component="p">
                                    {performance.discription}
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <Typography component="p">
                            {performance.place.name}
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        ))
    )

    public render() {
        return (
            <div>
                <Cropper />
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <div style={{ margin: '50px 0' }}>
                        <ArticleTitle title="パフォーマンス" color="light" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab
                            color="secondary"
                            variant="extended"
                            aria-label="Add"
                            onClick={this.hundleClickDialog}
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
                    {this.renderRegistedPerformance()}
                </div>
            </div>
        )
    }
}

