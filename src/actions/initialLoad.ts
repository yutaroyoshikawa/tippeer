import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const hideLoad =         actionCreator('HIDE_LOAD')
export const showLoad =         actionCreator('SHOW_LOAD')

export const playMusic =     actionCreator('PLAY_MUSIC')
export const stopMusic =     actionCreator('STOP_MUSIC')

export const doHide =       actionCreator('DO_HIDE')