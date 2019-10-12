import types from "../types";
import mediaService from '../../services/mediaService'



export const createAction = (data , type = '') => {
    return {
      type,
      data
    }
  };

  // -----------------------------------------------------------------------------
  export const getYoutubeResults = (term) => {    
    return (dispatch) => {
      return  mediaService.getYoutubeResults(term)
        .then(response => {          
          dispatch(createAction(response, types.FETCH_YOUTUBE_RESULTS))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const getwikiInfo = (term) => {    
    return (dispatch) => {
      return  mediaService.getwikiInfo(term)
        .then(response => {          
          dispatch(createAction(response, types.FETCH_WIKI_RESULTS))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  