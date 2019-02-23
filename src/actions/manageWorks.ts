import actionCreatorFactory from 'typescript-fsa'
import { IRegistedWorks, IWorks } from '../reducers/manageWorks'

const actionCreator = actionCreatorFactory()

export type worksType = 'music' | 'movie' | 'image'

export const requestGetRegistedWorks     = actionCreator('REQUEST_GET_REGISTED_WORKS')
export const successGetRegistedWorks     = actionCreator<IRegistedWorks[]>('SUCCESS_GET_REGISTED_WORKS')
export const faildGetRegistedWorks       = actionCreator<any>('FAILD_GET_REGISTED_WORKS')

export const openWorksRegister           = actionCreator('OPEN_WORKS_REGISTER')
export const closeWorksRegister          = actionCreator('CLOSE_WORKS_REGISTER')

export const setRegistWorksThumb         = actionCreator<string>('SET_REGIST_WORKS_THUMB')
export const setRegistWorksTitle         = actionCreator<string>('SET_REGIST_WORKS_TITLE')
export const setRegistWorksContents      = actionCreator<IWorks[]>('SET_REGIST_WORKS_CONTENTS')
export const setRegistWorksDiscription   = actionCreator<string>('SET_REGIST_WORKS_DISCRIPTION')
export const setRegistWorksType          = actionCreator<worksType>('SET_REGIST_WORKS_TYPE')
export const setEntirePrice              = actionCreator<number>('SET_ENTIRE_PRICE')

export const setAddWorksTitle            = actionCreator<string>('SET_ADD_WORKS_TITLE')
export const setAddWorksPrice            = actionCreator<number>('SET_ADD_WORKS_PRICE')
export const setAddWorksData             = actionCreator<{data: string, fileName: string}>('SET_ADD_WORKS_DATA')

export const addRegistWorksList          = actionCreator('ADD_REGIST_WORKS_LIST')
export const removeRegistWorksList       = actionCreator<number>('REMOVE_REGIST_WORKS_LIST')

export const requestRegistWorks          = actionCreator('REQUEST_REGIST_WORKS')
export const successRegistWorks          = actionCreator<IRegistedWorks>('SUCCESS_REGIST_WORKS')
export const faildRegistWorks            = actionCreator<any>('FAILD_REGIST_WORKS')
