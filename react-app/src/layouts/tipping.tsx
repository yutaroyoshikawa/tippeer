import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/globalMenu'
import { ArtistCard } from '../components'
// import * as actions from '../actions/tipping'
import { ITippingState } from '../reducers/tipping'

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
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                        <div onClick={this.setScreen.bind(this, 'scan')}>
                            <FontAwesomeIcon icon={faQrcode} style={{width: '80vw', height: '80vw'}}/>
                        </div>
                        <p style={{display: 'inline-block', width: '80%', fontSize: '30px'}}>タップしてQRコードを読み込む</p>
                    </div>
                )
            case 'scan' :
                return(
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
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
                    </div>
                )
            case 'result' :
                return(
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                        <ArtistCard artistId={'hoge'} size={80} style={'card'} nameHidden={false} />
                        <Link to={'/performance/' + this.props.tipping.performanceId}>
                            <div>
                                <p>{this.props.tipping.performanceStart}<span>-</span>{this.props.tipping.performanceFinish}</p>
                                <h3>{this.state.result}</h3>
                            </div>
                        </Link>
                        <div onClick={this.setScreen.bind(this, 'tipping')} style={{width: '100%', height: '200px', background: 'white', color: 'black'}}>Tap to Tipping</div>
                    </div>
                )
            case 'tipping' :
                return(
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                        <div onClick={this.setScreen.bind(this, 'thanks')} style={{width: '100%', height: '200px', background: 'white', color: 'black'}}>Tap to Tipping</div>
                        <form>
                            <input type="number"/>
                        </form>
                    </div>
                )
            case 'thanks' :
                return(
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}} onClick={this.setScreen.bind(this, 'top')}>
                        <h2>Thunk you</h2>
                    </div>
                )
        }
    }

    public render() {
        return(
            <div>
                <section style={{width: '100%', height: window.innerHeight - 100 + 'px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(rgb(255, 188, 247), rgb(255, 135, 161))', color: '#FFF'}}>
                    <p>
                        {this.state.error}
                    </p>
                    {this.renderState()}
                </section>
            </div>
        )
    }
}