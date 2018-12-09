import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import createHistory from 'history/createBrowserHistory';
import * as React from 'react'

export default class extends React.Component<{}, {}> {
    public render() {
        return(
        <button onClick={createHistory().goBack.bind(this,)}>
            <FontAwesomeIcon icon={faChevronLeft} style={{width: '30px', height: '30px'}} />
        </button>
        )
    }
}