import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ID from '@material-ui/icons/AssignmentInd'
import Birthday from '@material-ui/icons/Cake'
import Cancel from '@material-ui/icons/Cancel'
import Name from '@material-ui/icons/Face'
import Tags from '@material-ui/icons/Label'
import Mail from '@material-ui/icons/Mail'
import ChipInput from 'material-ui-chip-input'
import * as React from 'react'
import { Dispatch } from 'redux'
import * as actions from '../actions/registUser'
import { IRegistUserState } from '../reducers/registUser'
import * as Styled from '../styles/components/commentBox'

export interface IProps extends IRegistUserState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props)
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

    public renderCanselDialog = () => (
        this.props.dispatch(actions.requestCanselRegistUser())
    )

    public render() {
        return(
            <div>
                <div onClick={this.renderCanselDialog.bind(this,)} style={{width: '100px'}}>
                    <Cancel/>
                </div>
                
                <form>
                    <Grid container={true} spacing={8} alignItems="flex-end">
                        <Grid item={true}>
                            <ID />
                        </Grid>
                        <Grid item={true}>
                            <TextField
                                name="id"
                                label="ID"
                                required={true}
                                value={this.props.registUser.id.value}
                                error={this.props.registUser.id.state === 'error' ? true : false}
                                helperText={this.props.registUser.id.errorText}
                                onChange={this.setIdValue}
                            />
                        </Grid>
                        <Grid item={true} >
                            {this.props.registUser.id.state === 'validating' ? <CircularProgress style={{width: '20px', height: '20px'}} /> : null}
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={8} alignItems="flex-end">
                        <Grid item={true}>
                            <Name />
                        </Grid>
                        <Grid item={true}>
                            <TextField
                                name="name"
                                label="Name"
                                required={true}
                                value={this.props.registUser.name.value}
                                error={this.props.registUser.name.state === 'error' ? true : false}
                                helperText={this.props.registUser.name.errorText}
                                onChange={this.setNameValue}
                            />
                        </Grid>
                        <Grid item={true}>
                            {this.props.registUser.name.state === 'validating' ? <CircularProgress style={{width: '20px', height: '20px'}} /> : null}
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={8} alignItems="flex-end">
                        <Grid item={true}>
                            <Mail />
                        </Grid>
                        <Grid item={true}>
                            <TextField
                                name="mail"
                                label="Mail"
                                required={true}
                                value={this.props.registUser.mail.value}
                                error={this.props.registUser.mail.state === 'error' ? true : false}
                                helperText={this.props.registUser.mail.errorText}
                                onChange={this.setMailValue}
                            />
                        </Grid>
                        <Grid item={true}>
                            {this.props.registUser.mail.state === 'validating' ? <CircularProgress style={{width: '20px', height: '20px'}} /> : null}
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={8} alignItems="flex-end">
                        <Grid item={true}>
                            <Birthday />
                        </Grid>
                        <Grid item={true}>
                            <TextField
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
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={8} alignItems="flex-end">
                        <Grid item={true}>
                            <Tags />
                        </Grid>
                        <Grid item={true}>
                            <ChipInput
                                label="Tag"
                                dataSource={this.props.registUser.tags.dataSouce}
                                InputLabelProps={
                                    {
                                        shrink: true,
                                    }
                                } 
                            />
                        </Grid>
                    </Grid>
                    <Styled.SendBox>
                    <Styled.SendButton
                        disabled=
                            {
                                this.props.registUser.id.state === 'passing' &&
                                this.props.registUser.name.state === 'passing' &&
                                this.props.registUser.mail.state === 'passing' ?
                                false
                                :
                                true
                            }
                    >
                        <Styled.SendIcon icon={faPaperPlane} />
                    </Styled.SendButton>
                    </Styled.SendBox>
                </form>
            </div>
        )
    }
}