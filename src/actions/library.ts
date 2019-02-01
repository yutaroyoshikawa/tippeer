import actionCreatorFactory from 'typescript-fsa'
import { ITab, IWorks } from '../reducers/library'
const actionCreator = actionCreatorFactory()

export const setTab =         actionCreator<ITab>('SET_TAB')

export const requestGetLibrary = actionCreator('REQUEST_GET_LIBRARY')
export const successGetLibrary = actionCreator('SUCCESS_GET_LIBRARY')
export const faildGetLibrary = actionCreator('FAILD_GET_LIBRARY')

export const setMusicWorks = actionCreator<IWorks[]>('SET_MUSIC_LIBRARY')
export const setMovieWorks = actionCreator<IWorks[]>('SET_MOVIE_WORKS')
export const setImageWorks = actionCreator<IWorks[]>('SET_IMAGE_WORKS')
