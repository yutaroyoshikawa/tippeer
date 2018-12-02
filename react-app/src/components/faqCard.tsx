import * as React from 'react'

export interface IProps {
    question: string
    answer: string
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <article style={{width: '90%', boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.4)', margin: '30px auto', padding: '10px', wordBreak: 'break-all'}}>
                <h3 style={{display: 'inline-block', fontSize: '30px', color: 'rgb(250, 116, 116)', fontWeight: 'normal', marginRight: '5px'}}>Q.</h3>
                <p style={{display: 'inline-block', fontSize: '16px', color: '#444'}}>{this.props.question}</p>
                <hr style={{border: '1px solid #ddd', margin: '12px auto 8px auto', width: '70%'}}/>
                <h3 style={{display: 'inline-block', fontSize: '30px', color: 'rgb(87, 190, 72)', fontWeight: 'normal', marginRight: '5px'}}>A.</h3>
                <p style={{display: 'inline-block', fontSize: '16px', color: '#444'}}>{this.props.answer}</p>
            </article>
        )
    }
}