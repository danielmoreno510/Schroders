import {combineReducers} from 'redux';
import commits from './commitsReducer';

const rootReducer = combineReducers({
  commits,
});

export default rootReducer;
