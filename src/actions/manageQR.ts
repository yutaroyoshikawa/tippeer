import actionCreatorFactory from 'typescript-fsa'
import { IPerformance } from '../reducers/manageQR'

const actionCreator = actionCreatorFactory()

export const requestGetManageQrPerformance  = actionCreator('REQUEST_GET_MANAGE_QR_PERFORMANCE')
export const successGetManageQrPerformance   = actionCreator<IPerformance>('SUCCESS_GET_MANAGE_QR_PERFORMANCE')
export const faildGetManageQrPerformance     = actionCreator<any>('FAILD_GET_MANAGE_QR_PERFORMANCE')
