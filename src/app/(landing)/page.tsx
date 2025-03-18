"use client";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CardFilme } from "../_components/card-filme";

import { contextApp } from "../_components/contextApp";
import { Pagination } from "../_components/pagination";

interface FilmeProps{
  id:number
  backdrop_path:string
  title:string
  vote_average:number
  vote_count:number  
}

export default function Home() {

  const [data, setdata] = useState<FilmeProps[]>([]);
  
  const {page, category, idioma} = useContext(contextApp)

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API_BASE_FILMES}/${category}?language=${idioma}&page=${page}`,
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}` },
    })
      
      .then((res) => setdata(res.data.results))
      .catch((error) => console.log(error));

      
  },[page, category, idioma])

  return (
    <div>
      <div className="flex flex-wrap gap-6 px-32 justify-center">
        {data.map((x) => (
          <div key={x.id}>
            <CardFilme backdrop_path={x.backdrop_path} id={String(x.id)} title={x.title}/>
          </div>
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={page} totalPages={500}/>

    </div>
  );
}
