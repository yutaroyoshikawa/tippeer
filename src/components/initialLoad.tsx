import { MusicNote, MusicOff } from '@material-ui/icons'
import { Howl } from 'howler'
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

const stopScroll = (e: TouchEvent) => {
    e.preventDefault()
}

export default class extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo(0, 0)
    }

    public componentDidMount() {
        window.addEventListener('touchmove', e => stopScroll.bind(this,), {passive: false} )
        const sound = new Howl({
            src: ['']
        })
        const eventName = typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup'
        const initAudioContext = () => {
            document.removeEventListener(eventName, initAudioContext)
            sound.play()
        }
        document.addEventListener(eventName, initAudioContext)
        
    }

    public componentWillUnmount() {
        window.removeEventListener('touchmove', e => stopScroll.bind(this,), false)
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