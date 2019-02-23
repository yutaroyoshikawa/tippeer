import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/managePerformance'

export interface IRegistPerformance {
    thumbData: string
    title: string
    start: Date
    finish: Date
    discription: string
    placeId: string
    isRegisting: boolean,
    isOpenRegist: boolean
}

interface IManagePerformance {
    regist: IRegistPerformance
    isLoad: boolean
    registed: actions.IPerformance[]
}

export interface IManagePerformanceState {
    managePerformance: IManagePerformance
}

const initialReduceManageState: IManagePerformance = {
    isLoad: false,
    regist: {
        discription: '',
        finish: new Date(),
        isOpenRegist: false,
        isRegisting: false,
        placeId: '',
        start: new Date(),
        thumbData: '',
        title: '',
    },
    registed: [],
}

const addNewPerformance = (state: actions.IPerformance[], payload: actions.IPerformance): actions.IPerformance[] => {
    state.unshift(payload)
    state.sort((a, b) => a.start > b.start ? -1 : 1)
    return state
}

export default reducerWithInitialState(initialReduceManageState)
    .case(actions.setRegistPerformanceThumb, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            thumbData: payload,
        }
    }))
    .case(actions.setRegistPerformanceTitle, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            title: payload,
        }
    }))
    .case(actions.setRegistPerformanceStart, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            finish: payload,
            start: payload,
        }
    }))
    .case(actions.setRegistPerformanceFinish, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            finish: payload,
        }
    }))
    .case(actions.setRegistDescription, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            discription: payload,
        }
    }))
    .case(actions.setPerformancePlace, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            placeId: payload,
        }
    }))
    .case(actions.requestRegistPerformance, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            isRegisting: true,
        }
    }))
    .case(actions.successRegistPerformance, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        regist: {
            discription: '',
            finish: new Date(),
            isOpenRegist: false,
            isRegisting: false,
            placeId: '',
            start: new Date(),
            thumbData: '',
            title: '',
        },
        registed: addNewPerformance(state.registed, payload),
    }))
    .case(actions.faildRegistPerformance, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            isRegisting: false,
        }
    }))
    .case(actions.requestGetRegistedPerformances, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetRegistedPerformances, (state: IManagePerformance, payload): IManagePerformance => ({
        ...state,
        isLoad: false,
        registed: payload,
    }))
    .case(actions.faildGetRegistedPerformances, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        isLoad: false,
    }))
    .case(actions.openRegistDialog, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            isOpenRegist: true,
        }
    }))
    .case(actions.closeRegistDialog, (state: IManagePerformance): IManagePerformance => ({
        ...state,
        regist: {
            ...state.regist,
            isOpenRegist: false,
        }
    }))
    .build()