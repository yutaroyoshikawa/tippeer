import { firestore } from 'firebase/app'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/worksTop'
// import { ISpotlight } from '../reducers/worksTop'
import reduxFirebase from './firebase'

function* doGetWorksTop(): SagaIterator {
    while(true) {
        yield take(actions.requestGetWorksTopInfo)
        const state = yield select()
        const following = state.auth.following
        try{
            const ref: firestore.CollectionReference = firestore().collection('works')
            const snapshot: firestore.QuerySnapshot = yield call(reduxFirebase.firestore.getCollection, ref.limit(4))
            const spotlights: any = new Array()
            const works: string[] = new Array()
            snapshot.forEach(doc => {
                spotlights.push({
                    artistId: doc.data().artist_id,
                    thumbnail: doc.data().thumbnail,
                    worksId: doc.id,
                    worksTitle: doc.data().name,
                })
                works.push(doc.id)
            })
            yield put(actions.successGetWorksTopInfo({
                followArtists: following,
                newReleace: works,
                recommend: works,
                runking: works,
                spotlight: spotlights,
            }))
        }catch(e){
            yield put(actions.faildGetWorksTopInfo(e))
        }
    }
}

export default [
    fork(doGetWorksTop),
]