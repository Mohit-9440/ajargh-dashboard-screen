import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
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
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];


export default function DataGrids() {
    const [search, setSearch] = React.useState('')
    const [rows, setRows] = React.useState([
      { id: 1, lastName: 'Snow', firstName: 'Jon', placedOn: 1/12/2012 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', placedOn: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', placedOn: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', placedOn: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', placedOn: null },
      { id: 6, lastName: 'Melisandre', firstName: null, placedOn: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', placedOn: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', placedOn: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', placedOn: 65 },
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
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}