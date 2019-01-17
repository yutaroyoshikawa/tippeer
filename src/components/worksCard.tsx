import * as React from 'react'
import { Link } from 'react-router-dom'
import { ArtistCard, PriceCard } from './'

import nature from '../natureExample.jpeg'
import * as Styled from '../styles/components/worksCard'


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
            <Styled.Entire>
                <Link to={"/works/" + this.props.worksId} >
                    <p><Styled.WorksThumbnail src={nature} alt="worksThumbnail"/></p>
                </Link>
                <Styled.WorksInfo>
                    <Link to={"/works/" + this.props.worksId} >
                        <Styled.WorksName>{this.state.worksName}</Styled.WorksName>
                    </Link>
                    <Link to={'/artists/' + this.state.artistId} >
                        <ArtistCard artistId={this.state.artistId} size={40} style={'card'} nameHidden={false} color={'light'} link={true} />
                    </Link>
                    <Styled.Price><PriceCard type={'circle'} price={this.state.price} size={80} /></Styled.Price>
                </Styled.WorksInfo>
            </Styled.Entire>
        )
    }
}