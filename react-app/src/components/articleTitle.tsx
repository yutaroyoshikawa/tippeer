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
                    <h2 style={{margin: '0 -20px 0 10px', fontSize: '30px'}}>
                        {this.props.title}
                    </h2>
                </Styled.Entire>
            </div>
        )
    }
}