import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/placeDetails'
import firebaseSaga from './firebase'
import { getPlacePerformances } from './fireStore'

function* doGetPlaceDetailsInfoWorker(): SagaIterator {
    while(true){
        const data = yield take(actions.requestFindPlaceInfo)
        try{
            const snapshot = yield call(firebaseSaga.firestore.getDocument, 'places/' + data.payload)
            const placeInfo = snapshot.data()
            const performances = yield call(getPlacePerformances, data.payload)
            yield put(actions.findPlaceInfo(
                {
                    address: placeInfo.address,
                    geoPlace: {
                        latitude: placeInfo.geo_place._lat,
                        longitude: placeInfo.geo_place._long,
                    },
                    performaces: performances,
                    placeName: placeInfo.name,
                    postalcode: placeInfo.postal_code,
                }
            ))
            document.title = 'TIPPEER | ' + placeInfo.name
        }catch(e){
            yield put(actions.notFindPlaceInfo())
        }
    }
}

export default [
    fork(doGetPlaceDetailsInfoWorker),
]