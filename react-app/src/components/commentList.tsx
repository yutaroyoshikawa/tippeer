import * as React from 'react'
import { IPerformanceComments, IWorksComments } from '../reducers/worksDetails'
import { ArtistCard, Score } from './'


export interface IProps {
    type: 'performance' | 'works' | 'standalone'
    initialWorksComments: IWorksComments[] | null
    initialPerformanceComments: IPerformanceComments[] | null
    dark: boolean
}

export class CommentList extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public renderComments = () => (
        this.props.type === 'works' ?
            this.props.initialWorksComments !== null ?
                this.props.initialWorksComments.map((data, key) => (
                    <div key={key}>
                        <li style={{padding: '10px 0'}}>
                            <ul style={{listStyle: 'none', display: 'flex'}}>
                                <li>{<ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} />}</li>
                                <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                    <li><Score size={20} /></li>
                                    <li>{data.content}</li>
                                    <div style={{display: 'flex'}}>
                                        <li>{data.userId}</li>
                                        <li>{data.postDate}</li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        {
                            this.props.initialWorksComments !== null ?
                                key !== this.props.initialWorksComments.length - 1 ?
                                    this.props.dark ?
                                        <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))', height: '1px'}} />
                                        :
                                        <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'radial-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 255))', height: '1px'}} />
                                : null
                            : null
                        }
                    </div>
                ))
            : null
        :
        this.props.initialPerformanceComments !== null ?
            this.props.initialPerformanceComments.map((data, key) => (
                <div key={key}>
                    <li style={{padding: '10px 0'}}>
                        <ul style={{listStyle: 'none', display: 'flex'}}>
                            <li>{<ArtistCard artistId={data.userId} style={'standalone'} size={50} nameHidden={true} />}</li>
                            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                                <li>{data.content}</li>
                                <div style={{display: 'flex'}}>
                                    <li style={{marginRight: '20px'}}>{data.userId}</li>
                                    <li>{data.postDate}</li>
                                </div>
                            </div>
                        </ul>
                    </li>
                    {
                        this.props.initialPerformanceComments !== null ?
                            key !== this.props.initialPerformanceComments.length - 1 ?
                            this.props.dark ?
                            <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))', height: '1px'}} />
                            :
                            <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'radial-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 255))', height: '1px'}} />
                            : null
                        : null
                    }
                </div>
            ))
        : null
    )

    public render() {
        return(
            <ul style={{listStyle: 'none',width: '100%'}}>
                {this.renderComments()}
            </ul>
        )
    }
}