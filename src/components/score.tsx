import { faStar } from '@fortawesome/free-solid-svg-icons';

import * as React from 'react'
import * as Styled from '../styles/components/score'

export interface IProps {
    size: number
}

export class Score extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderScore = () => (
        <Styled.ScoreBox>
            <Styled.ColorStar>
                <Styled.Star icon={faStar} tabIndex={this.props.size} />
                <Styled.Star icon={faStar} tabIndex={this.props.size} />
                <Styled.Star icon={faStar} tabIndex={this.props.size} />
                <Styled.Star icon={faStar} tabIndex={this.props.size} />
            </Styled.ColorStar>
            <Styled.MonoStar>
                <Styled.Star icon={faStar} tabIndex={this.props.size} />
            </Styled.MonoStar>
        </Styled.ScoreBox>
    )

    public render() {
        return(
            <div>
                {this.renderScore()}
            </div>
        )
    }
}