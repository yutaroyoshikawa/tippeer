import { SagaIterator } from 'redux-saga'
import { delay, fork, select, take } from 'redux-saga/effects'
import * as actions from '../actions/userPage'

import flyEffect from 'src/flyEffect.mp3'
import periodicEffect from 'src/periodicEffect.mp3'

function* doPlayEffectWorker(): SagaIterator {
    while (true) {
        const transitionType = yield take(actions.setTransitionType)
        const request = new XMLHttpRequest()
        const audioContext = new AudioContext()
        const audioSource = audioContext.createBufferSource()
        request.open("GET", flyEffect, true)
        request.responseType = "arraybuffer"
        request.onload = () => {
            audioContext.decodeAudioData(request.response)
                .then(audioBuffer => {
                    audioSource.buffer = audioBuffer
                    audioSource.connect(audioContext.destination)
                })
        }
        request.send()
        if (transitionType.payload.transitionType === 'fly') {
            const state = yield select()
            const isPlay: boolean = state.initialLoad.isPlayMusic
            if (isPlay) {
                audioSource.start(0)
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
            const request = new XMLHttpRequest()
            const audioContext = new AudioContext()
            const audioSource = audioContext.createBufferSource()
            request.open("GET", periodicEffect, true)
            request.responseType = "arraybuffer"
            request.onload = () => {
                audioContext.decodeAudioData(request.response)
                    .then(audioBuffer => {
                        audioSource.buffer = audioBuffer
                        audioSource.connect(audioContext.destination)
                    })
            }
            request.send()
            audioSource.start(0)
        }
    }
}

export default [
    fork(doPlayEffectWorker),
    fork(doPeriodicEffectWorker),
]