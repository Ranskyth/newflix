"use client";

import { useContext } from "react";
import { contextApp } from "./contextApp";
import { Button } from "@/components/ui/button";
import { SelectLang } from "./select-lang";
import Link from "next/link";

export function Header() {

  const {
    currentPopular,
    currentTop_rated,
    currentNow_playing,
    currentUpcoming,
  } = useContext(contextApp);

  return (
    <header className="bg-[#2c2c2c] mb-10 text-white p-4 flex justify-between items-center shadow-md">
      <Link href={"/"}> 
        <h1 className="text-2xl font-bold">Filmes</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Button
              onClick={currentNow_playing}
              className="hover:text-gray-400 text-white transition"
              variant={"link"}
            >
              Inicio
            </Button>
          </li>
          <li>
            <Button
              onClick={currentPopular}
              className="hover:text-gray-400 text-white transition"
              variant={"link"}
            >
              Populares
            </Button>
          </li>
          <Button
            onClick={currentTop_rated}
            className="hover:text-gray-400 text-white transition"
            variant={"link"}
          >
            Melhor Avaliado
          </Button>
          <li>
            <Button
              onClick={currentUpcoming}
              className="hover:text-gray-400 text-white transition"
              variant={"link"}
            >
              Por Vir
            </Button>
          </li>
          <SelectLang/>
        </ul>
      </nav>
    </header>
  );
}
