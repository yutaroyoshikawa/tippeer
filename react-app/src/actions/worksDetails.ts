import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

interface IWorksInfo {
    worksTitle: string
    artistId: string
    worksThumbnail: string
    price: number
    description: string
    contents: [{
        title: string
        artistId: string
        price: number
    }]
    comments: [{
        content: string
        userIcon: string
        userId: string
        score: number
        postDate: string
    }]
}

export const getWorksInfo =         actionCreator<{worksId: string}>('GET_WORKS_INFO')
export const successWorksInfo =     actionCreator<IWorksInfo>('SUCCESS_WORKS_INFO')