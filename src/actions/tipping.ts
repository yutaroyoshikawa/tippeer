import actionCreatorFactory from 'typescript-fsa'
import { IScreen } from '../layouts/tipping'
import { IPerformance } from '../reducers/tipping'
const actionCreator = actionCreatorFactory()

export const setComponent   = actionCreator<IScreen>('SET_COMPONENT')

export const successLoadScanner = actionCreator('SUCCESS_LOAD_SCANER')
export const faildLoadScanner = actionCreator('FAILD_LOAD_SCANNER')

export const requestGetTippingPerformance = actionCreator<string>('REQUEST_GET_TIPPING_PERFORMANCE')
export const requestGetTopQR = actionCreator<string>('REQUEST_GET_TOP_QR')

export const successGetTippingPerformance = actionCreator<IPerformance>('SUCCESS_GET_TIPPING_PERFORMANCE')
export const faildGetTippingPerformance = actionCreator('FAILD_GET_TIPPING_PERFORMANCE')



export const setTippingValue = actionCreator<number>('SET_TIPPING_VALUE')

export const setIsBack = actionCreator<boolean>('SET_IS_BACK')
export const setYIndex = actionCreator<number>('SET_Y_INDEX')

export const initializePaying = actionCreator('INITIALIZE_PAYING')

export const requestScanQR = actionCreator<string>('REQUEST_SCAN_QR')
export const successScanQR = actionCreator<string>('SUCCESS_SCAN_QR')
export const faildScanQR = actionCreator('FAILD_SCAN_QR')

