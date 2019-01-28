import { firestore } from 'firebase/app'
import 'firebase/firestore'
import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from '../styles/components/performanceCard'

export interface IProps {
    performanceId: string
}

export interface IState {
    address: string
    discription: string
    finish: Date
    isFind: boolean
    isLoad: boolean
    performanceTitle: string
    placeId: string
    placeName: string
    postalCode: string
    start: Date
    thumbnail: string
}

let isMounted: boolean = false

export class PerformanceCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = ({
            address: '',
            discription: '',
            finish: new Date(),
            isFind: false,
            isLoad: false,
            performanceTitle: '',
            placeId: '',
            placeName: '',
            postalCode: '',
            start: new Date(),
            thumbnail: '',
        })
    }

    public getPerformanceInfo = (Id: string) => {
        return new Promise( async (resolve, reject) => {
            const collection = await firestore().collection('performances').doc(Id)
            await collection.get().then((doc: any) => (
                doc.exists ?
                    resolve(
                        {
                            address: doc.data().address,
                            discription: doc.data().discription,
                            finish: doc.data().finish.toDate(),
                            performanceTitle: doc.data().name,
                            placeId: doc.data().place_id,
                            placeName: doc.data().place_name,
                            postalCode: doc.data().postal_code,
                            start: doc.data().start.toDate(),
                            thumbnail: doc.data().thumbnail,
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
            const performance = await this.getPerformanceInfo(this.props.performanceId)
            if(isMounted){
                await this.setState({
                    ...performance,
                    isFind: true,
                    isLoad: false,
                })
            }
        }catch(e){
            if(isMounted){
                this.setState({
                    isFind: false,
                    isLoad: false,
                })
            }
        }
    }

    public render() {
        return(
            <Styled.Entire>
                <Link to={"/performances/" + this.props.performanceId}  >
                    <figure><Styled.PerformanceThumbnail src={this.state.thumbnail} alt="PerformanceThumbnail" /></figure>
                </Link>
                <Styled.PerformanceInfo>
                    <Link to={"/performances/" + this.props.performanceId}  >
                        <Styled.PerformanceName>{this.state.performanceTitle}</Styled.PerformanceName>
                        <Styled.Start>{this.state.start.toString()}</Styled.Start>
                        <Styled.Finish>{this.state.finish.toString()}</Styled.Finish>
                    </Link>
                    <Link to={"/places/" + this.state.placeId}>
                        <Styled.PlaceInfo>{this.state.placeName}</Styled.PlaceInfo>
                    </Link>        
                </Styled.PerformanceInfo> 
            </Styled.Entire>
        )
    }
}