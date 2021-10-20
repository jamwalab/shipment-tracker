import React, {useState, useEffect} from "react";
import serverApiCall from "../services/shipmentData";

import CustomerDropdown from '../components/CustomerDropdown';

import { useSelector, useDispatch } from "react-redux";
import {UPDATE_SHIPMENTS, EDIT_SHIPMENT, GET_ALL_CUSTOMERS} from '../utils/actions';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Input } from '@mui/material';

function Tracker() {
  //---GLOBAL STATE---//
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  //const [allShipments, setShipments] = useState([]);

  //---ON LOAD SETTINGS---//
  useEffect(async () => {
    const shipData = await serverApiCall.getAllShipments().then(resp => {return resp})
    //setShipments(shipData);
    dispatch({
      type: UPDATE_SHIPMENTS,
      savedShipments: shipData
    })

    const customerData = await serverApiCall.getAllCustomers().then(resp => {return resp});
    dispatch({
      type: GET_ALL_CUSTOMERS,
      savedCustomers: customerData
    })
  }, []);

  //---INPUT BOX EDIT SETTINGS START---//
  //---INPUT BOX SAVE ON BLUR---//
  const editDataInputBlur = (rowId, col) => (event) => {
    const data = event.target.value;
    //console.log(col)
    const dataUpload = {[col]: data}
    //add data to closest td
    event.target.closest('td').textContent = `${data}`;
    serverApiCall.editShipments(dataUpload, rowId)

    dispatch({
      type: EDIT_SHIPMENT,
      editData: {rowId, col, data}
    })
    //console.log("Blurrr", event.target.value, rowId, state.savedShipments)
  }

  //---CREATE INPUT BOX ON CLICK---//
  const editDataInputClick = (rowId) => (event) => {
    let data = event.target.innerHTML;
    //console.log(event.target.innerHTML, rowId)
    //add input
    event.target.innerHTML = `<input class="editCellData" value=${data}>`;  
    //focus input
    event.target.querySelector('input').focus();
  }
  //---INPUT BOX EDIT SETTINGS END---//

  /*
  //---DROPDOWN ON CLICK EDIT SETTINGS START---//
  //---SAVE DROPDOWN ON BLUR---//
  const editDropSelectBlur = (rowId, col) => (event) => {
    //const data = event.target.value;
    //console.log(col)
    //const dataUpload = {[col]: data}
    //add data to closest td
    event.target.closest('td').textContent = ``;
    //serverApiCall.editShipments(dataUpload, rowId)

    dispatch({
      type: EDIT_SHIPMENT,
      editData: {rowId, col, data}
    })
    //console.log("Blurrr", event.target.value, rowId, state.savedShipments)
  }

  //---CREATE DROPDOWN ON CLICK---//
  const editDropSelectClick = (rowId) => (event) => {
    let data = event.target.innerHTML;
    //console.log(event.target.innerHTML, rowId)
    //Find Index of the customer
    const index = state.savedCustomers.findIndex(ele => ele.customer_name === data);

    event.target.innerHTML = `<select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>`;  
  }

  //---DROPDOWN ON CLICK EDIT SETTINGS END---//
  */

  console.log(state)
  return (
    <div>
      Tracker zzzzzzzzzzzzzzzzzzzz
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="table-w1">ID</TableCell>
              <TableCell align="center" className="table-w2">STATUS</TableCell>
              <TableCell align="center" className="table-w3">JOB</TableCell>
              <TableCell align="center" className="table-w2">CUSTOMER</TableCell>
              <TableCell align="center" className="table-w4">NOTES</TableCell>
              <TableCell align="center" className="table-w2">PO</TableCell>
              <TableCell align="center" className="table-w2">BL</TableCell>
              <TableCell align="center" className="table-w3">CONTAINER</TableCell>
              <TableCell align="center" className="table-w1">SUBL</TableCell>
              <TableCell align="center" className="table-w2">PORT ETA</TableCell>
              <TableCell align="center" className="table-w2">DEST ETA</TableCell>
              <TableCell align="center" className="table-w2">SUB</TableCell>
              <TableCell align="center" className="table-w2">REL</TableCell>
              <TableCell align="center" className="table-w1">ADD C</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.savedShipments.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" className="table-w1">{row.id}</TableCell>
                <TableCell align="center" className="table-w2">{row.status}</TableCell>
                <TableCell align="center" className="table-w3" onClick={editDataInputClick(row.id)} onBlur={editDataInputBlur(row.id, "job")}>{row.job}</TableCell>
                <TableCell align="center" className="table-w2" ><CustomerDropdown selectedRow={row.customer} rowId={row.id}></CustomerDropdown></TableCell>
                <TableCell align="center" className="table-w4">{row.notes}</TableCell>
                <TableCell align="center" className="table-w2" onClick={editDataInputClick(row.id)} onBlur={editDataInputBlur(row.id, "po")}>{row.po}</TableCell>
                <TableCell align="center" className="table-w2" onClick={editDataInputClick(row.id)} onBlur={editDataInputBlur(row.id, "bl")}>{row.bl}</TableCell>
                <TableCell align="center" className="table-w3">{row.container}</TableCell>
                <TableCell align="center" className="table-w1" onClick={editDataInputClick(row.id)} onBlur={editDataInputBlur(row.id, "sublocation")}>{row.sublocation}</TableCell>
                <TableCell align="center" className="table-w2">{row.portEta}</TableCell>
                <TableCell align="center" className="table-w2">{row.destEta}</TableCell>
                <TableCell align="center" className="table-w2">{row.submitted}</TableCell>
                <TableCell align="center" className="table-w2">{row.release}</TableCell>
                <TableCell align="center" className="table-w1">{row.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default Tracker;

/*<div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[50]}
          checkboxSelection
        />
      </div>*/