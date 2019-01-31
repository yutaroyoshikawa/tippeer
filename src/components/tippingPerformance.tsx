import CircularProgress from '@material-ui/core/CircularProgress'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ITippingState } from '../reducers/tipping'
import { Finish, Start } from '../styles/components/performanceCard'
import * as Styled from '../styles/tipping'
import { ArtistCard } from './'

export interface IProps extends ITippingState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public render() {
        return (
            !this.props.tipping.isLoadPerformance ?
                <Styled.Section>
                    <ArtistCard artistId={this.props.tipping.performance.artistId} size={60} style={'card'} nameHidden={false} color={'light'} link={true} />
                    <Link to={'/performances/' + this.props.tipping.performance.id}>
                        <div>
                            <Styled.ResultPerformanceTime>
                                <Start>
                                    {`
                                        ${this.props.tipping.performance.start.getFullYear()}/
                                        ${this.props.tipping.performance.start.getMonth()}/
                                        ${this.props.tipping.performance.start.getDay()}-
                                        ${this.props.tipping.performance.start.getHours()}:
                                        ${this.props.tipping.performance.start.getMinutes()}
                                    `}
                                </Start>
                                <Finish>
                                    {`
                                        ${this.props.tipping.performance.finish.getFullYear()}/
                                        ${this.props.tipping.performance.finish.getMonth()}/
                                        ${this.props.tipping.performance.finish.getDay()}-
                                        ${this.props.tipping.performance.finish.getHours()}:
                                        ${this.props.tipping.performance.finish.getMinutes()}
                                    `}
                                </Finish>
                            </Styled.ResultPerformanceTime>     
                            <Styled.ResultPerformanceName>
                                {this.props.tipping.performance.name}
                            </Styled.ResultPerformanceName>
                        </div>
                    </Link>
                </Styled.Section>
                :
                <Styled.Section>
                    <CircularProgress />
                </Styled.Section>
        )
    }
}