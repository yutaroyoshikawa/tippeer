import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IWorksTop } from '../reducers/worksTop'

export const getInitInfo =         actionCreator('GET_INIT_INFO')
export const successInitInfo =     actionCreator<IWorksTop>('SUCCESS_INIT_INFO')