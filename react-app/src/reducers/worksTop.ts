import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/worksTop'

import sampleImage from '../popVirus.jpg'

export interface IWorksTop {
    spotlight: [
        {
            worksId: number,
            thumbnail: string,
            artistId: string,
            worksTitle: string
        },
        {
            worksId: number,
            thumbnail: string,
            artistId: string,
            worksTitle: string
        },
        {
            worksId: number,
            thumbnail: string,
            artistId: string,
            worksTitle: string
        },
        {
            worksId: number,
            thumbnail: string,
            artistId: string,
            worksTitle: string
        }
    ],
    followArtists: string[],
    recommend: number[],
    newReleace: number[],
    runking: number[],
}

export interface IWorksTopState {
    worksTop: IWorksTop
}

const initialReduceWorksTopState: IWorksTopState = {
    worksTop: {
        followArtists: ['hoge', 'hoge', 'hoge', 'hoge'],
        newReleace: [1,2,3,4,5,6,7],
        recommend: [1,2,3,4,5,6,7],
        runking: [1,2,3,4],
        spotlight: [
            {
                artistId: 'hoge',
                thumbnail: sampleImage,
                worksId: 1,
                worksTitle: 'hoge',
            },
            {
                artistId: 'hoge',
                thumbnail: sampleImage,
                worksId: 1,
                worksTitle: 'hoge',
            },
            {
                artistId: 'hoge',
                thumbnail: sampleImage,
                worksId: 1,
                worksTitle: 'hoge',
            },
            {
                artistId: 'hoge',
                thumbnail: sampleImage,
                worksId: 1,
                worksTitle: 'hoge',
            },
        ],
    }
}

export default reducerWithInitialState(initialReduceWorksTopState)
    .case(actions.successInitInfo, (state: IWorksTopState, payload): IWorksTopState => ({
        ...state,
        worksTop: payload
    }))
    .build()