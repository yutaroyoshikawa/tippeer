import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manageWorks'
import { worksType } from '../actions/manageWorks'

export interface IWorks {
    title: string
    price: number
    data: string
    fileName: string
}

export interface IRegistedContent {
    name: string
    price: number
    data: string
}

export interface IRegistedWorks {
    discription: string
    contents: IRegistedContent[]
    title: string
    thumbData: string
    type: worksType
    entirePrice: number
    id: string
    releasedAt: Date
}

export interface IRegistWorks {
    discription: string
    addWorks: IWorks
    works: IWorks[]
    title: string
    thumbData: string
    type: worksType
    entirePrice: number
    isRegisting: boolean,
    isOpenRegist: boolean
} 

interface IManageWorks {
    regist: IRegistWorks
    registed: IRegistedWorks[]
    isLoad: boolean
}

export interface IManageWorksState {
    manageWorks: IManageWorks
}

const initialReduceManageWorksState: IManageWorks = {
    isLoad: false,
    regist: {
        addWorks: {
            data: '',
            fileName: '',
            price: 0,
            title: '',
        },
        discription: '',
        entirePrice: 0,
        isOpenRegist: false,
        isRegisting: false,
        thumbData: '',
        title: '',
        type: 'music',
        works: [],
    },
    registed: new Array(),
}

const addNewRegistedWorks = (state: IRegistedWorks[], payload: IRegistedWorks): IRegistedWorks[] => {
    state.unshift(payload)
    return state
}

export default reducerWithInitialState(initialReduceManageWorksState)
    .case(actions.setRegistWorksContents, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            works: payload,
        }
    }))
    .case(actions.setRegistWorksThumb, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            thumbData: payload,
        }
    }))
    .case(actions.setRegistWorksTitle, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            title: payload,
        }
    }))
    .case(actions.setRegistWorksDiscription, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            discription: payload,
        }
    }))
    .case(actions.setRegistWorksType, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            type: payload,
        }
    }))
    .case(actions.setEntirePrice, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            entirePrice: payload,
        }
    }))
    .case(actions.setAddWorksData, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            addWorks: {
                ...state.regist.addWorks,
                ...payload,
            }
        }
    }))
    .case(actions.setAddWorksPrice, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            addWorks: {
                ...state.regist.addWorks,
                price: payload,
            }
        }
    }))
    .case(actions.setAddWorksTitle, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            addWorks: {
                ...state.regist.addWorks,
                title: payload,
            }
        }
    }))
    .case(actions.addRegistWorksList, (state: IManageWorks): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            addWorks: {
                ...state.regist.addWorks,
                data: '',
                fileName: '',
                title: '',
            },
            works: state.regist.works.concat(state.regist.addWorks),
        }
    }))
    .case(actions.removeRegistWorksList, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            works: state.regist.works.splice(payload + 1, 1),
        }
    }))
    .case(actions.openWorksRegister, (state: IManageWorks): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            isOpenRegist: true,
        }
    }))
    .case(actions.closeWorksRegister, (state: IManageWorks): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            isOpenRegist: false,
        }
    }))
    .case(actions.requestRegistWorks, (state: IManageWorks): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            isRegisting: true,
        }
    }))
    .case(actions.successRegistWorks, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            addWorks: {
                ...state.regist.addWorks,
                data: '',
                fileName: '',
                title: '',
            },
            isOpenRegist: false,
            isRegisting: false,
        },
        registed: addNewRegistedWorks(state.registed, payload),
    }))
    .case(actions.faildRegistWorks, (state: IManageWorks, payload): IManageWorks => ({
        ...state,
        regist: {
            ...state.regist,
            isRegisting: false,
        }
    }))
    .case(actions.requestGetRegistedWorks, (state: IManageWorks): IManageWorks => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetRegistedWorks, (state: IManageWorks): IManageWorks => ({
        ...state,
        isLoad: false,
    }))
    .case(actions.faildGetRegistedWorks, (state: IManageWorks): IManageWorks => ({
        ...state,
        isLoad: false,
    }))
    .build()
