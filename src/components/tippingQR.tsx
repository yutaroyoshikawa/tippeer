import * as QRCode from 'qrcode.react'
import * as React from 'react'
import { Dispatch } from 'redux'
import { hideGlobalMenu, showGlobalMenu } from '../actions/globalMenu'
import { hideMobileMenu, showMobileMenu } from '../actions/mobileMenu'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { IManageState } from '../reducers/manage'
import { IManageQRState } from '../reducers/manageQR'
import * as Styled from '../styles/components/tippingQR'
import { ArtistCard, CommentList } from './'

import TipperLogo from 'src/TipperLogo.svg'

export interface IProps extends IManageState, IGlobalMenuState, IManageQRState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        this.props.dispatch(hideGlobalMenu())
        this.props.dispatch(hideMobileMenu())
    }

    public componentWillUnmount() {
        this.props.dispatch(showGlobalMenu())
        this.props.dispatch(showMobileMenu())
    }

    public renderTippingSum = () => (
        <Styled.TippingSumSection>
            <Styled.TippingSumInnerBlock>
                <Styled.TippingSumTitle>投げ銭合計</Styled.TippingSumTitle>
                <Styled.TippingSum
                    thousandSeparator={true}
                    prefix="¥"
                    value={this.props.manageQR.performance.tippingSum}
                    readOnly={true}
                />
            </Styled.TippingSumInnerBlock>
        </Styled.TippingSumSection>
    )

    public render() {
        return (
            <Styled.Entire title={this.props.manageQR.performance.thumbnail}>
                <Styled.LeftSection>
                    <Styled.TippingMessage>
                        <Styled.LogoSpace>
                            <Styled.TipperLogo
                                src={TipperLogo}
                            />
                        </Styled.LogoSpace>
                        で投げ銭
                    </Styled.TippingMessage>
                    <Styled.QR>
                        <Styled.QRSection>
                            <QRCode
                                value={'https://tippeer.app/tipping/' + this.props.manageQR.performance.tippingHash}
                                size={window.innerHeight * 0.55}
                            />
                        </Styled.QRSection>
                    </Styled.QR>
                    <Styled.Artist>
                        <div>
                            <ArtistCard
                                artistId={'hoge'}
                                size={this.props.globalMenu.agent === 'undefined' ? 100 : 70}
                                style={'card'}
                                nameHidden={false}
                                color={'dark'}
                                link={false}
                            />
                        </div>
                    </Styled.Artist>
                </Styled.LeftSection>
                <Styled.RightSection>
                    {this.renderTippingSum()}
                    <Styled.CommnetSection>
                        <CommentList
                            dark={true}
                            initialPerformanceComments={this.props.manageQR.performance.comments}
                            initialWorksComments={null}
                            type={'performance'}
                        />
                    </Styled.CommnetSection>
                </Styled.RightSection>
            </Styled.Entire>
        )
    }
}