import * as React from 'react'
import { Dispatch } from 'redux'
import { ArticleTitle } from '../components'
import { IArtistDetailsState } from '../reducers/artistDetails'

export interface IProps extends IArtistDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            artistId: number
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public render() {
        return(
            <section>
                <ArticleTitle title={'最新のパフォーマンス'} />
            </section>
        )
    }
}