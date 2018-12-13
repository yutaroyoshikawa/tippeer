import * as React from 'react'
import { Dispatch } from 'redux'
import { Score } from '../components'
import { ArticleTitle } from '../components'
import { ArtistCard, CommentBox, CommentList, PriceCard } from '../components'
import { IWorksDetailsState } from '../reducers/worksDetails'

export interface IProps extends IWorksDetailsState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        document.body.className = 'worksDetails'
        document.body.style.background = 'url(' + this.props.worksDetails.worksThumbnail + ') no-repeat center'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundAttachment = 'fixed'
    }

    public renderContents = () => (
        this.props.worksDetails.contents.map((data,key) => (
            <div key={key}>
                <li>
                    <ul style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none'}}>
                        <li style={{width: '60%'}}>{data.title}</li>
                        <li style={{width: '10%'}}><ArtistCard artistId={data.artistId} size={40} style={'card'} /></li>
                        <li style={{width: '30%', textAlign: 'right'}}><PriceCard type={'ellipse'} price={data.price} size={20} /></li>
                    </ul>
                </li>
                {key !== this.props.worksDetails.contents.length - 1 ? <hr style={{border: '0 none', margin: '8px 0', width: '95%', background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))', height: '1px'}} /> : null}
            </div>
        ))
    )

    public render() {
        return(
            <section className={'worksDetailsBody'} style={{width: '1020px', margin: '0 auto'}}>
                <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '300px', height: '300px', display: 'flex', alignItems: 'center', filter: 'drop-shadow(0 0 2px #555)'}}>
                            <div style={{width: '300px'}}>
                                <img style={{width: '100%'}} src={this.props.worksDetails.worksThumbnail} alt="worksThumbnail"/>
                            </div>
                        </div>
                        <div style={{marginLeft: '30px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                            <h2 style={{fontWeight: 'normal', fontSize: '60px'}}>{this.props.worksDetails.worksTitle}</h2>
                            <ArtistCard artistId={this.props.worksDetails.artistId} size={50} style={'card'} />
                            <PriceCard type={'ellipse'} price={this.props.worksDetails.price} size={30} />
                            <Score size={40} />
                        </div>
                    </div>
                    <p style={{margin: '50px 0'}}>{this.props.worksDetails.description}</p>
                    <div style={{margin: '50px 0'}}>
                        <ArticleTitle title={'Contents'} />
                        <ul style={{listStyle: 'none', fontSize: '20px'}}>
                            {this.renderContents()}
                        </ul>
                    </div>
                </div>
                
                <div style={{marginBottom: '50px'}}>
                    <ArticleTitle title={'Comments'} />
                    <CommentBox type={'works'} />
                    <div style={{listStyle: 'none', width: '65%', margin: '0 auto'}}>
                        <CommentList initialComments={this.props.worksDetails.comments} type={'works'} />
                    </div>
                </div>
            </section>
        )
    }
}