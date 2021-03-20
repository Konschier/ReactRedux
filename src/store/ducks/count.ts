import { Reducer } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/es/storage';

export enum ActionTypes {
  plus = 'increment/count',
  minus = 'decrement/count',
  reset = 'reset/count'
}

export interface StateProps {
  count: number;
}

export interface ActionProps {
  type: ActionTypes;
}

const initialState = {
  count: 0
}

const reducer: Reducer<StateProps, ActionProps> = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.plus:
      return { ...state, count: state.count + 1 }
    case ActionTypes.minus:
      return { ...state, count: state.count - 1 }
    case ActionTypes.reset:
      return initialState
    default:
      return state;
  }
}

export const actions = {
  plus: () => ({ type: ActionTypes.plus }),
  minus: () => ({ type: ActionTypes.minus }),
  reset: () => ({ type: ActionTypes.reset }),
};

const count = persistReducer({ key: 'count-data', storage }, reducer)

export default count