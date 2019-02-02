import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { Dispatch } from 'redux'
import { setMobileMenuState } from '../actions/mobileMenu'
import * as actions from '../actions/tipping'
import { TippingPay, TippingPerformance, TippingResult, TippingScan, TippingThanks, TippingTop } from '../components'
import { IGlobalMenuState } from '../reducers/globalMenu'
import { ITippingState } from '../reducers/tipping'
import * as Styled from '../styles/tipping'

export interface IProps extends ITippingState, IGlobalMenuState {
    dispatch: Dispatch<any>
    match: {
        params: {
            tippingToken: string
        }
    }
}

export type IScreen = 'top' | 'scan' | 'result' | 'tipping' | 'thanks'

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.title = 'TIPPEER | Tipping'
        this.props.dispatch(setMobileMenuState('tipping'))
        if (this.props.match.params.tippingToken) {
            this.props.dispatch(actions.requestGetTippingPerformance(this.props.match.params.tippingToken))
        }
    }

    public componentWillUnmount() {
        document.title = 'TIPPEER'
    }

    public renderState = (): any => {
        switch (this.props.tipping.componentState) {
            case 'top':
                return (
                    <TippingTop />
                )
            case 'scan':
                return (
                    <TippingScan />
                )
            case 'result':
                return (
                    <TippingResult />
                )
            case 'tipping':
                return (
                    <TippingPay />
                )
            case 'thanks':
                return (
                    <TippingThanks />
                )
        }
    }

    public checkDevice = () => (
        this.props.globalMenu.agent === 'tablet' || this.props.globalMenu.agent === 'mobile' ?
            <div>
                <Styled.ResultPerformance>
                    <TippingPerformance />
                </Styled.ResultPerformance>
                <Motion style={{y: spring(this.props.tipping.componentState === 'result' ? 30 : 100)}}>
                    {(value: any) =>
                        <Styled.Entire itemProp={value.y}>
                            {this.renderState()}
                        </Styled.Entire>
                    }
                </Motion>
            </div>

            :
            <Styled.Entire>
                投げ銭はモバイル端末またはタブレット端末からのみご利用いただけます。
            </Styled.Entire>
    )

    public render() {
        return (
            <div>
                <Styled.GlobalStyle />
                <div>
                    {this.checkDevice()}
                </div>
            </div>
        )
    }
}