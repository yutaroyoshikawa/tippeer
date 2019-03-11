import { firestore } from 'firebase/app'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/artistDetails'
import { IArtistDetails, IPerformance } from '../actions/artistDetails'
import { setSendToId } from '../actions/commentBox'
import firebaseSaga from './firebase'
import { getPerformances } from './fireStore'

function* doGetArtistInfoWorker(): SagaIterator {
    while (true) {
        const artistId = yield take(actions.requestGetArtistInfo)
        try {
            const ref = firestore().collection('users')
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, ref.where("id", "==", artistId.payload).where("user_type", "==", "artist"))
            let artistDetails: any = new Object()
            snapshot.forEach(doc => {
                artistDetails = {
                    artistName: doc.data().name,
                    biography: doc.data().biography,
                    follower: doc.data().follower,
                    jobTitle: doc.data().job_title,
                    notifiedUsers: doc.data().notified_users,
                    selfIntroduction: doc.data().self_introduction,
                    subscribeCount: doc.data().subscribe_count,
                    topImage: doc.data().top_image,
                    uid: doc.id,
                }
            })
            
            document.title = 'TIPPEER | ' + artistDetails.artistName
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
        // const now = new Date()
        let recentPerform: any = ''
        yield performances.forEach((perform: any) => {
            // if (perform.start < now && perform.finish > now ){
                recentPerform = {
                    address: perform.address,
                    comments: perform.comments,
                    description: perform.discription,
                    finish: perform.finish.toDate(),
                    id: perform.id,
                    placeName: perform.place_name,
                    postalCode: perform.postal_code,
                    start: perform.start.toDate(),
                    title: perform.name,
                }
            // }
        })
        yield put(setSendToId(recentPerform.id))
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
                subscribeCount: artistDetails.subscribeCount,
                topImage: artistDetails.topImage,
                uid: artistDetails.uid,
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
        // const now = new Date()
        performances.forEach((perform: any) => {
            // if(perform.finish.toDate() < now){
                performanceHistories.push(
                    {
                        finish: perform.finish.toDate(),
                        id: perform.id,
                        name: perform.name,
                        placeId: perform.place_id,
                        placeName: perform.place_name,
                        start: perform.start.toDate(),
                        thumbnail: perform.thumbnail,
                    }
                )
            // }
        })
        yield put(actions.setPerformanceHistories(performanceHistories))
    }
}

function* doSetPlannedPerformances(): SagaIterator {
    while(true){
        const data = yield take(actions.requestSetPlannedPerformances)
        const performances = yield data.payload
        const plannedPerformances: any = []
        // const now = new Date()
        performances.forEach((perform: any) => {
            // if(perform.finish.toDate() < now){
                plannedPerformances.push(
                    {
                        finish: perform.finish.toDate(),
                        id: perform.id,
                        name: perform.name,
                        placeId: perform.place_id,
                        placeName: perform.place_name,
                        start: perform.start.toDate(),
                        thumbnail: perform.thumbnail,
                    }
                )
            // }
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

function* followArtist(): SagaIterator {
    while(true) {
        yield take(actions.requestFollow)
        const state = yield select()
        const userUId = state.auth.uid
        const artistUId: string = state.artistDetails.uid
        if(userUId){
            try{
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'users/' + artistUId,
                    'follower',
                    firestore.FieldValue.arrayUnion(userUId)
                )
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'users/' + userUId,
                    'following',
                    firestore.FieldValue.arrayUnion(artistUId)
                )
                yield put(actions.successSubscribe())
                yield put(notifications.success(
                    {
                        autoDismiss: 5,
                        message: 'フォローしました。',
                        position: 'tr',
                    }
                ))
            }catch(e) {
                yield put(actions.faildFollow(e))
            }
        }else {
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: 'ログインしてください。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildFollow('doesnt login'))
        }
    }
}

function* unfollowArtist(): SagaIterator {
    while(true) {
        yield take(actions.requestUnfollow)
        const state = yield select()
        const userUId = state.auth.uid
        const artistUId: string = state.artistDetails.uid
        try{
            yield call(
                firebaseSaga.firestore.updateDocument,
                'users/' + artistUId,
                'follower',
                firestore.FieldValue.arrayRemove(userUId)
            )
            yield call(
                firebaseSaga.firestore.updateDocument,
                'users/' + artistUId,
                'following',
                firestore.FieldValue.arrayRemove(artistUId)
            )
            yield put(actions.successUnsubscribe())
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: 'フォロー解除しました。',
                    position: 'tr',
                }
            ))
        }catch(e) {
            yield put(actions.faildUnfollow(e))
        }
    }
}

function* notifyArtist(): SagaIterator {
    while(true) {
        yield take(actions.requestNotify)
        const state = yield select()
        const userUId = state.auth.uid
        const artistUId: string = state.artistDetails.uid
        if(userUId){
            try{
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'users/' + artistUId,
                    'notified_users',
                    firestore.FieldValue.arrayUnion(userUId)
                )
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'users/' + userUId,
                    'notifying',
                    firestore.FieldValue.arrayUnion(artistUId)
                )
                yield put(actions.successNotify())
                yield put(notifications.success(
                    {
                        autoDismiss: 5,
                        message: '通知設定しました。',
                        position: 'tr',
                    }
                ))
            }catch(e) {
                yield put(actions.faildNotify(e))
            }
        }else{
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: 'ログインしてください。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildNotify())
        }
    }
}

function* unnotifyArtist(): SagaIterator {
    while(true) {
        yield take(actions.requestUnnotify)
        const state = yield select()
        const userUId = state.auth.uid
        const artistUId: string = state.artistDetails.uid
        try{
            yield call(
                firebaseSaga.firestore.updateDocument,
                'users/' + artistUId,
                'notified_users',
                firestore.FieldValue.arrayRemove(userUId)
            )
            yield call(
                firebaseSaga.firestore.updateDocument,
                'users/' + artistUId,
                'notifying',
                firestore.FieldValue.arrayRemove(artistUId)
            )
            yield put(actions.successUnnotify())
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: '通知設定を解除しました。',
                    position: 'tr',
                }
            ))
        }catch(e) {
            yield put(actions.faildUnnotify(e))
        }
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
    fork(followArtist),
    fork(unfollowArtist),
    fork(unnotifyArtist),
    fork(notifyArtist),
]