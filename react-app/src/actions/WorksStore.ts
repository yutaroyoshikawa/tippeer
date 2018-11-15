import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory();

export const setArtistIcon = actionCreator<number>('SET_ARTIST_ICON');
export const setArtistName = actionCreator<string>('SET_ARTIST_NAME');
export const setId = actionCreator<number>('SET_ID');
export const setThumbnail = actionCreator<string>('SET_THUMBNAIL');
export const setWorksName = actionCreator<string>('SET_WORKS_NAME');
