import * as React from 'react'
import QrReader from 'react-qr-reader'
import { Dispatch } from 'redux'
import * as actions from '../actions/tipping'
import { ITippingState } from '../reducers/tipping'

import * as Styled from '../styles/tipping'

export interface IProps extends ITippingState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    private qrScannerRef: any

    constructor(props: IProps) {
        super(props)
    }

    public onError = (e: any) => {
        this.props.dispatch(actions.faildLoadScanner())
    }

    public onLoadImage = () => (
        this.qrScannerRef ?
            this.refs.o
            :
            alert(this.qrScannerRef)
        
    )

    public onScan = (result: string) => (
        result ?
            this.props.dispatch(actions.requestGetTippingPerformance(result))
            :
            null
    )

    public onLoad = () => (
        this.props.dispatch(actions.successLoadScanner())
    )

    public renderLoader = () => (
        !this.props.tipping.isLoadScaner ?
            <p>Loading...</p>
            :
            null
    )

    public renderScaner = () => (
        !this.props.tipping.isLegacyMode ?
            <QrReader
                ref={(ref: any) => {this.qrScannerRef = ref}}
                onError={this.onError.bind(this,)}
                onImageLoad={this.onScan.bind(this,)}
                onLoad={this.onLoad.bind(this,)}
                onScan={this.onScan.bind(this,)}
                style={{ width: '80vw', height: '80vw' }}
                legacyMode={this.props.tipping.isLegacyMode}
            />
            :
            <button onClick={this.onLoadImage.bind(this,)}>イメージから読み込む</button>
    )

    public render() {
        return (
            <Styled.Section>
                {this.renderScaner()}
                {this.renderLoader()}
            </Styled.Section>
        )
    }
}