import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import { ArtistCard } from '../components'
// import * as actions from '../actions/tipping'
import { ITippingState } from '../reducers/tipping'

import * as Styled from '../styles/tipping'

export interface IProps extends ITippingState {
    dispatch: Dispatch<any>
}

type Iscreen = 'top' | 'scan' | 'result' | 'tipping' | 'thanks'

interface IState {
    screen: Iscreen
    error: string
    legacyMode: boolean
    scan: boolean
    result: string
    load: boolean
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        
        this.state={
            error: '',
            legacyMode: false,
            load: false,
            result: '',
            scan: false,
            screen: 'top',
        }
    }

    public componentDidMount() {
        this.props.dispatch(setMobileMenuState({tabState: 'tipping'}))
        document.body.className = 'normal'
    }

    public onError = (e: any) => {
        this.setState({
            error: e.message,
            legacyMode: true,
        })
        alert('カメラの使用ができません')
    }

    public onScan = (e: any) => (
        e !== null ?
        this.setState({
            result: e,
            scan: true,
            screen: 'result',
        })
        :
        null
    )
    public onLoad = () => (
        this.setState({
            load: true,
        })
    )

    public setScreen = (data: Iscreen) => (
        this.setState({
            screen: data
        })
    )

    public renderState = (): any => {
        switch(this.state.screen){
            case 'top' :
                return(
                    <Styled.Section>
                        <div onClick={this.setScreen.bind(this, 'scan')}>
                            <Styled.QrCode icon={faQrcode} />
                        </div>
                        <Styled.QrDesctiption>タップしてQRコードを読み込む</Styled.QrDesctiption>
                    </Styled.Section>
                )
            case 'scan' :
                return(
                    <Styled.Section>
                        {!this.state.legacyMode ?
                            <QrReader
                                onError={this.onError.bind(this,)}
                                onImageLoad={this.onScan.bind(this,)}
                                onLoad={this.onLoad.bind(this,)}
                                onScan={this.onScan.bind(this,)}
                                style={{width: '80vw', height: '80vw'}}
                                legacyMode={this.state.legacyMode}
                            />
                        :
                        <form>
                            <input type="file"/>
                        </form>
                        }
                        {
                            !this.state.load ?
                            <p>Loading...</p>
                            :
                            null
                        }
                        <p>
                            {this.state.result}
                        </p>
                    </Styled.Section>
                )
            case 'result' :
                return(
                    <Styled.Section>
                        <ArtistCard artistId={'hoge'} size={80} style={'card'} nameHidden={false} />
                        <Link to={'/performance/' + this.props.tipping.performanceId}>
                            <div>
                                <p>{this.props.tipping.performanceStart}<span>-</span>{this.props.tipping.performanceFinish}</p>
                                <h3>{this.state.result}</h3>
                            </div>
                        </Link>
                        <Styled.ToTipping>Tap to Tipping</Styled.ToTipping>
                    </Styled.Section>
                )
            case 'tipping' :
                return(
                    <Styled.Section>
                        <Styled.ToTipping onClick={this.setScreen.bind(this, 'thanks')} >Tap to Tipping</Styled.ToTipping>
                        <form>
                            <input type="number"/>
                        </form>
                    </Styled.Section>
                )
            case 'thanks' :
                return(
                    <Styled.Section onClick={this.setScreen.bind(this, 'top')}>
                        <h2>Thunk you</h2>
                    </Styled.Section>
                )
        }
    }

    public render() {
        return(
            <div>
                <Styled.Entire>
                    <p>
                        {this.state.error}
                    </p>
                    {this.renderState()}
                </Styled.Entire>
            </div>
        )
    }
}