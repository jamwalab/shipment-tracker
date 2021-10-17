import React, {useState, useEffect} from "react";
import serverApiCall from "../services/shipmentData";

import { useSelector, useDispatch } from "react-redux";
import {UPDATE_SHIPMENTS} from '../utils/actions';

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Input } from '@mui/material';

function Tracker() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  //const [allShipments, setShipments] = useState([]);

  useEffect(async () => {
    const shipData = await serverApiCall.getAllShipments().then(resp => {return resp})
    //setShipments(shipData);
    dispatch({
      type: UPDATE_SHIPMENTS,
      savedShipments: shipData
    })
  }, []);

  const editDataCellBlur = (event) => {
    let jobNumber = event.target.value;
    console.log("Blurrr", event.target.value)
    event.target.closest('td').textContent = `${jobNumber}`;
  }

  const editDataCellClick = (event) => {
    let jobNumber = event.target.innerHTML;
    event.target.innerHTML = `<input class="editCellData" autofocus value=${jobNumber} />`;  
    event.target.querySelector('input').focus();
  }

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
                <TableCell align="center" className="table-w3" onClick={editDataCellClick} onBlur={editDataCellBlur}>{row.job}</TableCell>
                <TableCell align="center" className="table-w2">{row.customer}</TableCell>
                <TableCell align="center" className="table-w4">{row.notes}</TableCell>
                <TableCell align="center" className="table-w2">{row.po}</TableCell>
                <TableCell align="center" className="table-w2">{row.bl}</TableCell>
                <TableCell align="center" className="table-w3">{row.container}</TableCell>
                <TableCell align="center" className="table-w1">{row.sublocation}</TableCell>
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