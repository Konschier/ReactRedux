import { combineReducers } from 'redux';

import count from './ducks/count';

const reducers = combineReducers({ count });

export default reducers;