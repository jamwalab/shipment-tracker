import {
  UPDATE_SHIPMENTS,
  EDIT_SHIPMENT,
  GET_ALL_CUSTOMERS
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SHIPMENTS:
      return {
        ...state,
        savedShipments: [...action.savedShipments]
      }

    case EDIT_SHIPMENT:
      console.log(action.editData)
      const index = state.savedShipments.findIndex(ele => ele.id === action.editData.rowId)
      //console.log(state)
      //console.log(state.savedShipments[index], action.editData)
      state.savedShipments[index][action.editData.col] = action.editData.data;
      console.log(state)
      return state;

    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        savedCustomers: [...action.savedCustomers]
      }

    default:
      return state;
  }
}