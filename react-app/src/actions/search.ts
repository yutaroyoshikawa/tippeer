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

export const Search =    actionCreator<ISendSearchData>('SEARCH')

// interface ISearchAsyncActions {
//     request: ActionCreator<ISendSearchData>
//     done: ActionCreator<Success<ISendSearchData,IReceveSearchData>>
// }

// export const searchAsyncActions: ISearchAsyncActions = {
//     done: Search.done,
//     request: Search.started,
// }