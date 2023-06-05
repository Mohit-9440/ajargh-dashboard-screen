import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarFilterButton} from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import "./datagrid.css";
import rowData from "./rowData.json";
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
    renderCell: (params) => (
      <div style={{ whiteSpace: "pre-wrap" }}>
        <div className="datagrid-name">{params.row.name}</div>
        {/* <br /> */}
        <div className="datagrid-p">{params.row.p}</div>
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
  },
];

export default function DataGrids() {
  // const [search, setSearch] = React.useState("");
  const [rows, setRows] = React.useState();
  // React.useEffect(() => {
  //   search !== "" &&
  //     setRows(
  //       rows.filter((e) =>
  //         e.firstName?.toLowerCase()?.includes(search?.toLowerCase())
  //       )
  //     );
  // }, [search]);

  // console.log(rows)

  return (
    <Box sx={{ width: "100%" }}>
      {/* <TextField value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      <DataGrid
        rows={rowData}
        columns={columns}
        // initialState={{
        //   pinnedColumns: {
        //     left: ['day'],
        //   },
        // }}
        autoHeight
        disableRowSelectionOnClick
        hideFooter
        showCellVerticalBorder
        showColumnVerticalBorder
        disableColumnReorder
        classes={{
          footerContainer: "data-grid-footer",
        }}
        // components={{
        //   Header: () => (
        //     <div className="grid-header">
        //       <GridToolbar>
        //         <GridToolbarFilterButton />
        //       </GridToolbar>
        //     </div>
        //   ),
        // }}
      />
    </Box>
  );
}
