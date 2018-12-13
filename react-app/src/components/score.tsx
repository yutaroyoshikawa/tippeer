import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

export interface IProps {
    size: number
}

export class Score extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderScore = () => (
        <div style={{display: 'flex', filter: 'drop-shadow(0 0 1px #555)'}}>
            <div style={{color: 'rgb(255, 236, 0)'}}>
                <FontAwesomeIcon icon={faStar} style={{width: this.props.size, height: this.props.size, paddingRight: '5px'}} />
                <FontAwesomeIcon icon={faStar} style={{width: this.props.size, height: this.props.size, paddingRight: '5px'}} />
                <FontAwesomeIcon icon={faStar} style={{width: this.props.size, height: this.props.size, paddingRight: '5px'}} />
                <FontAwesomeIcon icon={faStar} style={{width: this.props.size, height: this.props.size, paddingRight: '5px'}} />
            </div>
            <div style={{color: 'rgb(190, 190, 190)'}}>
                <FontAwesomeIcon icon={faStar} style={{width: this.props.size, height: this.props.size, paddingRight: '5px'}} />
            </div>
        </div>
    )

    public render() {
        return(
            <div>
                {this.renderScore()}
            </div>
        )
    }
}