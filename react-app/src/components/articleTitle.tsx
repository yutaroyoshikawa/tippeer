import * as React from 'react'

export interface IProps {
    title: string
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <div style={{borderBottom: 'solid 2px #555', margin: '5px 0 20px 0', display: 'inline-block'}}>
                <h2 style={{margin: '0 -20px 0 10px', fontSize: '30px'}}>
                    {this.props.title}
                </h2>
            </div>
            
        )
    }
}