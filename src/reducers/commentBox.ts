import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/commentBox'

export interface ICommentBox {
    comment: string
    rate: number
    sendToId: string
    type: 'works' | 'performance'
}

export interface ICommentBoxState{
    commentBox: ICommentBox
}

const initialReduceCommentBoxState: ICommentBox = {
    comment: '',
    rate: 4,
    sendToId: '',
    type: 'performance',
}

export default reducerWithInitialState(initialReduceCommentBoxState)
    .case(actions.setComment, (state: ICommentBox, payload): ICommentBox => ({
        ...state,
        comment: payload,
    }))
    .case(actions.setRate, (state: ICommentBox, payload): ICommentBox => ({
        ...state,
        rate: payload,
    }))
    .case(actions.initializeCommentBox, (state: ICommentBox): ICommentBox => ({
        ...state,
        comment: '',
        rate: 4,
    }))
    .case(actions.setSendToId, (state: ICommentBox, payload): ICommentBox => ({
        ...state,
        sendToId: payload,
    }))
    .case(actions.setCommentType, (state: ICommentBox, payload): ICommentBox => ({
        ...state,
        type: payload,
    }))
    .case(actions.successSendWorksComment, (state: ICommentBox): ICommentBox => ({
        ...state,
        comment: '',
    }))
    .case(actions.successSendPerformanceComment, (state: ICommentBox): ICommentBox => ({
        ...state,
        comment: '',
    }))
    .build()