import { firestore } from 'firebase/app'
import 'firebase/firestore'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap } from './'

import * as Styled from '../styles/components/placeCard'

export interface IProps {
    placeId: string
}

export interface IState {
    placeName: string
    postalCode: string
    address: string
    latitude: number
    longitude: number
    isFind: boolean
    isLoad: boolean
}

let isMounted: boolean = false

export class PlaceCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = ({
            address: 'hogehoge',
            isFind: false,
            isLoad: false,
            latitude: 123.123,
            longitude: 123.123,
            placeName: 'hoge',
            postalCode: '123-4567',
        })
    }

    public getPlaceInfo = (Id: string) => {
        return new Promise( async (resolve, reject) => {
            const collection = await firestore().collection('places').doc(Id)
            await collection.get().then((doc: any) => (
                doc.exists ?
                    resolve(
                        {
                            address: doc.data().address,
                            latitude: doc.data().geo_locate._lat,
                            longitude: doc.data().geo_locate._long,
                            placeName: doc.data().name,
                            postalCode: doc.data().postal_code,
                        }
                    )
                    :
                    reject()
            )).catch(e => (
                reject(e)
            ))
        })
    }

    public componentWillUnmount = () => {
        isMounted = false
    }

    public componentDidMount = async () => {
        isMounted = true
        await this.setState({
            isLoad: true,
        })
        try{
            const place = await this.getPlaceInfo(this.props.placeId)
            if(isMounted){
                await this.setState({
                    ...place,
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



    public render() {
        return(
            <Styled.Entire>
                <Link to={"/places/" + this.props.placeId}  >
                    <figure><GoogleMap latitude={this.state.latitude} longitude={this.state.longitude} width={'100%'} height={'110px'} /></figure>
                    <Styled.PlaceInfo>
                        <Styled.Name>{this.state.placeName}</Styled.Name>
                        <Styled.PostalCode>〒{this.state.postalCode}</Styled.PostalCode>
                        <Styled.Address>{this.state.address}</Styled.Address>
                    </Styled.PlaceInfo>
                </Link>
            </Styled.Entire>
        )
    }
}