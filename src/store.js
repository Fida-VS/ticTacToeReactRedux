import { createStore } from 'redux';
import { reducer } from './reducer';
import { initialState } from './reducer';


export const store = createStore(reducer, initialState);
