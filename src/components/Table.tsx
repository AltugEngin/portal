import useTableData from "./useTableData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { type Item } from "./useTableData";
import { Table as MUITable,TableCell,TableContainer, TableHead, TableRow,Paper,Box } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { type GridColDef,type GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";

export default function Table() {
  const { columns, data } = useTableData();
  const table = useReactTable<Item>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  

const column=table.getHeaderGroups().map(item=>item.headers.map(item=>item.column.columnDef.header));
const MUIcolumn: GridColDef[] = [];
const [MUIdata,setMUIdata]=useState<GridRowsProp>(data)
column[0].map((item)=>MUIcolumn.push({
  headerName: item?.toString(), width: 200,
  field: item?.toString()
}))
//data.map((item)=>MUIdata.push({id:item.id,Title:item.title,Supplier:item.supplier}))




  return (




<DataGrid columns={MUIcolumn} rows={MUIdata}></DataGrid>




  )
}

