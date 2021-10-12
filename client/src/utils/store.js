import { createStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const initialState = {
  savedShipments: []
}

const store = createStore(reducer, initialState);

export default store;
