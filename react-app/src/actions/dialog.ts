import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

interface IButton {
    label: string
    action: string
}

interface IOpenDialog {
    title: string
    content: string
    buttons: IButton[]
    onClose?: string
}

export const openDialog = actionCreator<IOpenDialog>('OPEN_DIALOG')
export const closeDialog = actionCreator('CLOSE_DIALOG')