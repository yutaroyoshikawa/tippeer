import * as React from 'react'
import { Link } from 'react-router-dom'
import { ArtistCard } from './'

export interface IProps {
    worksId: number
}

type loadState = 'complete' | 'loading' | 'none'

export interface IState {
    artistId: string
    loadState: loadState
    price: number
    worksName: string
    worksThumbnail: string
}

export class WorksCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.setState({
            artistId: 'hoge',
            loadState: 'complete',
            price: 10,
            worksName: 'hoge', 
            worksThumbnail: 'hoge',
        })
    }

    public render() {
        return(
            <Link to={"/works/" + this.props.worksId}  >
                <article>
                    <p><img src={this.state.worksThumbnail} alt="worksThumbnail"/></p>
                    <h3>{this.state.worksName}</h3>
                    <Link to={'/artists/' + this.state.artistId}>
                        <ArtistCard artistId={this.state.artistId} />
                    </Link>
                    <p>{this.state.price}</p>
                </article>
            </Link>
        )
    }
}