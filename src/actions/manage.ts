import actionCreatorFactory from 'typescript-fsa'
import { IAdminManagementPage, IArtistManagementPage } from '../reducers/manage'

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

export const openDrawer =                   actionCreator('OPEN_DRAWER')
export const closeDrawer =                  actionCreator('CLOSE_DRAWER')

export const setArtistManagementPage =      actionCreator<IArtistManagementPage>('SET_ARTIST_MANAGEMENT_PAGE')
export const setAdminManagementPage =       actionCreator<IAdminManagementPage>('SET_ADMIN_MANAGEMENT_PAGE')

export const hideDrawerOpenner =            actionCreator('HIDE_DRAWER_OPENNER')
export const showDrawerOpenner =            actionCreator('SHOW_DRAWER_OPENNER')