import {
  UPDATE_SHIPMENTS
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SHIPMENTS:
      return {

      }
    
    default:
      return state;
  }
}