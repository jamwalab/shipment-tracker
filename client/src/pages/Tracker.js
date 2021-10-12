import React from "react";

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(id, job, customer, notes, po) {
  return { id, job, customer, notes, po };
}

const rows = []

function Tracker() {
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