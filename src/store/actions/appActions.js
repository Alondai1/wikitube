import types from "../types";
import userService from '../../services/userService'

export const createAction = (data, type = "") => {
  return {
    type,
    data,
  };
};

//   ------------------------------------------------------------------

export const setCurrentVideo = videoId => {
  return dispatch => {
    return dispatch(createAction(videoId, types.SET_CURRENT_VIDEO));
  };
};

export const setTheme = theme => {
  return dispatch => {
    return dispatch(createAction(theme, types.SET_THEME));
  };
};

export const handleLogin = (creds) => {    
  return (dispatch) => {
    return  userService.handleLogin(creds)
      .then(response => {          
        dispatch(createAction(response, types.HANDLE_LOGIN))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const handleSignup = (creds) => {    
  return (dispatch) => {
    return  userService.handleSignup(creds)
      .then(response => {          
        dispatch(createAction(response, types.HANDLE_SIGNUP))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const saveToHistory = (term, username) => {    
  return (dispatch) => {
    return  userService.saveToHistory(term, username)
      .then(response => {          
        dispatch(createAction(response, types.SAVE_TO_HISTORY))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const clearHistory = (username) => {    
  return (dispatch) => {
    return  userService.clearHistory(username)
      .then(response => {          
        dispatch(createAction(response, types.CLEAR_HISTORY))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getUserDB = () => {    
  return (dispatch) => {
    return  userService.getUserDB()
      .then(response => {          
        dispatch(createAction(response, types.GET_USER_DB))
      })
      .catch(error => {
        throw(error);
      });
  };
};




