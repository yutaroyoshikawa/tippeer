import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

interface IReceveSearchData {
    works: string[]
    artists: string[]
    performances: string[]
    places: string[]
}

export const searchedResult = actionCreator<IReceveSearchData>('SEARCHED_RESULT')