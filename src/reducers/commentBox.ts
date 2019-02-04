import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/commentBox'

interface ICommentBox {
    comment: string
    userId: string
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
    userId: '',
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
    .case(actions.setUserId, (state: ICommentBox, payload): ICommentBox => ({
        ...state,
        userId: payload,
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
    .build()