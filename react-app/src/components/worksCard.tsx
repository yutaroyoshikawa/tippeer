import * as React from 'react'
import { Link } from 'react-router-dom'
import { ArtistCard } from './'

import nature from '../natureExample.jpeg'


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

        this.state = ({
            artistId: '',
            loadState: 'none',
            price: 0,
            worksName: '', 
            worksThumbnail: '',
        })
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
            <article style={{backgroundColor: 'white', padding: '30px 20px 50px 20px', filter: 'drop-shadow(0 0 2px #555)', margin: '5px 20px', width: '200px', marginBottom: '75px'}}>
                <Link to={"/works/" + this.props.worksId}  >
                <p><img src={nature} style={{width: '100%'}} alt="worksThumbnail"/></p>
                <h3 style={{fontWeight: 'normal', fontSize: '20px', color: '#666', marginBottom: '20px', textAlign: 'center'}}>{this.state.worksName}</h3>
                </Link>
                <Link to={'/artists/' + this.state.artistId} style={{}}>
                    <ArtistCard artistId={this.state.artistId} size={40} style={'card'} nameHidden={false} color={'light'} link={true} />
                </Link>
                <p style={{display: 'flex', width: '80px', height: '80px', borderRadius: '100px', backgroundColor: 'rgb(159,224,192)', justifyContent: 'center', alignItems: 'center', color: '#333', position: 'absolute', transform: 'translateX(50%)'}}>￥{this.state.price}</p>
            </article>
        )
    }
}