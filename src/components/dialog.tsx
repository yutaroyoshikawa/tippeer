import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from 'react'
import { Dispatch } from 'redux'
import { IDialogState } from '../reducers/dialog'

export interface IProps extends IDialogState {
    dispatch: Dispatch
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public dispatchAction = (action: string) => (
        this.props.dispatch({type: action})
    )

    public renderButtons = () => (
        this.props.dialog.buttons.map((button) => (
            <Button onClick={this.dispatchAction.bind(this,button.action)}>
                {button.label}
            </Button>
        ))
    )

    public render() {
        return (
            <Dialog
                open={this.props.dialog.isOpen}
                onClose={this.dispatchAction.bind(this, this.props.dialog.onClose)}
            >
                <DialogTitle>
                    {this.props.dialog.title}
                </DialogTitle>
                <DialogContent>
                    <p>{this.props.dialog.content}</p>
                </DialogContent>
                <DialogActions>
                    {this.renderButtons()}
                </DialogActions>
            </Dialog>
        )
    }
}