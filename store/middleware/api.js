import axios from 'axios';
import * as actions from './apiActions'

const api = ({ dispatch, getState}) => next => async action => {
  if(action.type !== actions.apiCallBegan.type) return next(action)
  const {url, method, body, headers, onSuccess, onError, onStart, onValidationError} = action.payload

  if(onStart) dispatch({type: onStart})
  next(action) // Avoid swallowing up the first action 'apiCallBegan'
  
  try {
    const response = await axios[method](url, JSON.parse(body), JSON.parse(headers))
    // General success action
    dispatch(actions.apiCallSuccess(response.data))
    // Specific
    if (onSuccess) {
      dispatch({type: onSuccess, payload: response.data})
    } 
  } catch(error) {
    // For server validation errors
    if(error.response !== undefined) {
      if(error.response.status === 422) {
        dispatch({type: onValidationError, payload: error.response.data})
      }
    }
    // General error action
    dispatch(actions.apiCallFailed(error.message))
    // Specific error action
    if(onError) dispatch({type: onError, payload: error.message})
  }
}

export default api