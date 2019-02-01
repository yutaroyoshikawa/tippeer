import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const requestRegistPerformance =     actionCreator('REQUEST_REGIST_PERFORMANCE')
export const successRegistPerformance =     actionCreator('SUCCESS_REGIST_PERFORMANCE')
export const faildRegistPerformance =       actionCreator('FAILD_REGIST_PERFORMANCE')

export const requestRegistWorks =           actionCreator('REQUEST_REGIST_WORKS')
export const successRegistWorks =           actionCreator('SUCCESS_REGIST_WORKS')
export const faildRegistWorks =             actionCreator('FAILD_REGIST_WORKS')

export const requestGetMessage =            actionCreator('REQUEST_GET_MESSAGE')
export const successGetMessage =            actionCreator('SUCCESS_GET_MESSAGE')
export const faildGetMessage =              actionCreator('FAILD_GET_MESSAGE')

export const requestGetPerformances =       actionCreator('REQUEST_GET_PERFORMANCES')
export const successGetPerformances =       actionCreator('SUCCESS_GET_PERFORMANCES')
export const faildGetPerformances =         actionCreator('FAILD_GET_PERFORMANCES')

export const requestRegistAdminUser =       actionCreator('REQUEST_REGIST_ADMIN_USER')
export const successRegistAdminUser =       actionCreator('SUCCESS_REGIST_ADMIN_USER')
export const faildRegistAdminUser =         actionCreator('FAILD_REGIST_ADMIN_USER')

export const openQR =                       actionCreator('OPEN_QR')
export const closeQR =                      actionCreator('CLOSE_QR')

export const setIsShowCommentList =         actionCreator<boolean>('SET_IS_SHOW_COMMENT_LIST')