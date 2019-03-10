import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IContents, IWorksComments } from '../reducers/worksDetails'

interface IWorksInfo {
    worksTitle: string
    artistId: string
    worksThumbnail: string
    entirePrice: number
    description: string
    contents: []
    comments: []
}

interface IBaseWorksInfo {
    worksTitle: string
    artistId: string
    worksThumbnail: string
    entirePrice: number
    description: string
}

export const requestFindWorksInfo = actionCreator<string>('REQUEST_FIND_WORKS_INFO')
export const findWorksInfo =        actionCreator<IWorksInfo>('FIND_WORKS_INFO')
export const notFindWorksInfo =     actionCreator('NOT_FIND_WORKS_INFO')

export const setAverageScore =      actionCreator<number>('SET_AVERAGE_SCORE')
export const setComments =          actionCreator<IWorksComments[]>('SET_COMMENTS')
export const setContents =          actionCreator<IContents[]>('SET_CONTENTS')
export const setBaseWorksInfo =     actionCreator<IBaseWorksInfo>('SET_BASE_WORKS_INFO')

export const successLoad =          actionCreator('SUCCESS_LOAD')

export const addNewWorksComment =   actionCreator<IWorksComments[]>('ADD_NEW_WORKS_COMMENT')
