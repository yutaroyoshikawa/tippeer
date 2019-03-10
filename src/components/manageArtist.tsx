import { Button, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Fab, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import Img from 'react-image'
import { Dispatch } from 'redux'
import { openCropper } from '../actions/cropper'
import * as actions from '../actions/manageArtist'
import { IManageState } from '../reducers/manage'
import { IManageArtistState } from '../reducers/manageArtist'
import { ArticleTitle, Cropper } from './'
// import * as Styled from '../styles/tipping'

export interface IProps extends IManageState, IManageArtistState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        this.props.dispatch(actions.requestGetManageArtist())
    }

    public renderUnloader = () => (
        <div style={{ width: '250px', height: '250px', borderRadius: '5px', border: 'solid 1px #555', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>サムネイルを設定</div>
    )

    public setTitle = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.setRegistArtistTitle(e.target.value))
    )

    public setSelfIntroduction = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.setRegistArtistSelfIntroduction(e.target.value))
    )

    public setTopImageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dispatch(actions.changeTopImage())
        const files = e.target.files
        if (files && files[0]) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if(reader.result && files){
                    this.props.dispatch(openCropper(
                        {
                            data: reader.result.toString(),
                            type: 'artistTop',
                        }
                    ))
                }
            }
            reader.readAsDataURL(files[0])
        }
        e.target.value = ''
    }

    public hundleRegistrationClick = () => (
        this.props.dispatch(actions.requestRegistManageArtist())
    )

    public render() {
        return (
            <div>
                <Cropper />
                <div style={{margin: '50px 0 0 100px', position: 'absolute'}}>
                    <ArticleTitle
                        color={'light'}
                        title="アーティスト情報"
                    />
                </div>
                <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', overflowY: 'scroll' }}>
                    <div style={{ width: '1020px' }}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Typography component="h2">
                                    肩書き
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography component="p">
                                    <TextField
                                        placeholder="肩書きを入力"
                                        variant="outlined"
                                        value={this.props.manageArtist.title}
                                        onChange={this.setTitle}
                                    />
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Typography component="h2">
                                    自己紹介
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography component="p">
                                    <TextField
                                        placeholder="自己紹介を入力"
                                        multiline={true}
                                        rows={2}
                                        rowsMax={4}
                                        variant="outlined"
                                        value={this.props.manageArtist.selfIntroduction}
                                        onChange={this.setSelfIntroduction}
                                    />
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Typography component="h2">
                                    トップ画像
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography component="p">
                                    <div>
                                        <label style={{ cursor: 'pointer' }}>
                                            <Img
                                                style={{ width: '250px' }}
                                                src={this.props.manageArtist.topImage}
                                                unloader={this.renderUnloader()}
                                            />
                                            <input
                                                style={{ display: 'none' }}
                                                type="file"
                                                onChange={this.setTopImageValue}
                                            />
                                        </label>
                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                            <Button
                                            // onClick={this.resetThumb}
                                            >
                                                リセット
                                            </Button>
                                        </div>
                                    </div>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <Divider />
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Fab
                            color="secondary"
                            variant="extended"
                            aria-label="Add"
                            disabled={this.props.manageArtist.isLoad || this.props.manageArtist.isRegisting}
                            onClick={this.hundleRegistrationClick}
                        >
                            登録
                        </Fab>
                    </div>
                </div>
            </div>
        )
    }
}

