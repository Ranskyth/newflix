

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useContext } from "react"
import { contextApp } from "./contextApp"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export function SelectLang() {

    const {setIdioma} = useContext(contextApp)
    const searchParams = useSearchParams()
    const router = useRouter()
    const lang = new URLSearchParams(searchParams.toString())


    const currentLang = (langs:string) => {
        lang.set("lang",langs)
       
        router.push(`?${lang.toString()}`)
        setIdioma(String(lang.get("lang")))
        
    }

  return (
    <Select onValueChange={(e) => currentLang(e)}>
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="lang" />
      </SelectTrigger>
      <SelectContent className="bg-[#2c2c2c] ">
        <SelectGroup>
          <SelectLabel>Lang</SelectLabel>
          <SelectItem  value="pt-br">pt-br</SelectItem>
          <SelectItem  value="us-en">us-en</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
