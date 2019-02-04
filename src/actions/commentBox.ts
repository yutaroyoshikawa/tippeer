import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()



export const requestSendComment         = actionCreator('REQUEST_SEND_COMMENT')

export const setComment                 = actionCreator<string>('SET_COMMENT')

export const setRate                    = actionCreator<number>('SET_RATE')

export const setUserId                  = actionCreator<string>('SET_USER_ID')

export const initializeCommentBox       = actionCreator('INITIALIZE_COMMENT_BOX')

export const setSendToId                = actionCreator<string>('SET_COMMENT_BOX_INFO')

export const setCommentType             = actionCreator<'works' | 'performance'>('SET_COMMENT_TYPE')