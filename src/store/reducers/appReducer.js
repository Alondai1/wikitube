import types from "../types";

export default function 
    appReducer(state = {currentVideo:null, currentTheme:'', currentUser: null, userDB:null}, action) {
    switch (action.type) {
        case types.SET_CURRENT_VIDEO:
        return {...state , currentVideo: action.data}; 
        case types.SET_THEME:
        return {...state , currentTheme: action.data}; 
        case types.HANDLE_LOGIN:
        return {...state , currentUser: action.data}; 
        case types.HANDLE_SIGNUP:
        return {...state , currentUser: action.data}; 
        case types.SAVE_TO_HISTORY:
        return {...state , currentUser: action.data}; 
        case types.CLEAR_HISTORY:
        return {...state , currentUser: action.data}; 
        case types.GET_USER_DB:
        return {...state , userDB: action.data}; 
      default:
        return state;
    }
  }