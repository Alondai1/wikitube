import types from "../types";

export default function 
    mediaReducer(state = {youtubeResults: null, wikiInfo: null}, action) {
    switch (action.type) {
        case types.FETCH_YOUTUBE_RESULTS:
        return {...state , youtubeResults: action.data}; 
        case types.FETCH_WIKI_RESULTS:
        return {...state , wikiInfo: action.data}; 
      default:
        return state;
    }
  }