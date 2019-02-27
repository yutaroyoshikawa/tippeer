import actionCreatorFactory from 'typescript-fsa'
import { IComments, IPerformance } from '../reducers/manageQR'

const actionCreator = actionCreatorFactory()

export const requestGetManageQrPerformance  = actionCreator('REQUEST_GET_MANAGE_QR_PERFORMANCE')
export const successGetManageQrPerformance   = actionCreator<IPerformance>('SUCCESS_GET_MANAGE_QR_PERFORMANCE')
export const faildGetManageQrPerformance     = actionCreator<any>('FAILD_GET_MANAGE_QR_PERFORMANCE')

export const addNewSyncComment = actionCreator<firebase.firestore.DocumentSnapshot>('ADD_NEW_SYNC_COMMENT')
export const setNewSyncComment = actionCreator<IComments[]>('SET_NEW_SYNC_COMMENT')

export const addNewSyncTipping = actionCreator<firebase.firestore.DocumentSnapshot>('ADD_NEW_SYNC_TIPPING')
export const setNewSyncTipping = actionCreator<number>('SET_NEW_SYNC_TIPPING')

export const setNewSyncToken = actionCreator<string>('SET_NEW_SYNC_TOKEN')