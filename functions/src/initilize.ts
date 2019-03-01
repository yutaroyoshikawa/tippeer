import * as algoliasearch from 'algoliasearch';
import * as functions from 'firebase-functions';

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.app_key;

export default algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);