import client from './initilize';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

const ALGOLIA_INDEX_NAME = 'performances';

exports.onPerformanceCreated = functions.firestore.document('performances/{performanceId}').onCreate((snap, context) => {
    const performance = snap.data();
    if (performance) {
        performance.objectID = context.params.performanceId;
        const index = client.initIndex(ALGOLIA_INDEX_NAME);
        return index.saveObject(performance);
    } else {
        return null
    }
});

exports.onPerformanceRemoved = functions.firestore.document('performances/{performanceId}').onDelete((snap, context) => {
    return client.initIndex(ALGOLIA_INDEX_NAME).deleteObject(context.params.performanceId);
});

exports.onWorksCreated = functions.firestore.document('works/{worksId}').onCreate((snap, context) => {
    const works = snap.data();
    if (works) {
        works.objectID = context.params.worksId;
        const index = client.initIndex(ALGOLIA_INDEX_NAME);
        return index.saveObject(works);
    } else {
        return null
    }
});

exports.onWorksRemoved = functions.firestore.document('works/{worksId}').onDelete((snap, context) => {
    return client.initIndex(ALGOLIA_INDEX_NAME).deleteObject(context.params.worksId);
});

exports.onPlaceCreated = functions.firestore.document('places/{placeId}').onCreate((snap, context) => {
    const place = snap.data();
    if (place) {
        place.objectID = context.params.placeId;
        const index = client.initIndex(ALGOLIA_INDEX_NAME);
        return index.saveObject(place);
    } else {
        return null
    }
});

exports.onPlaceRemoved = functions.firestore.document('places/{placeId}').onDelete((snap, context) => {
    return client.initIndex(ALGOLIA_INDEX_NAME).deleteObject(context.params.placeId);
});
