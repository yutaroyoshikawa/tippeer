import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/registUser'

interface IRegistUser {
    id: {
        errorText: string,
        state: 'passing' | 'error' | 'validating' | 'none',
        value: string,
    },
    name: {
        errorText: string,
        state: 'passing' | 'error' | 'validating' | 'none',
        value: string,
    },
    mail: {
        errorText: string,
        state: 'passing' | 'error' | 'validating' | 'none',
        value: string,
    },
    birthday: {
        errorText: string,
        value: string,
    },
    tags: {
        value: string[],
        dataSouce: string[],
    }
}

export interface IRegistUserState {
    registUser: IRegistUser
}

const initialReduceRegistUserState: IRegistUser = {
    birthday: {
        errorText: '',
        value: '1998-08-27',
    },
    id: {
        errorText: '',
        state: 'none',
        value: '',
    },
    mail: {
        errorText: '',
        state: 'none',
        value: '',
    },
    name: {
        errorText: '',
        state: 'none',
        value: '',
    },
    tags: {
        dataSouce: [],
        value: [],
    },
}

export default reducerWithInitialState(initialReduceRegistUserState)
    .case(actions.getIdValue, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        id: {
            ...state.id,
            value: payload,
        }
    }))
    .case(actions.getBithdayValue, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        birthday: {
            ...state.birthday,
            value: payload,
        }
    }))
    .case(actions.getMailValue, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        mail: {
            ...state.mail,
            value: payload,
        }
    }))
    .case(actions.getNameValue, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        name: {
            ...state.name,
            value: payload,
        }
    }))
    .case(actions.getTagsValue, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        tags: {
            ...state.tags,
            value: payload,
        }
    }))
    .case(actions.setIdError, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        id: {
            ...state.id,
            errorText: payload,
            state: 'error',
        },
    }))
    .case(actions.setNameError, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        name: {
            ...state.name,
            errorText: payload,
            state: 'error',
        },
    }))
    .case(actions.setMailError, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        mail: {
            ...state.mail,
            errorText: payload,
            state: 'error',
        },
    }))
    .case(actions.setIdPassing, (state: IRegistUser): IRegistUser => ({
        ...state,
        id: {
            ...state.id,
            errorText: '',
            state: 'passing',
        }
    }))
    .case(actions.setNamePassing, (state: IRegistUser): IRegistUser => ({
        ...state,
        name: {
            ...state.name,
            errorText: '',
            state: 'passing',
        }
    }))
    .case(actions.setMailPassing, (state: IRegistUser): IRegistUser => ({
        ...state,
        mail: {
            ...state.mail,
            errorText: '',
            state: 'passing',
        }
    }))
    .case(actions.setIdValidating, (state: IRegistUser): IRegistUser => ({
        ...state,
        id: {
            ...state.id,
            errorText: '',
            state: 'validating',
        }
    }))
    .case(actions.setNameValidating, (state: IRegistUser): IRegistUser => ({
        ...state,
        name: {
            ...state.name,
            errorText: '',
            state: 'validating',
        }
    }))
    .case(actions.setMailValidating, (state: IRegistUser): IRegistUser => ({
        ...state,
        mail: {
            ...state.mail,
            errorText: '',
            state: 'validating',
        }
    }))
    .build()
    