import * as React from "react";
import {useState} from 'react';
import Box from "@mui/material/Box";
import { DataGrid} from "@mui/x-data-grid";
import "./datagrid.css";
import rowData from "./rowData.json";
const handleEdit = (updatedRow, rows, setRows) => {
  const rowIndex = rows.findIndex((r) => r.id === updatedRow.id);

  if (rowIndex !== -1) {
    const updatedRows = [...rows];
    updatedRows[rowIndex] = updatedRow;

    setRows(updatedRows);
    console.log("Updated row:", updatedRow);
  }
};
const columns = [
  {
    field: "logo",
    width: 100,
    type: "image",
    renderCell: (params) => {
      console.log("params", params);
      return (
        <div className="logo-image-wrap">
          <div className="logo-image">
            {params?.row?.logo && (
              <img
                src={require(`../../assets/${params.row.logo}`)}
                alt="logo"
              />
            )}
          </div>
        </div>
      );
    },
  },
  {
    // field: "name",
    // headerName: 'name',
    width: 250,
    type: "name",
    editable: true,
    renderCell: (params) => (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <div className="datagrid-name">
          <input
            type="text"
            value={params.row.name}
            onChange={(e) =>
              handleEdit(
                { ...params.row, name: e.target.value },
                params.api.getRow(params.row.id),
                params.api.setRow
               )
            }
          />
        </div>
        <div className="datagrid-p">
          <input
            type="text"
            value={params.row.p}
            onChange={(e) => handleEdit({ ...params.row, p: e.target.value })}
          />
        </div>
      </div>
    ),
  },
  {
    field: "activeOrders",
    headerName: "Active Orders",
    width: 150,
    editable: true,
    type: "number",
    hide: true
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    editable: true,
    type: "number",
  },
  {
    field: "date",
    headerName: "Placed on",
    width: 110,
    type: "date",
    editable: true,
    valueGetter: (params) => {
      const dateString = params.row.date;
      const dateObject = new Date(dateString);
      return dateObject;
    },
  },
  {
    field: "options",
    headerName: "Options",
    width: 110,
    editable: true,
    renderCell: (params) => {
      return (
        <button
          onClick={() =>
            handleEdit(
              params.row,
              params.api.getRow(params.row.id),
              params.api.setRow
            )
          }
        >
          Click
        </button>
      );
    },
  },
];

export default function DataGrids() {
  const [rows, setRows] = useState(rowData);

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columns}
   
        autoHeight
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
        disableColumnReorder
        classes={{
          footerContainer: "data-grid-footer",
        }}
        renderCell={(params) => {
          return <button onClick={() => handleEdit(params.row)}>Click</button>;
        }}
      />
    </Box>
  );
}
