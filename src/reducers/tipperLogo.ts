import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface ITipperLogo {
    url: string;
}

export interface ITipperLogoState {
    tipperLogo: ITipperLogo;
}

const initialReduceTipperLogoState: ITipperLogo = {
    url: '',
}

export default reducerWithInitialState(initialReduceTipperLogoState)
    .build()