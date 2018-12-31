import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from '../styles/components/performanceCard'

import nature from '../natureExample.jpeg'

export interface IProps {
    performanceId: number
}

type loadState = 'complete' | 'loading' | 'none'

export interface IState {
    address: string
    discription: string
    finish: string
    loadState: loadState
    performanceTitle: string
    placeId: number
    placeName: string
    postalCode: string
    start: string
}

export class PerformanceCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = ({
            address: '',
            discription: '',
            finish: '',
            loadState: 'none',
            performanceTitle: '',
            placeId: 0,
            placeName: '',
            postalCode: '',
            start: '',
        })
    }

    public componentDidMount() {
        this.setState({
            address: 'hogehoge',
            discription: 'hogehugapiyo',
            finish: '2018-12-01-02:00',
            loadState: 'complete',
            performanceTitle: 'hoge',
            placeId: 10,
            placeName: 'hoge',
            postalCode: '123-4567',
            start: '2018-12-01-01:00',
        })
    }

    public render() {
        return(
            <Styled.Entire>
                <Link to={"/performances/" + this.props.performanceId}  >
                    <figure><Styled.PerformanceThumbnail src={nature} alt="PerformanceThumbnail" /></figure>
                </Link>
                <Styled.PerformanceInfo>
                    <Link to={"/performances/" + this.props.performanceId}  >
                        <Styled.PerformanceName>{this.state.performanceTitle}</Styled.PerformanceName>
                        <Styled.Start>{this.state.start}</Styled.Start>
                        <Styled.Finish>{this.state.finish}</Styled.Finish>
                    </Link>
                    <Link to={"/places/" + this.state.placeId}>
                        <Styled.PlaceInfo>{this.state.placeName}</Styled.PlaceInfo>
                    </Link>        
                </Styled.PerformanceInfo> 
            </Styled.Entire>
        )
    }
}