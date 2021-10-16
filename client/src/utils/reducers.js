import {
  UPDATE_SHIPMENTS
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SHIPMENTS:
      return {
        ...state,
        savedShipments: [...state.savedShipments, ...action.savedShipments]
      }
    
    default:
      return state;
  }
}