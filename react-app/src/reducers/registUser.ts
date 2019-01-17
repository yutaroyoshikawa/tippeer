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
        tags: string[],
        suggestions: string[],
        value: string,
    },
    icon: {
        data: string,
    },
    requestRegist: boolean
}

export interface IRegistUserState {
    registUser: IRegistUser
}

const initialReduceRegistUserState: IRegistUser = {
    birthday: {
        errorText: '',
        value: '1998-08-27',
    },
    icon: {
        data: '',
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
    requestRegist: false,
    tags: {
        suggestions: [],
        tags: [],
        value: '',
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
    .case(actions.setTagInput, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        tags: {
            ...state.tags,
            value: payload,
        }
    }))
    .case(actions.addTagData, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        tags: {
            ...state.tags,
            tags: payload,
        }
    }))
    .case(actions.removeTagData, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        tags: {
            ...state.tags,
            tags: payload,
        }
    }))
    .case(actions.setSuggestionTags, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        tags: {
            ...state.tags,
            suggestions: payload,
        }
    }))
    .case(actions.getIconData, (state: IRegistUser, payload): IRegistUser => ({
        ...state,
        icon: {
            ...state.icon,
            data: payload,
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
    .case(actions.requestRegistUser, (state: IRegistUser): IRegistUser => ({
        ...state,
        requestRegist: true,
    }))
    .case(actions.successRegistUser, (state: IRegistUser): IRegistUser => ({
        ...state,
        requestRegist: false,
    }))
    .build()
