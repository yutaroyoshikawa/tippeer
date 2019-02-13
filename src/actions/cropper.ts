import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const onCrop         = actionCreator<string>('ON_CLOP')
export const openCropper    = actionCreator<{data: string, type: 'icon' | 'works'}>('OPEN_CROPPER')
export const closeCropper   = actionCreator('CLOSE_CROPPER')