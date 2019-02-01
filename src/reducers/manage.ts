import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manage'

interface IManage {
    isOpenTippingQR: boolean
    isShowCommentList: boolean
}

export interface IManageState {
    manage: IManage
}

const initialReduceManageState: IManage = {
    isOpenTippingQR: false,
    isShowCommentList: true,
}

export default reducerWithInitialState(initialReduceManageState)
    .case(actions.successGetPerformances, (state: IManage): IManage => ({
        ...state,
    }))
    .case(actions.setIsShowCommentList, (state: IManage, payload): IManage => ({
        ...state,
        isShowCommentList: payload,
    }))
    .case(actions.openQR, (state: IManage): IManage => ({
        ...state,
        isOpenTippingQR: true,
    }))
    .case(actions.closeQR, (state: IManage): IManage => ({
        ...state,
        isOpenTippingQR: false,
    }))
    .build()