import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'names',
    headerName: 'name',
    width: 350,
    editable: true,
  },
  {
    field: 'activeOrders',
    headerName: 'Active Orders',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: true,
  },
  {
    field: 'placedOn',
    headerName: 'Placed on',
    width: 110,
    editable: true,
  },
  {
    field: 'options',
    headerName: 'Options',
    width: 110,
    editable: true,
  },
];


export default function DataGrids() {
    const [search, setSearch] = React.useState('')
    const [rows, setRows] = React.useState([
      { id: 1,names:'', activeOrders: 756, amount: 9, placedOn: 1/12/2012, options: '' },
      { id: 2,names:'', activeOrders: 34, amount: 3000, placedOn: 42, options: '' },
      { id: 3,names:'', activeOrders: 1897, amount: 49, placedOn: 45, options: '' },
      { id: 4,names:'', activeOrders: 89, amount: 299, placedOn: 16, options: '' },
      { id: 5,names:'', activeOrders: 276, amount: 29, placedOn: 23, options: '' },
      { id: 6,names:'', activeOrders: 1098, amount: 135, placedOn: 150, options: '' },
      { id: 7,names:'', activeOrders: 4298, amount: 48, placedOn: 44, options: '' },
      { id: 8,names:'', activeOrders: 1928, amount: 90, placedOn: 36, options: '' },
      { id: 9,names:'', activeOrders: 640, amount: 167, placedOn: 65, options: '' },
    ]);
React.useEffect(() => {
    setRows(rows.filter(e => e.firstName?.toLowerCase()?.includes(search?.toLowerCase())))

}, [search])

  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <TextField
    value={search}
    onChange={(e) => setSearch(e.target.value)}
     />
      <DataGrid
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //       pageSize: 5,
        //     },
        //   },
        // }}
        scrollbarSize={(7)}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}