import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {FormControl, Select, MenuItem } from '@mui/material';

import serverApiCall from "../../services/shipmentData";
import {EDIT_SHIPMENT} from '../../utils/actions';

export default function CustomerDropdown(client) {
  //---GLOBAL STATE---//
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = (rowId) => (event) => {
    let index = state.savedCustomers.findIndex(ele => ele.customer_name === event.target.value);
    

    const dataUpload = {"customer_id": state.savedCustomers[index].id}
/////---FOR SERVER SAVE IT HAS TO BE CUSTOMER ID
    serverApiCall.editShipments(dataUpload, rowId)
    console.log(dataUpload, rowId)
    dispatch({
      type: EDIT_SHIPMENT,
      editData: {rowId, col: "customer", data: event.target.value}
    })
  }

  return (

    <FormControl variant="standard">
      <Select
        id="demo-simple-select-standard"
        label="Customer"
        defaultValue={client.selectedRow}
        onChange={handleChange(client.rowId)}
      >
        {state.savedCustomers.map((customer) => {
          return (
            <MenuItem value={customer.customer_name} key={customer.customer_name}>{customer.customer_name}</MenuItem>
        )})}
      </Select>
    </FormControl>

  )
}