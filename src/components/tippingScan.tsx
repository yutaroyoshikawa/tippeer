import jsQR from 'jsqr'
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
    constructor(props: IProps) {
        super(props)
    }

    public onError = (e: any) => {
        this.props.dispatch(actions.faildLoadScanner())
    }

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

    public hundleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        const image = new Image()
        let data: Uint8ClampedArray = new Uint8ClampedArray()
        const getImageSize = () => {
            const width = image.naturalWidth
            const height = image.naturalHeight
            const result = jsQR(data, width, height)
            if(result){
                this.props.dispatch(actions.successScanQR(result.data))
            }
        }
        if (files && files[0]) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if(reader.result && files && typeof reader.result === 'string'){
                    image.src = reader.result.toString()
                    
                }else{
                    data = new Uint8ClampedArray(reader.result as any)
                }
            }
            reader.readAsDataURL(files[0])
            reader.readAsArrayBuffer(files[0])
            image.onloadend = getImageSize
        }
        e.target.value = ''
    }

    public renderScaner = () => (
        !this.props.tipping.isLegacyMode ?
            <QrReader
                onError={this.onError}
                onImageLoad={this.onScan}
                onLoad={this.onLoad}
                onScan={this.onScan}
                style={{ width: '80vw', height: '80vw' }}
                legacyMode={this.props.tipping.isLegacyMode}
            />
            :
            <label style={{ cursor: 'pointer' }}>
                        <div style={{ padding: '5px 0', width: '100%', textAlign: 'center', border: 'solid 1px #555', borderRadius: '10px', cursor: 'pointer' }}>データを指定</div>
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept='image/*'
                    onChange={this.hundleChangeInput}
                />
            </label>
    )

    public render() {
        return (
            <Styled.Section>
                {this.renderScaner()}
                {/* {this.renderLoader()} */}
                <p>対応していないクライアントです。ブラウザ版をご使用ください。</p>
            </Styled.Section>
        )
    }
}