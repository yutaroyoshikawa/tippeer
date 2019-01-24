import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/artistDetails'
import { IArtistDetails, IPerformance } from '../actions/artistDetails'
import { getArtistDetails, getPerformances } from './fireStore'

function* doGetArtistInfoWorker(): SagaIterator {
    while (true) {
        const artistId = yield take(actions.requestGetArtistInfo)
        try {
            const artistInfo = yield call(getArtistDetails, artistId.payload)
            const artistDetails = {
                artistName: artistInfo.name,
                biography: artistInfo.biography,
                follower: artistInfo.follower,
                jobTitle: artistInfo.job_title,
                notifiedUsers: artistInfo.notified_user,
                selfIntroduction: artistInfo.self_introduction,
                subscribeCount: artistInfo.subscribe_count,
                topImage: artistInfo.top_image,
            }
            const performances = yield call(getPerformances, artistId.payload)
            yield put(actions.findArtistInfo())
            yield put(actions.requestSetRecentPerformance(performances))
            yield put(actions.requestSetArtistDetails(artistDetails))
            yield put(actions.requestSetPerformanceHistories(performances))
            yield put(actions.requestSetPlannedPerformances(performances))
            yield put(actions.requestSetUserSettings(artistDetails))
        } catch (e) {
            yield put(actions.notFindArtistInfo())
        }
    }
}

function* doSetRecentPerformance(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetRecentPerformance)
        const performances = yield data.payload
        const now = new Date()
        let recentPerform: any = ''
        yield performances.forEach((perform: any) => {
            if (perform.start < now && perform.finish > now ){
                recentPerform = {
                    address: perform.address,
                    comments: perform.comments,
                    description: perform.description,
                    finish: perform.finish,
                    id: perform.id,
                    placeName: perform.place_name,
                    postalCode: perform.postal_code,
                    start: perform.start,
                    title: perform.name,
                }
            }
        })
        recentPerform ?
            yield put(actions.findRecentPerformance(recentPerform))
            :
            yield put(actions.notFindRecentPerformance())
    }
}

function* doSetArtistDetails(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetArtistDetails)
        const artistDetails: IArtistDetails = data.payload
        yield put(actions.setArtistDetails(
            {
                artistName: artistDetails.artistName,
                biography: artistDetails.biography,
                jobTitle: artistDetails.jobTitle,
                selfIntroduction: artistDetails.selfIntroduction,
                subscribeCount: artistDetails.follower.length,
                topImage: artistDetails.topImage,
            }
        ))
    }
}

function* doSetUserSettings(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetUserSettings)
        const artistDetails: IArtistDetails = data.payload
        const state = yield select()
        const uid: string = yield state.auth.uid
        const notifiedUsers = artistDetails.notifiedUsers
        const follower = artistDetails.follower
        yield put(actions.setUserSettings(
            {
                notifyState: 
                    notifiedUsers.indexOf(uid) !== -1 ?
                        true
                        :
                        false,
                subscribeState:
                    follower.indexOf(uid) !== -1 ?
                        true
                        :
                        false,
            }
        ))
    }
}

function* doSetPerformanceHistories(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetPerformanceHistories)
        const performances: IPerformance[] = yield data.payload
        const performanceHistories: any = []
        const now = new Date()
        performances.forEach((perform: any) => {
            if(perform.finish.toDate() < now){
                performanceHistories.push(
                    {
                        finish: perform.finish,
                        id: perform.id,
                        name: perform.name,
                        placeId: perform.place_id,
                        placeName: perform.place_name,
                        start: perform.start,
                        thumbnail: perform.thumbnail,
                    }
                )
            }
        })
        yield put(actions.setPerformanceHistories(performanceHistories))
    }
}

function* doSetPlannedPerformances(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetPlannedPerformances)
        const performances = yield data.payload
        const plannedPerformances: any = []
        const now = new Date()
        performances.forEach((perform: any) => {
            if(perform.finish.toDate() < now){
                plannedPerformances.push(
                    {
                        finish: perform.finish,
                        id: perform.id,
                        name: perform.name,
                        placeId: perform.place_id,
                        placeName: perform.place_name,
                        start: perform.start,
                        thumbnail: perform.thumbnail,
                    }
                )
            }
        })
        yield put(actions.setPlannedPerformances(plannedPerformances))
    }
}

function* checkProgress() {
    while(true) {
        yield take(actions.setArtistDetails)
        yield take(actions.setPerformanceHistories)
        yield take(actions.setPlannedPerformances)
        yield take(actions.setUserSettings)
        yield put(actions.successLoading())
    }
}

export default [
    fork(doGetArtistInfoWorker),
    fork(checkProgress),
    fork(doSetArtistDetails),
    fork(doSetPerformanceHistories),
    fork(doSetPlannedPerformances),
    fork(doSetRecentPerformance),
    fork(doSetUserSettings),
]