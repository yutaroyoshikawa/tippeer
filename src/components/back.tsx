import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import createHistory from 'history/createBrowserHistory'
import * as React from 'react'

import * as Styled from '../styles/components/back'

export default class extends React.Component<{}, {}> {
    public render() {
        return(
        <button onClick={createHistory().goBack.bind(this,)}>
            <Styled.Icon icon={faChevronLeft} />
        </button>
        )
    }
}