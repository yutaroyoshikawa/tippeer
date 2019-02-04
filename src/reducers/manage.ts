import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manage'

export type IArtistManagementPage = 'top' | 'qr' | 'message' | 'performance' | 'works' | 'artistInfo'
export type IAdminManagementPage = 'top' | 'user' | 'works' | 'message' | 'performances' | 'applications'

interface IManage {
    isOpenTippingQR: boolean
    isShowCommentList: boolean
    isOpenDrawer: boolean
    isHideDrawerOpenner: boolean
    artistManagementPage: IArtistManagementPage
    adminManagementPage: IAdminManagementPage
}

export interface IManageState {
    manage: IManage
}

const initialReduceManageState: IManage = {
    adminManagementPage: 'top',
    artistManagementPage: 'top',
    isHideDrawerOpenner: false,
    isOpenDrawer: false,
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
    .case(actions.openDrawer, (state: IManage): IManage => ({
        ...state,
        isOpenDrawer: true,
    }))
    .case(actions.closeDrawer, (state: IManage): IManage => ({
        ...state,
        isOpenDrawer: false,
    }))
    .case(actions.setArtistManagementPage, (state: IManage, payload): IManage => ({
        ...state,
        artistManagementPage: payload,
    }))
    .case(actions.setAdminManagementPage, (state: IManage, payload): IManage => ({
        ...state,
        adminManagementPage: payload,
    }))
    .case(actions.hideDrawerOpenner, (state: IManage): IManage => ({
        ...state,
        isHideDrawerOpenner: true,
    }))
    .case(actions.showDrawerOpenner, (state: IManage): IManage => ({
        ...state,
        isHideDrawerOpenner: false,
    }))
    .build()