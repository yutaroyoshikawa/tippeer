import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export interface IArtistInfo {
    title: string
    topImage: string
    selfIntroduction: string
}

export const requestGetManageArtist             = actionCreator('REQUEST_GET_MANAGE_ARTIST')
export const successGetManageArtist             = actionCreator<IArtistInfo>('SUCCESS_GET_MANAGE_ARTIST')
export const faildGetManageArtist               = actionCreator<any>('FAILD_GET_MANAGE_ARTIST')

export const requestRegistManageArtist          = actionCreator('REQUEST_REGIST_MANAGE_ARTIST')
export const successRegistManageArtist          = actionCreator('SUCCESS_REGIST_MANAGE_ARTIST')
export const faildRegistManageArtist            = actionCreator<any>('FAILD_REGIST_MANAGE_ARTIST')

export const setRegistArtistTitle               = actionCreator<string>('SET_REGIST_ARTIST_TITLE')
export const setRegistArtistSelfIntroduction    = actionCreator<string>('SET_REGIST_ARTIST_SELF_INTRODUCTION')
export const setRegistArtistThumb               = actionCreator<string>('SET_REGIST_ARTIST_THUMB')

export const changeTopImage                     = actionCreator('CHANGE_TOP_IMAGE')