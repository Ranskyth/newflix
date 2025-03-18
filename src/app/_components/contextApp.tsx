"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useState } from "react";

interface Props {
  page: number;
  category: string | null | undefined;
  idioma: string;
  setIdioma: (idioma: string) => void;
  currentNow_playing: () => void;
  currentUpcoming: () => void;
  currentPopular: () => void;
  currentTop_rated: () => void;
  setPage: (page: number) => void;
  currentPages: (page: number) => void;
  previewPages: (page: number) => void;
}

export const contextApp = createContext({} as Props);

export const ContextAppProvider = ({ children }: { children: ReactNode }) => {

  const searchParams = useSearchParams();
  const url = new URLSearchParams(searchParams);
  
  const [page, setPage] = useState<number>(Number(url.get("page") ?? 1));
  const [category, setCategory] = useState<string | null | undefined>(
    "top_rated"
  );
  const router = useRouter();


  const [idioma, setIdioma] = useState<string>(String(url.get("lang") ?? "pt-br"));
  const currentNow_playing = () => setCategory("now_playing");
  const currentUpcoming = () => setCategory("upcoming");
  const currentPopular = () => setCategory("popular");
  const currentTop_rated = () => setCategory("top_rated");

  const currentPages = (e: number) => {
    url.set("page", String(e));

    router.push(`?${url.toString()}`);
    setPage(Number(url.get("page")));
  };

  const previewPages = (e: number) => {
    url.set("page", String(e));

    router.push(`?${url.toString()}`);
    setPage(Number(url.get("page")));
  };

  return (
    <contextApp.Provider
      value={{
        page,
        category,
        idioma,
        setIdioma,
        currentNow_playing,
        currentUpcoming,
        currentTop_rated,
        currentPopular,
        setPage,
        currentPages,
        previewPages,
      }}
    >
      {children}
    </contextApp.Provider>
  );
};
