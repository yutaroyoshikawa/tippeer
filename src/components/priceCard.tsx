// import PaymentRequest from 'appr-wrapper'
import * as React from 'react'
import * as Styled from '../styles/components/priceCard'

const merchantId = 'merchant.com.agektmr.payment';

const methods = [{
    data: {
        supportedNetworks: [
            'visa', 'mastercard', 'amex', 'discover',
            'diners', 'jcb', 'unionpay'
        ]
    },
    supportedMethods: 'basic-card',
}, {
    data: {
        countryCode: 'JP',
        currencyCode: 'JPY',
        merchantCapabilities: ['supports3DS'],
        merchantIdentifier: merchantId,
        supportedNetworks: [
            'amex', 'discover', 'masterCard', 'visa', 'jcb', 'privateLabel'
        ],
        version: 3,
    },
    supportedMethods: 'https://apple.com/apple-pay',
}, {
    supportedMethods: 'https://bobpay.xyz/pay'
}];

const details = {
    displayItems: [{
        amount: { currency: 'JPY', value: '100' },
        label: 'Original donation amount',
    }],
    shippingOptions: [{
        amount: { currency: 'JPY', value: '100' },
        id: 'standard',
        label: 'Standard shipping',
    }, {
        amount: { currency: 'JPY', value: '100' },
        id: 'express',
        label: 'Express shipping',
    }],
    total: {
        amount: { currency: 'JPY', value: '100' },
        label: 'Total due',

    }
};

const applePay =
    new PaymentRequest(methods, details).canMakePayment ?
        new PaymentRequest(methods, details)
        :
        null



export interface IProps {
    price: number
    type: 'circle' | 'ellipse'
    size: number
}

export class PriceCard extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public hundleClick = () => (
        applePay ?
            applePay.show().then(result => (
                result.complete('success')
            ))
            :
            null
    )

    public renderPriceCard = () => (
        this.props.type === 'circle' ?
            <Styled.Circle value={this.props.size}>￥{this.props.price}</Styled.Circle>
            :
            <Styled.Ellipse value={this.props.size}>￥{this.props.price}</Styled.Ellipse>
    )

    public render() {
        return (
            <div onClick={this.hundleClick}>
                {this.renderPriceCard()}
            </div>
        )
    }
}