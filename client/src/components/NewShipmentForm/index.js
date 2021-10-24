import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

//---MATERIAL UI IMPORTS---//
import {Box, Input, IconButton, FilledInput, OutlinedInput, InputLabel, InputAdornment, FormHelperText, FormControl, TextField, TextareaAutosize, Select, MenuItem, Button} from '@mui/material';
import {ThemeProvider, createTheme } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import serverApiCall from "../../services/shipmentData";

const theme = createTheme({

});

const NewShipmentForm = () => {
  //---GLOBAL STATE---//
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [formData, updateFormData] = useState({
    job: "",
    customer: "",
    notes: "",
    po: "",
    bl: "",
    subL: "",
    portEta: null,
    destEta: null,
    submitted: null,
    errorState: false
  })

  const handleDateChange = (type, newDate) => {
    updateFormData({ ...formData, [type]: newDate });
    console.log(formData)
  }

  const handleChange = (prop) => (event) => {
    if (prop === "customer") {
      console.log("aaaaa", formData.errorState);
      updateFormData({...formData, [prop]: event.target.value, "errorState": false})
    }
    else {
      updateFormData({ ...formData, [prop]: event.target.value });
    }
    console.log(formData)
  };

  const handleSubmit = () => {
    console.log("submit")
    if (formData.customer === "") {
      updateFormData({ ...formData, "errorState": true });
    }
    else {
      let indexCus = state.savedCustomers.findIndex(ele => ele.customer_name === formData.customer);
      let dataUpload = {
        "customer_id": state.savedCustomers[indexCus].id,
        "job": formData.job,
        "notes": formData.notes,
        "po": formData.po,
        "bl": formData.bl,
        "sublocation_id": formData.subL,
        "portEta": formData.portEta,
        "destEta": formData.destEta,
        "submitted": formData.submitted,
        "status_id": 1,
        "user_id": 1
      }

      serverApiCall.addNewShipments(dataUpload)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
        <h2>NEW SHIPMENT DETAILS</h2>
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-job" sx={{ mx: 2}}>Job#</InputLabel>
            <Input
              id="standard-adornment-job"
              value={formData.job}
              onChange={handleChange('job')}
              sx={{ m: 1, width: '400px'}}
            />
          </FormControl>
          <FormControl variant="standard" error={formData.errorState}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ mx: 3}}>Customer</InputLabel>
            <Select
              id="demo-simple-select-standard"
              labelId="demo-simple-select-standard-label"
              label="Customer"
              value={formData.customer}
              onChange={handleChange('customer')}
              sx={{ m: 1, width: '400px'}}
            >
              {state.savedCustomers.map((customer) => {
                return (
                  <MenuItem value={customer.customer_name} key={customer.customer_name}>{customer.customer_name}</MenuItem>
              )})}
            </Select>
            <FormHelperText sx={{ mx: 3}} style={{ display: formData.errorState ? "block" : "none" }} >Customer name is required!!</FormHelperText>
          </FormControl>
        </div>
        <TextField
          placeholder="NOTES"
          multiline
          rows={2}
          sx={{ m: 2, width: '800px'}}
        />
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-po" sx={{ mx: 2}}>PO</InputLabel>
            <Input
              id="standard-adornment-po"
              sx={{ m: 2, width: '250px'}}
            />  
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-bl" sx={{ mx: 2}}>BL</InputLabel>
            <Input
              id="standard-adornment-bl"
              sx={{ m: 2, width: '250px'}}
            />  
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="standard-adornment-job" sx={{ mx: 2}}>SubL</InputLabel>
            <Input
              id="standard-adornment-job"
              sx={{ m: 2, width: '250px'}}
            />
          </FormControl>
        </div>
        <TextField
          placeholder="CONTAINERS"
          multiline
          rows={2}
          sx={{ m: 1, width: '800px'}}
        />
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              label="Port ETA"
              value={formData.portEta}
              onChange={(newValue) => {
                handleDateChange("portEta", newValue)
              }}
              /*{(newValue) => {
                setDateValue(newValue);
              }}*/
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              label="Destination ETA"
              value={formData.destEta}
              onChange={(newValue) => {
                handleDateChange("destEta", newValue)
              }}
              /*{(newValue) => {
                setDateValue(newValue);
              }}*/
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              label="Submitted"
              value={formData.submitted}
              onChange={(newValue) => {
                handleDateChange("submitted", newValue)
              }}
              /*{(newValue) => {
                setDateValue(newValue);
              }}*/
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <TextField
          placeholder="COMMENTS"
          multiline
          rows={2}
          sx={{ m: 1, width: '800px'}}
        />
        <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
      </Box>
    </ThemeProvider>
  )
}

export default NewShipmentForm;