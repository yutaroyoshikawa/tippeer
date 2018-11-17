import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

export default class extends React.Component<{}, {}> {
    public render() {
        return(
            <li>
                <FontAwesomeIcon icon={faChevronLeft} style={{width: '50px', height: '50px', cursor: 'pointer'}} />
            </li>
        )
    }
}