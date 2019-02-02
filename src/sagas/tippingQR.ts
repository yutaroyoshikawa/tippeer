// import { SagaIterator } from 'redux-saga'
// import { call, fork, put, select, take } from 'redux-saga/effects'
// import firebaseSaga from './firebase' 

// function* doCheckQRWorker(): SagaIterator {
//     while (true) {
//         const doc = yield select()
//         const uid = yield doc.auth.uid
//         yield fork(
//             firebaseSaga.firestore.syncDocument,
//             'performances/' + uid,
//             { successActionCreator: syncTodo }
//         )
//     }
// }

// export default [
//     fork(doCheckQRWorker),
// ]