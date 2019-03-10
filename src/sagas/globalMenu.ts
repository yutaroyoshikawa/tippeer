import * as geolocation from 'geolocation'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/globalMenu'

function getGeoLocation() {
    return new Promise( async (resolve, reject) => {
        await geolocation.getCurrentPosition(async (err: any, position: any) => {
            err ?
                await reject(err)
                :
                await resolve(position)
        })
    })
}

function* getUserGeoLocatiion(): SagaIterator {
    while(true){
        yield take(actions.requestGetGeoLocation)
        try{
            const geoLocation = yield call(getGeoLocation)
            yield put(actions.successGetGeoLocation(geoLocation))
        }catch(e){
            yield put(actions.faildGetGeoLocation(e))
        }
    }
}

export default [
    fork(getUserGeoLocatiion),
]