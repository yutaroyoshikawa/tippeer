import * as QRCode from 'qrcode.react'
import * as React from 'react'
import { Dispatch } from 'redux'
import { IManageState } from '../reducers/manage'
import { ArtistCard } from './'
// import * as Styled from '../styles/tipping'

import TipperLogo from 'src/TipperLogo.svg'

export interface IProps extends IManageState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: 'calc(100vh - 100px)' }}>
                <div>
                    <h2 style={{ textAlign: 'center', fontSize: '33px', letterSpacing: '3px', fontWeight: 'normal' }}>
                        <span style={{marginRight: '6px'}}><img style={{width: '152px'}} src={TipperLogo} /></span>で投げ銭
                    </h2>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <QRCode
                            value={'http://192.168.0.10:3000/tipping/hoge'}
                            size={300}
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ fontSize: '35px'}}>
                            <ArtistCard
                                artistId={'hoge'}
                                size={100}
                                style={'card'}
                                nameHidden={false}
                                color={'light'}
                                link={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}