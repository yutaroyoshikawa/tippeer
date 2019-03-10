import * as React from 'react'
import { Motion, spring } from 'react-motion'
import { Dispatch } from 'redux'
import { IGlobalMenuState } from 'src/reducers/globalMenu';
import { requestLogin } from '../actions/auth'
import * as actions from '../actions/globalMenu'
import { Back, MobileMenu, SearchBoxInput, TipperLogo, UserMenu } from '../components'

import * as Styled from '../styles/globalMenu'

export interface IProps extends IGlobalMenuState {
    dispatch: Dispatch<any>;
}

// let samplingY: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export default class GlobalMenu extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            currentPosition: 0,
            flag: false,
            samplingCount: 0,
        }
    }

    public componentDidMount() {
        this.props.dispatch(actions.getAgentInfo())
        this.props.dispatch(requestLogin())
        this.props.dispatch(actions.requestGetGeoLocation())
        // window.addEventListener('scroll', e => {
        //     this.setState({
        //         currentPosition: 
        //             Math.max(
        //                 window.pageYOffset,
        //                 document.documentElement.scrollTop,
        //                 document.body.scrollTop
        //             )
        //     })
        // })
        // window.addEventListener('touchend', e => {
        //     samplingY.map((data, i) => {
        //         samplingY[i] = Math.max(
        //             window.pageYOffset,
        //             document.documentElement.scrollTop,
        //             document.body.scrollTop
        //         )
        //     })
        //     this.state.currentPosition < samplingY[9] ?
        //         0
        //         :
        //         this.state.currentPosition > samplingY[9] + 30 ?
        //             0
        //             :
        //             null
        // })
    }


    public renderLeyout = () => (
        this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
            <Styled.MobileTopMenu>
                <li><Back /></li>
                <li><TipperLogo /></li>
                <li><UserMenu /></li>
            </Styled.MobileTopMenu>
            :
            <Styled.DeskTopMemu>
                <li><TipperLogo /></li>
                <li><SearchBoxInput /></li>
                <li><UserMenu /></li>
            </Styled.DeskTopMemu>
    )

    public render() {
        return (
            <Styled.Entire>
                <Motion style={{ y: spring(this.props.globalMenu.isHide ? 100 : 0) }}>
                    {(value: any) =>
                        <Styled.TopGlobalMenu itemProp={value.y}>
                            {this.renderLeyout()}
                        </Styled.TopGlobalMenu>
                    }
                </Motion>
                {
                    this.props.globalMenu.agent === 'mobile' || this.props.globalMenu.agent === 'tablet' ?
                        <Styled.BottomGlobalMenu>
                            <MobileMenu />
                        </Styled.BottomGlobalMenu>
                        :
                        null
                }
            </Styled.Entire>

        )
    }
}
