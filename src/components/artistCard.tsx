import * as React from 'react'

import * as Styled from '../styles/components/artistCard'

import icon from '../natureicon.jpg'

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
    icon: string
}

export class ArtistCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            artistName: 'hoge',
            icon: 'hoge',
        })
    }

    public componentDidMount = () => {
        this.setState({
            artistName: 'hoge',
            icon: 'hoge',
        })
    }

    public renderCard = () => (
        this.props.link ?
            <Styled.ArtistLink to={"/artists/" + this.props.artistId} itemProp={this.props.style} >
                <Styled.ArtistCard itemProp={this.props.style}><Styled.ArtistIcon src={icon} width={this.props.size} alt="ArtistIcon"/></Styled.ArtistCard>
                {this.props.nameHidden ? null : <Styled.Name itemProp={this.props.color}>{this.state.artistName}</Styled.Name> }
            </Styled.ArtistLink>
        :
            <Styled.IconBox itemProp={this.props.style}>
                <Styled.ArtistCard itemProp={this.props.style}><Styled.ArtistIcon src={icon} width={this.props.size} alt="ArtistIcon"/></Styled.ArtistCard>
                {this.props.nameHidden ? null : <Styled.Name itemProp={this.props.color}>{this.state.artistName}</Styled.Name> }
            </Styled.IconBox>

    )

    public render() {
        return(
            <Styled.Entire>
                {this.renderCard()}
            </Styled.Entire>
        )
    }
}