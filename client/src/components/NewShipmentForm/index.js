import React, {useState} from 'react';

//---MATERIAL UI IMPORTS---//
import {Box, Input, IconButton, FilledInput, OutlinedInput, InputLabel, InputAdornment, FormHelperText, FormControl, TextField} from '@mui/material';

const NewShipmentForm = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
      <h2>NEW SHIPMENT DETAILS</h2>
      <FormControl variant="outlined">
        <InputLabel htmlFor="standard-adornment-job">Job#</InputLabel>
        <Input
          id="standard-adornment-job"
          sx={{ m: 2, width: '800px'}}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="standard-adornment-po">PO</InputLabel>
        <Input
          id="standard-adornment-po"
          sx={{ m: 2, width: '800px'}}
        />  
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="standard-adornment-bl">BL</InputLabel>
        <Input
          id="standard-adornment-bl"
          sx={{ m: 2, width: '800px'}}
        />  
      </FormControl>
    </Box>
  )
}

export default NewShipmentForm;