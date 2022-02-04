import { combineReducers } from 'redux';
import appReducer from './slices/app';
import formReducer from './slices/form';
import modalReducer from './slices/modal'

export default combineReducers({
    app: appReducer,
    form: formReducer,
    modal: modalReducer
});