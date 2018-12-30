import * as React from 'react'
import * as Styled from '../styles/notFound'


export class NotFound extends React.Component<{}, {}> {

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public render() {
        return(
            <Styled.Entire>
                <Styled.Top>
                    404
                </Styled.Top>
                <Styled.Bottom>
                    not found
                </Styled.Bottom>
            </Styled.Entire>
        )
    }
}