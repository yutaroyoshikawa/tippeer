import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { firestore } from 'firebase'
import * as React from 'react'
import * as Styled from '../styles/components/artistCard'

export interface IProps {
    artistId: string
    size: number
    style: 'standalone' | 'card'
    nameHidden: boolean
    color: 'light' | 'dark'
    link: boolean
}

export interface IState {
    artistName: string
    isFind: boolean
    isLoad: boolean
    icon: string
}

let isMounted: boolean = true

export class ArtistCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            artistName: '',
            icon: '',
            isFind: false,
            isLoad: true,
        })
    }

    public getArtistInfo = (Id: string) => {
        return new Promise(async (resolve, reject) => {
            const collection = await firestore().collection('users')
            const query = await collection.where('id', '==', Id)
            const artist: any = await []
            await query.get().then((doc) => (
                doc.forEach((data) => {
                    artist.push({
                        icon: data.data().icon_url,
                        name: data.data().name,
                    })
                })
            ))
            if (artist) {
                resolve(artist)
            } else {
                reject()
            }
        })
    }

    public componentWillUnmount = () => {
        isMounted = false
    }

    public componentDidUpdate = async () => {
        if(this.props.artistId){
            try {
                const artist: any = await this.getArtistInfo(this.props.artistId)
                if (isMounted) {
                    await this.setState(
                        {
                            artistName: artist[0].name,
                            icon: artist[0].icon,
                            isFind: true,
                            isLoad: false,
                        }
                    )
                }
            } catch (e) {
                if (isMounted) {
                    await this.setState(
                        {
                            isFind: false,
                            isLoad: false,
                        }
                    )
                }
            }
        }
    }

    public componentDidMount = async () => {
        isMounted = true
        if(this.props.artistId){
            try {
                const artist: any = await this.getArtistInfo(this.props.artistId)
                if (isMounted) {
                    await this.setState(
                        {
                            artistName: artist[0].name,
                            icon: artist[0].icon,
                            isFind: true,
                            isLoad: false,
                        }
                    )
                }
            } catch (e) {
                if (isMounted) {
                    await this.setState(
                        {
                            isFind: false,
                            isLoad: false,
                        }
                    )
                }
            }
        }
    }

    public renderLoader = () => (
        <div style={{ width: this.props.size + 'px', height: this.props.size + 'px', background: 'black', borderRadius: '50%', color: "white", }}>
            loading...
        </div>
    )

    public renderCard = () => (
        this.props.link ?
            <Styled.ArtistLink to={"/artists/" + this.props.artistId} itemProp={this.props.style} >
                <Styled.ArtistCard itemProp={this.props.style}>
                    <Styled.ArtistIcon
                        src={this.state.icon}
                        width={this.props.size}
                        alt="ArtistIcon"
                    />
                </Styled.ArtistCard>
                {this.props.nameHidden ? null : <Styled.Name itemProp={this.props.color}>{this.state.artistName}</Styled.Name>}
            </Styled.ArtistLink>
            :
            <Styled.IconBox itemProp={this.props.style}>
                <Styled.ArtistCard itemProp={this.props.style}>
                    <Styled.ArtistIcon
                        src={this.state.icon}
                        width={this.props.size}
                        alt="ArtistIcon"
                        loader={this.renderLoader()}
                        unloader={<FontAwesomeIcon style={{width: '30px', height: '30px'}} icon={faUserCircle} />}
                    />
                </Styled.ArtistCard>
                {this.props.nameHidden ? null : <Styled.Name itemProp={this.props.color}>{this.props.artistId}</Styled.Name>}
            </Styled.IconBox>

    )

    public render() {
        return (
            <Styled.Entire>
                {this.renderCard()}
            </Styled.Entire>
        )
    }
}