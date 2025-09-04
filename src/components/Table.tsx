import useTableData from "./useTableData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { type Item } from "./useTableData";
import { Table as MUITable,TableCell,TableContainer, TableHead, TableRow } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { type GridColDef } from "@mui/x-data-grid";

export default function Table() {
  const { columns, data } = useTableData();
  const table = useReactTable<Item>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  

const column=table.getHeaderGroups().map(item=>item.headers.map(item=>item.column.columnDef.header));
const MUIcolumn: GridColDef[] = [];
column[0].map((item)=>MUIcolumn.push({
  headerName: item?.toString(), width: 200,
  field: item?.toString()
}))


console.log(table.getRowModel().rows[0].original.supplier)

const rows=[
  {id:1,Title:"MOTOR",Supplier:"BRS"},{id:2,Title:"plc",Supplier:"simerkom"}
]

  return (

<DataGrid columns={MUIcolumn} rows={rows}></DataGrid>
  )
}

