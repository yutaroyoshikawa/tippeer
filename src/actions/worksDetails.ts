import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IContents, IWorksComments } from '../reducers/worksDetails'

interface IWorksInfo {
    worksTitle: string
    artistId: string
    worksThumbnail: string
    price: number
    description: string
    contents: IContents[]
    comments: IWorksComments[]
}

export const requestGetWorksInfo =  actionCreator<string>('REQUEST_GET_WORKS_INFO')
export const successGetWorksInfo =  actionCreator<IWorksInfo>('SUCCESS_GET_WORKS_INFO')
export const faildGetWorksInfo =    actionCreator('FAILD_GET_WORKS_INFO')