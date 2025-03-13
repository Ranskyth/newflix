'use client'

import { createContext, ReactNode, useState } from "react";

interface Props{
    page:number
    setPage:(page:number)=>void
    currentPages:()=> void
    previewPages:() => void
}

export const contextApp = createContext({} as Props);

export const ContextAppProvider = ({children}:{children:ReactNode}) => {
    

    const [page, setPage] = useState<number>(1);

    const currentPages = () => {
        setPage(prev => prev + 1)
    }

    const previewPages = () => {
        setPage(prev => prev - 1)
    }

    return (
        <contextApp.Provider value={{page, setPage, currentPages,previewPages}}>{children}</contextApp.Provider>
    )

}