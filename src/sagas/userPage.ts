import { firestore } from 'firebase/app'
import { Howl } from 'howler'
import { SagaIterator } from 'redux-saga'
import { call, delay, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/userPage'
import { IMapPerformance } from '../reducers/userPage'
import firebaseSaga from './firebase'

import flyEffect from 'src/flyEffect.mp3'
import periodicEffect from 'src/periodicEffect.mp3'
import periodicEffect2 from 'src/periodicEffect2.mp3'
import periodicEffect3 from 'src/periodicEffect3.mp3'

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

function* doPeriodicEffect2Worker(): SagaIterator {
    while (true) {
        yield delay(2000)
        const state = yield select()
        const isPlay: boolean = state.initialLoad.isPlayMusic
        const isPlayEffect: boolean = state.userPage.isEffectPlaying
        if (isPlay && isPlayEffect) {
            const sound = new Howl({
                src: [periodicEffect2]
            })

            sound.play()
        }
    }
}

function* doPeriodicEffect3Worker(): SagaIterator {
    while (true) {
        yield delay(2500)
        const state = yield select()
        const isPlay: boolean = state.initialLoad.isPlayMusic
        const isPlayEffect: boolean = state.userPage.isEffectPlaying
        if (isPlay && isPlayEffect) {
            const sound = new Howl({
                src: [periodicEffect3]
            })

            sound.play()
        }
    }
}

function* doGetPerformances(): SagaIterator {
    while(true) {
        yield take(actions.requestGetRealPerformance)
        try {
            const ref: firestore.CollectionReference = firestore().collection('performances')
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, ref.where('start', '>=', new Date()))
            const performances: IMapPerformance[] = new Array()
            snapshot.forEach(doc => (
                performances.push({
                    artistId: doc.data().artist_id,
                    finish: doc.data().finish.toDate(),
                    latitude: doc.data().geo_locate._lat,
                    longitude: doc.data().geo_locate._long,
                    performanceId: doc.id,
                    performanceName: doc.data().name,
                    performanceThumbnail: doc.data().thumbnail,
                    placeName: doc.data().place_name,
                    start: doc.data().start.toDate(),
                })
            ))
            yield put(actions.successGetRealPerformance(performances))
        }catch(e) {
            yield put(actions.faildGetRealPerformance(e))
        }
    }
}

export default [
    fork(doPlayEffectWorker),
    fork(doPeriodicEffectWorker),
    fork(doPeriodicEffect2Worker),
    fork(doPeriodicEffect3Worker),
    fork(doGetPerformances),
]