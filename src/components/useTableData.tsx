import { useMemo, useState } from "react";
import { supabase } from "../supabaseClient";
import { useQuery } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";

export type Item = {
  id: number;
  created_at: string;
  title: string;
  supplier: string;
};

const columnHelper = createColumnHelper<Item>();

const fetchPosts = async (): Promise<Item[]> => {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) throw new Error(error.message);
  return data as Item[];
};

export default function useTableData() {
  const {
    data: Items,
    
    
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //@ts-expect-error Items type not OK
  const [data] = useState<Item[]>(Items);

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", { id: "title", header: "title" }),
      columnHelper.accessor("supplier",{id:"supplier",header:"supplier"}),
      columnHelper.accessor("id",{id:"id",header:"id"}),
      columnHelper.accessor("created_at",{id:"created_at",header:"created_at"}),
    ],
    []
  );

  return { columns, data };
}
