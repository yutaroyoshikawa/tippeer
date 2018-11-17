import { reducerWithInitialState } from 'typescript-fsa-reducers'

interface ITipperLogo {
    url: string;
}

export interface ITipperLogoState {
    tipperLogo: ITipperLogo[];
}

const initialReduceUserMenuState: ITipperLogoState = {
    tipperLogo: [
        {
            url: '',
        }
    ]
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .build()