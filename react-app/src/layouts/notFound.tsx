import * as React from 'react'

export class NotFound extends React.Component<{}, {}> {

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public render() {
        return(
            <section style={{display: 'flex', width: '100%', height: '91vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flexWrap: 'wrap'}}>
                <p style={{fontSize: '90px', color: 'rgb(128, 128, 128)', letterSpacing: '15px'}}>
                    404
                </p>
                <p style={{fontSize: '50px'}}>
                    not found
                </p>
            </section>
        )
    }
}