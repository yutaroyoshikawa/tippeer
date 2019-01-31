import { reducerWithInitialState } from 'typescript-fsa-reducers'

interface IContent {
    id: string
    name: string
    dataUrl: string
    artistId: string
    isStop: boolean
    playingPoint: string
}

interface IWorks {
    id: string
    name: string
    artistId: string
    thumbnail: string
    contents: IContent[]
}

type ITab = 'music' | 'movie' | 'image'

interface ILibrary {
    isFind: boolean
    isLoad: boolean
    tabState: ITab
    musics: IWorks[]
    images: IWorks[]
    movies: IWorks[]
}

export interface ILibraryState {
    library: ILibrary
}

const initialReduceLibraryState: ILibrary = {
    images: [],
    isFind: false,
    isLoad: false,
    movies: [],
    musics: [],
    tabState: 'music',
}

export default reducerWithInitialState(initialReduceLibraryState)
    .build()