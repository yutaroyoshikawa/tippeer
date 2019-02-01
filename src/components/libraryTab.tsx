import { faFilm, faImage, faMusic } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { Dispatch } from 'redux'
import { setTab } from '../actions/library'
import { ILibraryState, ITab } from '../reducers/library'
import * as Styled from '../styles/components/libraryTab'

export interface IProps extends ILibraryState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public setTabState = (state: ITab) => (
        this.props.dispatch(setTab(state))
    )

    public render() {
        return (
            <Styled.TabSection>
                <Styled.LeftButton onClick={this.setTabState.bind(null, 'music')}>
                    <Styled.TabIcon icon={faMusic} />
                </Styled.LeftButton>
                <Styled.CenterButton onClick={this.setTabState.bind(null, 'movie')}>
                    <Styled.TabIcon icon={faFilm} />
                </Styled.CenterButton>
                <Styled.RightButton onClick={this.setTabState.bind(null, 'image')}>
                    <Styled.TabIcon icon={faImage} />
                </Styled.RightButton>
            </Styled.TabSection>
        )
    }
}