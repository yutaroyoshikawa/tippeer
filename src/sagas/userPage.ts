import { Howl } from 'howler'
import { SagaIterator } from 'redux-saga'
import { delay, fork, select, take } from 'redux-saga/effects'
import * as actions from '../actions/userPage'

import flyEffect from 'src/flyEffect.mp3'
import periodicEffect from 'src/periodicEffect.mp3'

function* doPlayEffectWorker(): SagaIterator {
    while (true) {
        const transitionType = yield take(actions.setTransitionType)
        if (transitionType.payload.transitionType === 'fly') {
            const state = yield select()
            const isPlay: boolean = state.initialLoad.isPlayMusic
            if (isPlay) {
                const sound = new Howl({
                    src: [flyEffect]
                })
    
                sound.play()
            }
        }
    }
}

function* doPeriodicEffectWorker(): SagaIterator {
    while (true) {
        yield delay(1500)
        const state = yield select()
        const isPlay: boolean = state.initialLoad.isPlayMusic
        const isPlayEffect: boolean = state.userPage.isEffectPlaying
        const transitionType = state.userPage.transitionType
        if (isPlay && isPlayEffect && transitionType === 'rotate') {
            const sound = new Howl({
                src: [periodicEffect]
            })

            sound.play()
        }
    }
}

export default [
    fork(doPlayEffectWorker),
    fork(doPeriodicEffectWorker),
]