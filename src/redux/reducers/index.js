import { combineReducers } from 'redux';
import worldReducer from './worldReducer';

export default combineReducers({
    world: worldReducer
})   