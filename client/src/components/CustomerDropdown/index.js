import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {FormControl, Select, MenuItem } from '@mui/material';

export default function CustomerDropdown(selectedRow) {
  //---GLOBAL STATE---//
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (

    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select
        id="demo-simple-select-standard"
        label="Customer"
      >
        {state.savedCustomers.map((customer) => {
          const theRow = false;
          if (customer.customer_name === selectedRow) {
            theRow = true;
          }
          return (
            <MenuItem value={customer.customer_name} selected={theRow}>{customer.customer_name}</MenuItem>
        )})}
      </Select>
    </FormControl>

  )
}