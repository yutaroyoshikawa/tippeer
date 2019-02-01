import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firestore } from 'firebase/app'
import 'firebase/firestore'
import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from '../styles/components/worksCard'
import { ArtistCard } from './'

export interface IProps {
    worksId: string
}

export interface IState {
    artistId: string
    isFind: boolean
    isLoad: boolean
    price: number
    worksName: string
    worksThumbnail: string
}

let isMounted: boolean = false

let getWorksInfo: any = (Id: string) => {
    return new Promise( async (resolve, reject) => {
        const collection = await firestore().collection('works').doc(Id)
        await collection.get().then((doc: any) => (
            doc.exists ?
                resolve(
                    {
                        artistId: doc.data().artist_id,
                        price: doc.data().price,
                        worksName: doc.data().name,
                        worksThumbnail: doc.data().thumbnail,
                    }
                )
                :
                reject()
        )).catch(e => (
            reject(e)
        ))
    })
}

export class LibraryWorksCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            artistId: '',
            isFind: false,
            isLoad: false,
            price: 0,
            worksName: '', 
            worksThumbnail: '',
        })
    }

    public componentWillUnmount = () => {
        isMounted = false
        getWorksInfo = null
    }

    public componentDidMount = async () => {
        isMounted = true
        await this.setState({
            isLoad: true,
        })
        try{
            const works = await getWorksInfo(this.props.worksId)
            if(isMounted){
                await this.setState({
                    ...works,
                    isFind: true,
                    isLoad: false,
                })
            }
        }catch(e){
            if(isMounted){
                await this.setState({
                    isFind: false,
                    isLoad: false,
                })
            }
        }
    }

    public renderUnLoad = () => (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faImage} style={{fontSize: '150px'}}  />
        </div>
    )

    public render() {
        return(
            <Styled.Entire>
                <Link to={"/library/" + this.props.worksId} >
                    <p>
                        <Styled.WorksThumbnail
                            src={this.state.worksThumbnail}
                            unloader={this.renderUnLoad()}
                            alt="worksThumbnail"
                        />
                    </p>
                </Link>
                <Styled.WorksInfo>
                    <Link to={"/library/" + this.props.worksId} >
                        <Styled.WorksName>{this.state.worksName}</Styled.WorksName>
                    </Link>
                    <Link to={'/artists/' + this.state.artistId} >
                        <ArtistCard artistId={this.state.artistId} size={40} style={'card'} nameHidden={false} color={'light'} link={true} />
                    </Link>
                </Styled.WorksInfo>
            </Styled.Entire>
        )
    }
}