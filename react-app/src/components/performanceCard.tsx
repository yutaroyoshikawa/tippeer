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
            <article style={{backgroundColor: 'white', padding: '30px 20px', filter: 'drop-shadow(0 0 2px #555)', margin: '5px 10px', width: '200px'}}>
                <Link to={"/performance/" + this.props.performanceId}  >
                    <div style={{color: '#999'}}>
                        <h3 style={{fontWeight: 'normal', fontSize: '30px', color: '#666', marginBottom: '20px'}}>{this.state.performanceTitle}</h3>
                        <p style={{fontSize: '12px'}}>start<time>{this.state.start}</time></p>
                        <p style={{fontSize: '12px'}}>finish<time>{this.state.finish}</time></p>
                        <p style={{margin: '10px 0'}}>{this.state.discription}</p>
                    </div>  
                </Link>
                <Link to={"/places/" + this.state.placeId}>
                    <div>
                        <p style={{fontSize: '25px', color: '#666'}}>{this.state.placeName}</p>
                        <p style={{color: '#999', fontSize: '12px'}}>〒{this.state.postalCode}</p>
                        <p style={{color: '#999', fontSize: '12px'}}>{this.state.address}</p>
                    </div>
                </Link>                
            </article>
        )
    }
}