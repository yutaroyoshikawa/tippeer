import * as React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to={"/performance/" + this.props.performanceId}  >
                <article>
                    <h3>{this.state.performanceTitle}</h3>
                    <p>start<time>{this.state.start}</time></p>
                    <p>finish<time>{this.state.finish}</time></p>
                    <p>{this.state.discription}</p>
                    <Link to={"/places/" + this.state.placeId}>
                        <p>{this.state.placeName}</p>
                        <p>〒{this.state.postalCode}</p>
                        <p>{this.state.address}</p>
                    </Link>
                </article>
            </Link>
        )
    }
}