import { createStore } from 'redux';
import reducers from './reducers';

import { persistStore } from 'redux-persist'

import { StateProps as CountProps } from './ducks/count';

export interface RootStateProps {
  count: CountProps;
}

const store = createStore(reducers);

export const persistor = persistStore(store); 

export default store;