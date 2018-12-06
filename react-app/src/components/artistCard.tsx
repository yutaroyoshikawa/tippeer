import * as React from 'react'
import { Link } from 'react-router-dom'

export interface IProps {
    artistId: string
}

export interface IState {
    artistName: string
    icon: string
}

export class ArtistCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        this.setState({
            artistName: 'hoge',
            icon: 'hoge',
        })
    }

    public render() {
        return(
            <Link to={"/artists/" + this.props.artistId}  >
                <article>
                    <figure><img src={this.state.icon} alt="ArtistIcon"/></figure>
                    <p>{this.state.artistName}</p>
                </article>
            </Link>
        )
    }
}