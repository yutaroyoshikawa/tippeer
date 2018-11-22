import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/WorksStore'

interface IWorksData {
    id: number;
    artistName: string;
    artistIcon: string;
    worksName: string;
    thumbnail: string;
}

export interface IWorksState {
    worksDatas: IWorksData[];
}

const initialReduceState: IWorksState = {
    worksDatas: [{
        artistIcon: "/imgs/hoge.jpg",
        artistName: "Tailor Otwel",
        id: 1,
        thumbnail: "/imgs/piyo.jpg",
        worksName: "Cosmetic surgery",
    }],
}

const pullArtistIcon = (worksDatas: IWorksData[], id: number): IWorksData[] => (
    worksDatas.map((works) => {
        if(works.id === id){
            works.artistIcon = "";
        }
        return works;
    })
)


export default reducerWithInitialState(initialReduceState)
    .case(actions.setArtistIcon, (state: IWorksState, payload) => ({
        ...state,
        worksDatas: state.worksDatas.concat(
            pullArtistIcon(state.worksDatas, payload)
        )
    }))
    .build();