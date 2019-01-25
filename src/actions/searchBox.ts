import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const setSearchBoxWord =     actionCreator<string>('SET_SEARCH_BOX_WORD')
export const requestSearch =        actionCreator('REQUEST_SEARCH')
