import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/dialog'

interface IButton {
    label: string
    action: string
}

interface IDialog {
    isOpen: boolean
    title: string
    content: JSX.Element | string
    buttons: IButton[]
    onClose: string
}

export interface IDialogState{
    dialog: IDialog
}

const initialReduceAuthState: IDialog = {
    buttons: [],
    content: '',
    isOpen: false,
    onClose: "CLOSE_DIALOG",
    title: '',
}

export default reducerWithInitialState(initialReduceAuthState)
    .case(actions.openDialog, (state: IDialog, payload): IDialog => ({
        ...state,
        ...payload,
        isOpen: true,
        onClose: payload.onClose ? payload.onClose : "CLOSE_DIALOG",
    }))
    .case(actions.closeDialog, (state: IDialog): IDialog => ({
        ...state,
        isOpen: false,
    }))
    .build()