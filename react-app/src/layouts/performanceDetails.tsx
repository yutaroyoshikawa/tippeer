import * as React from 'react'
import { Dispatch } from 'redux'
import { ArticleTitle, ArtistCard, CommentBox, CommentList, DistanceCard, GoogleMap } from '../components'
import { IPerformanceDetailsState } from '../reducers/performaceDetails'

export interface IProps extends IPerformanceDetailsState {
    dispatch: Dispatch<any>
    match: {
        params: {
            performancesId: number
        }
    }
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.body.className = 'normal'
    }

    public render() {
        return(
            <section>
                <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div style={{padding: '50px 100px'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{marginRight: '50px'}}>
                                <ArticleTitle title={this.props.performanceDetails.performanceTitle} />
                            </div>
                            <p>{this.props.performanceDetails.start}</p>
                            <p><span style={{display: 'inline-block', margin: '0 10px'}}>-</span></p>
                            <p>{this.props.performanceDetails.finish}</p>
                        </div>
                        <p style={{display: 'inline-block', width: '800px'}}>{this.props.performanceDetails.discription}</p>
                    </div>
                    <div style={{width: '100%', height: '200px', background: 'url('+ this.props.performanceDetails.thumbnail +') no-repeat center', backgroundSize: 'cover', marginBottom: '300px'}}>
                        <div style={{position: 'relative', top: '100px', filter: 'drop-shadow(0 0 2px #555)'}}>
                            <ArtistCard artistId={this.props.performanceDetails.artistId} size={200} style={'standalone'} nameHidden={true} />
                        </div>
                    </div>
                </div>
                
                <div>
                    <GoogleMap placeId={this.props.performanceDetails.placeId} width={'100%'} height={'200px'} />
                    <div style={{position: 'relative', top: '-50px', left: '70vw'}}>
                        <DistanceCard placeId={this.props.performanceDetails.placeId} width={'200px'} height={'100px'} />
                    </div>
                    <div style={{width: '900px', margin: '0 auto'}}>
                        <CommentBox type={'performance'} />
                    </div>
                    <div style={{width: '630px', margin: '0 auto'}}>
                        <CommentList type={'performance'} initialWorksComments={null} initialPerformanceComments={this.props.performanceDetails.comments} dark={false} />
                    </div>
                </div>
            </section>
        )
    }
}