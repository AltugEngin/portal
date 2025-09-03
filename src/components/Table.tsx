import useTableData from "./useTableData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { type Item } from "./useTableData";

export default function Table() {
  const { columns, data } = useTableData();
  const table = useReactTable<Item>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());
  return <div></div>;
}
