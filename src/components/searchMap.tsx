import * as React from 'react'
import { Link } from 'react-router-dom'

import * as Styled from '../styles/components/placeCard'

export interface IProps {
    placeId: string
    placeName: string
    postalCode: string
    address: string
}

export class SearchMap extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return(
            <Styled.Entire>
                <Link to={"/places/" + this.props.placeId}  >
                    <Styled.PlaceInfo>
                        <Styled.Name>{this.props.placeName}</Styled.Name>
                        <Styled.PostalCode>〒{this.props.postalCode}</Styled.PostalCode>
                        <Styled.Address>{this.props.address}</Styled.Address>
                    </Styled.PlaceInfo>
                </Link>
            </Styled.Entire>
        )
    }
}