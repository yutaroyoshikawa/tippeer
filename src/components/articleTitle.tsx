import * as React from 'react'
import * as Styled from '../styles/components/articleTitle'

export interface IProps {
    title: string
    color: 'dark' | 'light'
}

export class ArticleTitle extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <div>
                <Styled.Entire color={this.props.color}>
                    <Styled.Title>
                        {this.props.title}
                    </Styled.Title>
                </Styled.Entire>
            </div>
        )
    }
}