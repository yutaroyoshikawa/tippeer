import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export type cropType = 'icon' | 'works' | 'performance'

export const onCrop         = actionCreator<string>('ON_CLOP')
export const openCropper    = actionCreator<{data: string, type: cropType}>('OPEN_CROPPER')
export const closeCropper   = actionCreator('CLOSE_CROPPER')