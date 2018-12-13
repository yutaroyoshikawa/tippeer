import * as React from 'react'
import { IComments } from '../reducers/worksDetails'
import { ArtistCard, Score } from './'


export interface IProps {
    type: 'performace' | 'works' | 'standalone'
    initialComments: IComments[]
}

export class CommentList extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderComments = () => (
        this.props.initialComments.map((data, key) => (
            <div key={key}>
                <li style={{padding: '10px 0'}}>
                    <ul style={{listStyle: 'none', display: 'flex'}}>
                        <li>{<ArtistCard artistId={data.userIcon} style={'standalone'} size={50} />}</li>
                        <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            <li><Score size={20} /></li>
                            <li>{data.content}</li>
                            <li>{data.postDate}</li>
                        </div>
                    </ul>
                </li>
                {key !== this.props.initialComments.length - 1 ? <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))', height: '1px'}} /> : null}
            </div>
        ))
    )

    public render() {
        return(
            <ul style={{listStyle: 'none'}}>
                {this.renderComments()}
            </ul>
        )
    }
}