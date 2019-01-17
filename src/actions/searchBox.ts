import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

interface ISendSearchData {
    searchWord: string
}

// interface IReceveSearchData {
//     works: number[]
//     artists: string[]
//     performances: number[]
//     places: number[]
// }

export const setSearchBoxWord =    actionCreator<ISendSearchData>('SET_SEARCH_BOX_WORD')
