import * as React from 'react'
import paymentRequest, { PaymentRequestInterface } from 'react-payment-request-api'
import * as Styled from '../styles/components/priceCard'

interface IProps {
    type: 'circle' | 'ellipse'
    price: number
    size: number
}

const Button: React.StatelessComponent<PaymentRequestInterface & IProps> = ({
    show, isSupported, price, size, type,
  }) =>
    isSupported ? 
        type === 'circle' ?
            <Styled.Circle onClick={show} value={size}>¥{price}</Styled.Circle>
            :
            <Styled.Ellipse onClick={show} value={size}>¥{price}</Styled.Ellipse>
        :
        <span>Payment request not supported</span>

  export const PriceCard = paymentRequest<IProps>()(Button);