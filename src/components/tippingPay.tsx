import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { Dispatch } from 'redux'
import { isInt } from 'validator'
import * as actions from '../actions/tipping'
import { ITippingState } from '../reducers/tipping'
import * as Styled from '../styles/tipping'

import tipperLogo from 'src/TipperIcon.svg'

export interface IProps extends ITippingState {
    dispatch: Dispatch<any>
}

let samplingY: number[] = []

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount = () => {
        window.addEventListener('touchmove', e => {
            e.preventDefault()
        }, {passive: false})
        this.props.dispatch(actions.initializePaying())
        samplingY = []
    }

    public componentWillUnmount = () => {
        window.removeEventListener('touchmove', e => {
            e.preventDefault()
        })
    }

    public setComponentState = () => (
        this.props.dispatch(actions.setComponent('thanks'))
    )

    public setTippingValue = (e: React.ChangeEvent<HTMLInputElement>) => (
        e.target.value ?
            isInt(e.target.value) ?
                this.props.dispatch(
                    actions.setTippingValue(Number(e.target.value) >= 90000 ?
                        90000
                        :
                        Number(e.target.value)
                    )
                )
                :
                null
            :
            this.props.dispatch(
                actions.setTippingValue(0)
            )
    )

    public addTippingValue = (addValue: number) => (
        this.props.dispatch(
            actions.setTippingValue(
                this.props.tipping.tippingValue + addValue >= 90000 ?
                    90000
                    :
                    this.props.tipping.tippingValue + addValue
            )
        )
    )

    public onSubmit = (e: React.FormEvent<HTMLFontElement>) => {
        e.preventDefault()
    }

    public hundleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        if(e.touches[0].pageY <= 290){
            samplingY[this.props.tipping.paying.samplingCount] = e.touches[0].pageY
            this.props.dispatch(actions.setYIndex(e.touches[0].pageY))
        }   
    }

    public hundleTouchCancel = (e: React.TouchEvent<HTMLDivElement>) => {
        const preY = this.props.tipping.paying.samplingCount === 2 ?
                        9
                        :
                        this.props.tipping.paying.samplingCount === 1 ?
                            8
                            :
                            this.props.tipping.paying.samplingCount === 0 ?
                                7
                                :
                                this.props.tipping.paying.samplingCount - 3

        this.props.dispatch(actions.setIsBack(
            samplingY[preY] - samplingY[this.props.tipping.paying.samplingCount === 0 ? 9 : this.props.tipping.paying.samplingCount - 1] > 60 ?
                false
                :
                true
        ))
    }

    public render() {
        return (
            <Styled.Section>
                <Motion style={{y: spring(this.props.tipping.paying.isBack ? this.props.tipping.paying.yIndex : -10)}}>
                    {(value: any) =>
                        <div>
                            <Styled.PayIconSection
                                itemProp={value.y}
                                onTouchMove={this.hundleTouch.bind(this,)}
                                onTouchEnd={this.hundleTouchCancel.bind(this,)}
                            >
                                <Styled.PayIcon src={tipperLogo} />
                            </Styled.PayIconSection>
                        </div>
                    }
                </Motion>
                <Styled.InputSection>
                    <div>
                        <form onSubmit={this.onSubmit.bind(this,)}>
                            <Styled.PayValueLabel>Tipping Value</Styled.PayValueLabel>
                            <Styled.PayValueInput
                                type="tel"
                                value={this.props.tipping.tippingValue.toString()}
                                onChange={this.setTippingValue.bind(this,)}
                                autoFocus={false}
                                autoComplete="off"
                                min="0"
                                max="90000"
                                required={true}
                                inputMode="number"
                            />
                        </form>
                        <Styled.PayAddButtonSection>
                            <Styled.PayAddButton onClick={this.addTippingValue.bind(this, 10000)}>¥10,000</Styled.PayAddButton>
                            <Styled.PayMiddleAddButton onClick={this.addTippingValue.bind(this, 1000)}>¥1,000</Styled.PayMiddleAddButton>
                            <Styled.PayAddButton onClick={this.addTippingValue.bind(this, 100)}>¥100</Styled.PayAddButton>
                        </Styled.PayAddButtonSection>
                    </div>
                </Styled.InputSection>
            </Styled.Section>
        )
    }
}