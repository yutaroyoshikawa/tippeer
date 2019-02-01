import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/library'

interface IContent {
    name: string
    dataUrl: string
    artistId: string
    isStop: boolean
    playingPoint: string
}

export interface IWorks {
    id: string
    name: string
    artistId: string
    thumbnail: string
    contents: IContent[]
}

export type ITab = 'music' | 'movie' | 'image'

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
    .case(actions.setTab, (state: ILibrary, payload): ILibrary => ({
        ...state,
        tabState: payload,
    }))
    .case(actions.requestGetLibrary, (state: ILibrary): ILibrary => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetLibrary, (state: ILibrary): ILibrary => ({
        ...state,
        isFind: true,
        isLoad: false,
    }))
    .case(actions.faildGetLibrary, (state: ILibrary): ILibrary => ({
        ...state,
        isFind: false,
        isLoad: false,
    }))
    .case(actions.setImageWorks, (state: ILibrary, payload): ILibrary => ({
        ...state,
        images: payload,
    }))
    .case(actions.setMovieWorks, (state: ILibrary, payload): ILibrary => ({
        ...state,
        movies: payload,
    }))
    .case(actions.setMusicWorks, (state: ILibrary, payload): ILibrary => ({
        ...state,
        musics: payload,
    }))
    .build()