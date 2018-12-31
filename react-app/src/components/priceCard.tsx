import * as React from 'react'
import * as Styled from '../styles/components/priceCard'

export interface IProps {
    price: number
    type: 'circle' | 'ellipse'
    size: number
}

export class PriceCard extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderPriceCard = () => (
        this.props.type === 'circle' ? 
        <Styled.Circle value={this.props.size}>￥{this.props.price}</Styled.Circle>
        :
        <Styled.Ellipse value={this.props.size}>￥{this.props.price}</Styled.Ellipse>
    )

    public render() {
        return(
            <div>
                {this.renderPriceCard()}
            </div>
        )
    }
}