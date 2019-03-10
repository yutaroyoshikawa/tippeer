import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IWorkses } from '../reducers/worksTop'

export const requestGetWorksTopInfo = actionCreator('REQUEST_GET_WORKS_TOP_INFO')
export const successGetWorksTopInfo = actionCreator<IWorkses>('SUCCESS_GET_WORKS_TOP_INFO')
export const faildGetWorksTopInfo   = actionCreator<any>('FAILD_GET_WORKS_TOP_INFO')
