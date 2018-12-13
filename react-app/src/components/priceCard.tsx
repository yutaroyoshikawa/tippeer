import * as React from 'react'

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
        <button style={{color: '#FFF', display: 'inline-block', background: 'rgb(63, 213, 180)', borderRadius: '100%', padding: '25px', fontSize: this.props.size, textAlign: 'center', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)'}}>￥{this.props.price}</button>
        :
        <button style={{color: '#FFF', display: 'inline-block', background: 'rgb(63, 213, 180)', borderRadius: '55px', padding: '3px 25px', fontSize: this.props.size, textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)'}}>￥{this.props.price}</button>
    )

    public render() {
        return(
            <div>
                {this.renderPriceCard()}
            </div>
        )
    }
}