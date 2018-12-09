export interface ISearch {
    searchWord: string
    searchState: 'loading' | 'complete' | 'none'
    result: {
        artists: string[] | null
        works: number[] | null
        performances: number[] | null
        places: number[] | null
    }
}