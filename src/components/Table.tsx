import React from 'react'
import { supabase } from '../supabaseClient'
import { useQuery } from '@tanstack/react-query'

export interface Post{
    id:number,
    created_at:string,
    title:string,
    supplier:string
}

 const fetchPosts=async():Promise<Post[]>=>{
        const {data,error}=await supabase.from("posts").select("*")
        if(error) throw new Error(error.message)
        return data as Post[]
    }

export default function Table() {
const {data,error,isLoading}=useQuery({queryKey:["posts"],queryFn:fetchPosts})
   
  return (
    <div>{data?.map((item)=><div>{item.title} {"  "} {item.supplier}</div>)}</div>
  )
}
