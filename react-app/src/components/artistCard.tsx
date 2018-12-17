import * as React from 'react'
import { Link } from 'react-router-dom'

import icon from '../natureicon.jpg'

export interface IProps {
    artistId: string
    size: number
    style: 'standalone' | 'card'
    nameHidden: boolean
}

export interface IState {
    artistName: string
    icon: string
}

export class ArtistCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            artistName: 'hoge',
            icon: 'hoge',
        })
    }

    public componentDidMount = () => {
        this.setState({
            artistName: 'hoge',
            icon: 'hoge',
        })
    }

    public render() {
        return(
            <article style={{width: '100%', textAlign: 'center', margin: '0px'}}>
                <Link to={"/artists/" + this.props.artistId} className={this.props.style === 'card' ? 'card': 'standalone'} >
                <figure style={{display: 'block', filter: 'drop-shadow(0 0 1px #555)'}} className={this.props.style === 'card' ? 'card-margin': 'standalone-margin'}><img src={icon} style={{width: this.props.size + 'px', height: this.props.size + 'px', borderRadius: this.props.size + 'px'}} alt="ArtistIcon"/></figure>
                {this.props.nameHidden ? null : <p style={{color: '#555', display: 'block'}}>{this.state.artistName}</p> }
                </Link>
            </article>
        )
    }
}