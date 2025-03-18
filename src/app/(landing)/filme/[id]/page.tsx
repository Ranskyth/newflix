'use client'

import { contextApp } from "@/app/_components/contextApp"
import axios from "axios"
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"


interface FilmeProps{
    id:number,
    overview:string
    backdrop_path:string
    title:string
    vote_average:number
    vote_count:number  
}

const Page = () => {

    const [data, setdata] = useState<FilmeProps>({} as FilmeProps)
 
    const {idioma} = useContext(contextApp)

    const params = useParams<{id:string}>()

   console.log(params.id)

   useEffect(() => {
    axios({method:"GET",url:`${process.env.NEXT_PUBLIC_API_BASE_FILMES}/${params.id}?language=${idioma}`, headers:{Authorization:`Bearer ${process.env.NEXT_PUBLIC_TOKEN_API}`}})
    .then(res => {setdata(res.data); console.log(res.data)})
    .catch(error => console.log(error))

   },[idioma])

   return(
    <>
        <div className="flex flex-col gap-12 items-center">
            <div>
                <img src={`${process.env.NEXT_PUBLIC_API_BASE_IMAGES}/${data.backdrop_path}`} alt="..." />
            </div>
            <div className={data.title ? `border-2 justify-center flex rounded-4xl p-8 w-[75%]`: ``}>
                <h1 className="font-bold text-3xl">{data.title}</h1>
            </div>
            <div className={data.overview ? `border-2 items-center flex gap-6 rounded-4xl p-16 w-[75%]`: `hidden`}>
            <h1 className="font-bold text-4xl">Descrição</h1>
            <p className="text-white">
                {data.overview}
            </p>
            </div>
                
        </div>
    </>
   )

}

export default Page