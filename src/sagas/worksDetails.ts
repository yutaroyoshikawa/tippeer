import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { setSendToId, successSendWorksComment } from '../actions/commentBox'
import * as actions from '../actions/worksDetails'
import { IWorksComments } from '../reducers/worksDetails'
import reduxFirebase from './firebase'

function* doGetWorksInfo(): SagaIterator {
    while(true) {
        const data = yield take(actions.requestFindWorksInfo)
        try{
            const snapshot = yield call(reduxFirebase.firestore.getDocument, 'works/' + data.payload)
            const worksInfo = snapshot.data()
            yield put(actions.findWorksInfo(
                {
                    artistId: worksInfo.artist_id,
                    comments: worksInfo.comments,
                    contents: worksInfo.contents,
                    description: worksInfo.description,
                    price: worksInfo.price,
                    score: worksInfo.Score,
                    worksThumbnail: worksInfo.thumbnail,
                    worksTitle: worksInfo.name,
                }
            ))
            yield put(setSendToId(data.payload))
            document.title = 'TIPPEER | ' + worksInfo.name
        }catch(e){
            yield put(actions.notFindWorksInfo())
            yield put(actions.successLoad())
        }
    }
}

function* doSetAverageScore(): SagaIterator {
    while(true) {
        const data = yield take(actions.findWorksInfo)
        const worksInfo = data.payload
        let totalScore = 0
        yield worksInfo.comments.map((comment: any) => {
            totalScore += comment.score
        })
        const averageScore =  totalScore / worksInfo.comments.length
        yield put(actions.setAverageScore(averageScore))
    }
}

function* doSetComments(): SagaIterator {
    while(true) {
        const data = yield take(actions.findWorksInfo)
        const worksInfo = data.payload
        const convertedComments: any = []
        yield worksInfo.comments.map((comment: any) => {
            convertedComments.push(
                {
                    content: comment.content,
                    createdAt: comment.created_at.toDate(),
                    score: comment.score,
                    updatedAt: comment.updated_at.toDate(),
                    userId: comment.user_id,
                }
            )
        })
        yield put(actions.setComments(convertedComments))
    }
}

function* doSetContents(): SagaIterator {
    while(true) {
        const data = yield take(actions.findWorksInfo)
        const worksInfo = data.payload
        const convertedContents: any = []
        yield worksInfo.contents.map((content: any) => {
            convertedContents.push(
                {
                    artistId: content.artist_id,
                    price: content.price,
                    title: content.name,
                }
            )
        })
        yield put(actions.setContents(convertedContents))
    }
}

function* doSetBaseWorksInfo(): SagaIterator {
    while(true) {
        const data = yield take(actions.findWorksInfo)
        const worksInfo = data.payload
        yield put(actions.setBaseWorksInfo(
            {
                artistId: worksInfo.artistId,
                description: worksInfo.description,
                price: worksInfo.price,
                worksThumbnail: worksInfo.worksThumbnail,
                worksTitle: worksInfo.worksTitle,
            }
        ))
    }
}

function* checkProgress(): SagaIterator {
    while(true) {
        yield take(actions.setAverageScore)
        yield take(actions.setBaseWorksInfo)
        yield take(actions.setComments)
        yield take(actions.setContents)
        yield put(actions.successLoad())
    }
}

function* addNewCommentWorker(): SagaIterator {
    while(true) {
        const comment = yield take(successSendWorksComment)
        const state = yield select()
        const user: string = state.auth.id
        const comments: IWorksComments[] = state.worksDetails.comments
        comments.unshift(
            {
                content: comment.payload.content,
                createdAt: new Date(),
                score: comment.payload.rating,
                updatedAt: new Date(),
                userId: user,
            }
        )
        yield put(actions.addNewWorksComment(comments))
    }
}

export default [
    fork(doGetWorksInfo),
    fork(doSetAverageScore),
    fork(doSetBaseWorksInfo),
    fork(doSetComments),
    fork(doSetContents),
    fork(checkProgress),
    fork(addNewCommentWorker),
]