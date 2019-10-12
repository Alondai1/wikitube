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



