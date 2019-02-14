import { MusicNote, MusicOff } from '@material-ui/icons'
import * as React from 'react'
// import { CSSTransition } from 'react-transition-group'
import { Dispatch } from 'redux'
import * as actions from '../actions/initialLoad'
import { IInitialLoadState } from '../reducers/initialLoad'
import * as Styled from '../styles/components/initialLoad'

import Icon from 'src/TipperIcon.svg'
import Logo from 'src/TipperLogo.svg'

export interface IProps extends IInitialLoadState {
    dispatch: Dispatch<any>
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
    }

    public componentDidMount() {
        window.addEventListener('touchmove', e => {
            e.preventDefault()
        }, {passive: false})

        const audioContext = new AudioContext()
        const ctx = audioContext.createBufferSource()
        ctx.start()

        const eventName = typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup'
        const initAudioContext = () => {
            document.removeEventListener(eventName, initAudioContext)
            audioContext.resume()
        }
        document.addEventListener(eventName, initAudioContext)
    }

    public componentWillUnmount() {
        window.removeEventListener('touchmove', e => {
            e.preventDefault()
        })
    }

    public setIsMusic = (isMusic: boolean) => {
        isMusic ?
            this.props.dispatch(actions.playMusic())
            :
            this.props.dispatch(actions.stopMusic())
        this.props.dispatch(actions.hideLoad())
    }

    public doHide = () => (
        this.props.dispatch(actions.doHide())
    )

    public render() {
        return (
            this.props.initialLoad.isShow ?
                <Styled.Entire
                    in={!this.props.initialLoad.isHideFlag}
                    timeout={800}
                    onExited={this.doHide}
                >
                    <Styled.GlobalStyle />
                    <Styled.LogoSection>
                        <Styled.Icon src={Icon} />
                        <Styled.Logo src={Logo} />
                    </Styled.LogoSection>
                    <Styled.MusicSelect>
                        <Styled.MusicIcon
                            onClick={this.setIsMusic.bind(null, true)}
                        >
                            <MusicNote />
                        </Styled.MusicIcon>
                        <Styled.MusicIcon
                            onClick={this.setIsMusic.bind(null, false)}
                        >
                            <MusicOff />
                        </Styled.MusicIcon>
                    </Styled.MusicSelect>
                </Styled.Entire>
                :
                null
        )
    }
}