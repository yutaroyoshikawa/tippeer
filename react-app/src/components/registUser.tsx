import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { CircularProgress, Grid, Step, StepButton } from '@material-ui/core'
import { AssignmentInd, Cake, Cancel, Face, Label, Mail } from '@material-ui/icons'
import * as React from 'react'
import { Dispatch } from 'redux'
import { openCropper } from '../actions/cropper'
import * as dialog from '../actions/dialog'
import * as actions from '../actions/registUser'
import { IRegistUserState } from '../reducers/registUser'
import * as Styled from '../styles/components/registUser'
import { Cropper } from './'

import { IGlobalMenuState } from '../reducers/globalMenu'

export interface IProps extends IRegistUserState, IGlobalMenuState {
    dispatch: Dispatch<any>
}

interface IState {
    index: number
    indexLatest: number
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            index: 0,
            indexLatest: 0,
        }
    }

    public setIdValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.getIdValue(e.currentTarget.value))
    )

    public setNameValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.getNameValue(e.currentTarget.value))
    )

    public setBirthdayValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.getBithdayValue(e.currentTarget.value))
    )

    public setMailValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.getMailValue(e.currentTarget.value))
    )

    public setIconValue(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files
        if (files && files[0]) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (reader.result && files) {
                    this.props.dispatch(openCropper(
                        {
                            data: reader.result.toString(),
                            type: 'icon',
                        }
                    ))
                }
            }
            reader.readAsDataURL(files[0])
        }
        e.target.value = ''
    }

    public renderCanselDialog = () => (
        this.props.dispatch(actions.requestCanselRegistUser())
    )

    public renderConformDialog = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.props.dispatch(dialog.openDialog(
            {
                buttons: [
                    {
                        action: "REQUEST_REGIST_USER",
                        label: "はい"
                    },
                    {
                        action: "CLOSE_DIALOG",
                        label: "修正する"
                    },
                ],
                content: this.registList(),
                title: "確認"
            }
        ))
    }

    public registList = () => (
        <div>
            <h3>登録してよろしいですか？</h3>
            <p>登録した場合、<a href="/privacypolicy" target="_blank">利用規約</a>に同意したものとみなします。</p>
        </div>
    )

    public onAddTag = (tag: string) => {
        this.props.dispatch(actions.requestAddTagData(tag))
        this.props.dispatch(actions.setTagInput(''))
    }

    public onRemoveTag = (tag: string) => (
        this.props.dispatch(actions.requestRemoveTagData(tag))
    )

    public setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        this.props.dispatch(actions.setTagInput(e.currentTarget.value))
    )

    public renderTagState = () => (
        this.props.registUser.tags.tags.map((tag) => (
            <Styled.SelectedTag key={tag + '/state'}>
                <Styled.DeleteSelectedTagButton onClick={this.onRemoveTag.bind(this, tag)} ><Cancel /></Styled.DeleteSelectedTagButton>
                {tag}
            </Styled.SelectedTag>
        ))
    )

    public renderSuggestTag = () => (
        this.props.registUser.tags.suggestions.map((suggest) => (
            <Styled.SuggestTag key={suggest + '/suggest'} onClick={this.onAddTag.bind(this, suggest)}>
                {suggest}
            </Styled.SuggestTag>
        ))
    )

    public renderTagInput = () => (
        <Styled.RegistTagSection>
            <Styled.SelectedTagsSection>
                {this.renderTagState()}
            </Styled.SelectedTagsSection>
            <Styled.TagInput>
                <Styled.TagLabel />
                <Styled.UserInfoInput
                    label="好きなジャンルを検索"
                    onChange={this.setInputValue.bind(this,)}
                    value={this.props.registUser.tags.value}
                    variant="outlined"
                />
            </Styled.TagInput>
            <Styled.SuggestTagsSection>
                {this.renderSuggestTag()}
            </Styled.SuggestTagsSection>
        </Styled.RegistTagSection>
    )

    public onChangeSlide = (Index: number, IndexLatest: number) => {
        if(Index){
            this.setState(
                {
                    index: Index,
                    indexLatest: IndexLatest,
                }
            )
        }
    }

    public onClickStep = (stepNum: number) => (
        this.setState({index: stepNum}
        )
    )

    public nextStep = () => (
        this.setState({index: this.state.index + 1})
    )

    public backStep = () => (
        this.setState({index: this.state.index - 1})
    )

    public renderStepper = () => (
        <Styled.StepperOuter>
            <Styled.StepperSection
                alternativeLabel={true}
                activeStep={this.state.index}
                nonLinear={true}
            >
                <Step>
                    <StepButton
                        onClick={this.onClickStep.bind(this, 0)}
                    >
                        <Face />
                    </StepButton>
                </Step>
                <Step>
                    <StepButton
                        onClick={this.onClickStep.bind(this, 1)}
                    >
                        <Label />
                    </StepButton>
                </Step>
                <Step>
                    <StepButton
                        onClick={this.onClickStep.bind(this, 2)}
                    >
                        <AssignmentInd />
                    </StepButton>
                </Step>
            </Styled.StepperSection>
        </Styled.StepperOuter>
        
    )

    public renderState = (State: string) => {
        switch(State) {
            case 'validating':
                return(<Styled.Balidating />)
            case 'error':
                return(<Styled.Error />)
            case 'passing':
                return(<Styled.Passing />)
            default :
                return null
        }
    }

    public resetIcon = () => (
        this.props.dispatch(actions.getIconData(''))
    )

    public render() {
        return (
            this.props.registUser.requestRegist ?
            <div style={{width: '100vw', height: '100vh', background: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99999, position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}}>
                <div>
                    <CircularProgress />
                </div>
            </div>
            :
            <div>
                {this.renderStepper()}
                <form　autoComplete="off">
                    <Styled.CarouselSection>
                        <Styled.Carousel
                            index={this.state.index}
                            enableMouseEvents={false}
                            onChangeIndex={this.onChangeSlide}
                        >
                            <Styled.IconRegistSection>
                                <Styled.RegistIconButton>
                                    {
                                        !this.props.registUser.icon.data ?
                                            <Styled.DefaultIcon />
                                            :
                                            <Styled.PreviewIcon src={this.props.registUser.icon.data} alt="iconPreview" />
                                    } 
                                    <Styled.IconInput type="file" name="icon" accept="image/*" onChange={this.setIconValue.bind(this,)} />
                                    <Styled.IconBoxHelper>{this.props.globalMenu.agent === 'undefined' ? 'クリック' : 'タップ'}してアイコンを設定</Styled.IconBoxHelper>
                                </Styled.RegistIconButton>
                                <Styled.IconResetButton onClick={this.resetIcon}>アイコンをリセット</Styled.IconResetButton>
                            </Styled.IconRegistSection>
                            <Styled.TagRegistSection>
                                <div>
                                    {this.renderTagInput()}
                                </div>
                            </Styled.TagRegistSection>
                            <Styled.UserInfoSection>
                                <Styled.InnerUserInfoSection>
                                    <Styled.CarouselSlide>
                                        <Grid container={true} spacing={8} alignItems="flex-end">
                                            <Grid item={true}>
                                                <AssignmentInd />
                                            </Grid>
                                            <Styled.InputSection itemProp={this.props.registUser.id.state}>
                                                <Grid item={true}>
                                                    <Styled.UserInfoInput
                                                        name="id"
                                                        label="ID"
                                                        required={true}
                                                        value={this.props.registUser.id.value}
                                                        error={this.props.registUser.id.state === 'error' ? true : false}
                                                        helperText={this.props.registUser.id.errorText}
                                                        onChange={this.setIdValue}
                                                    />
                                                </Grid>
                                            </Styled.InputSection>
                                            <Grid item={true}>
                                                {this.renderState(this.props.registUser.id.state)}
                                            </Grid>
                                        </Grid>
                                    </Styled.CarouselSlide>
                                    <Styled.CarouselSlide>
                                        <Grid container={true} spacing={8} alignItems="flex-end">
                                            <Grid item={true}>
                                                <Face />
                                            </Grid>
                                            <Styled.InputSection itemProp={this.props.registUser.name.state}>
                                                <Grid item={true}>
                                                    <Styled.UserInfoInput
                                                        name="name"
                                                        label="Name"
                                                        required={true}
                                                        value={this.props.registUser.name.value}
                                                        error={this.props.registUser.name.state === 'error' ? true : false}
                                                        helperText={this.props.registUser.name.errorText}
                                                        onChange={this.setNameValue}
                                                    />
                                                </Grid>
                                            </Styled.InputSection>
                                            <Grid item={true}>
                                                {this.renderState(this.props.registUser.name.state)}
                                            </Grid>
                                        </Grid>
                                    </Styled.CarouselSlide>
                                    <Styled.CarouselSlide> 
                                        <Grid container={true} spacing={8} alignItems="flex-end">
                                            <Grid item={true}>
                                                <Mail />
                                            </Grid>
                                            <Styled.InputSection itemProp={this.props.registUser.mail.state}>
                                                <Grid item={true}>
                                                    <Styled.UserInfoInput
                                                        name="mail"
                                                        label="Mail"
                                                        required={true}
                                                        value={this.props.registUser.mail.value}
                                                        error={this.props.registUser.mail.state === 'error' ? true : false}
                                                        helperText={this.props.registUser.mail.errorText}
                                                        onChange={this.setMailValue}
                                                    />
                                                </Grid>
                                            </Styled.InputSection>
                                            <Grid item={true}>
                                                {this.renderState(this.props.registUser.mail.state)}
                                            </Grid>
                                        </Grid>
                                    </Styled.CarouselSlide>
                                    <div>
                                        <Styled.BirthdayInputSection>
                                            <Styled.CakeIcon>
                                                <Cake />
                                            </Styled.CakeIcon>
                                            <Styled.BirthdayInput>
                                                <Styled.UserInfoInput
                                                    name="birthday"
                                                    label="Birthday"
                                                    required={true}
                                                    type="Date"
                                                    value={this.props.registUser.birthday.value}
                                                    onChange={this.setBirthdayValue}
                                                    InputLabelProps={
                                                        {
                                                            shrink: true,
                                                        }
                                                    }
                                                />
                                            </Styled.BirthdayInput>
                                        </Styled.BirthdayInputSection>
                                    </div>
                                </Styled.InnerUserInfoSection>
                            </Styled.UserInfoSection>      
                        </Styled.Carousel>
                    </Styled.CarouselSection>
                    <Styled.CarouselControler>
                        <Styled.CarouselBackButton
                            onClick={this.backStep}
                            disabled= {this.state.index === 0 ? true : false}
                        >
                            ←
                        </Styled.CarouselBackButton>
                        <Styled.SendButton
                            disabled={
                                this.props.registUser.id.state === 'passing' &&
                                    this.props.registUser.name.state === 'passing' &&
                                    this.props.registUser.mail.state === 'passing' ?
                                    false
                                    :
                                    true
                            }
                            onClick={this.renderConformDialog.bind(this,)}
                            itemScope={
                                this.props.registUser.id.state === 'passing' &&
                                    this.props.registUser.name.state === 'passing' &&
                                    this.props.registUser.mail.state === 'passing' ?
                                    false
                                    :
                                    true
                            }
                        >
                            <Styled.SendIcon
                                icon={faPaperPlane}
                                color={
                                    this.props.registUser.id.state === 'passing' &&
                                        this.props.registUser.name.state === 'passing' &&
                                        this.props.registUser.mail.state === 'passing' ?
                                        'rgb(63, 213, 180)'
                                        :
                                        'rgb(180, 180, 180)'
                                }
                            />
                        </Styled.SendButton>
                        <Styled.CarouselNextButton
                            onClick={this.nextStep}
                            disabled= {this.state.index === 2 ? true : false}
                        >
                            →
                        </Styled.CarouselNextButton>
                    </Styled.CarouselControler>
                </form>
                <Cropper />
            </div>
        )
    }
}