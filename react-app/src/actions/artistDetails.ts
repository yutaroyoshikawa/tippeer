import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

interface IInitGetInfo {
    artistName: string
    selfIntroduction: string
    jobTitle: string
    performanceHistory: number[]
    subscribeCount: number
    recentlyPerformanceId: number
    recommendWorks: number[]
}

export const getArtistInfo =           actionCreator<{artistId: string}>('GET_ARTIST_INFO')
export const successArtistInfo =       actionCreator<IInitGetInfo>('SUCCESS_ARTIST_INFO')