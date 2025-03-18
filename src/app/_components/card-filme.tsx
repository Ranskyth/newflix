import { useRouter } from "next/navigation";

interface props {
  id?: string;
  backdrop_path?: string | null | undefined;
  title?: string;
}

export const CardFilme = ({ backdrop_path, title, id }: props) => {
  const router = useRouter();



  return (
    <div className="bg-[#181818] dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-72 w-64">
      <img
        src={backdrop_path ? `${process.env.NEXT_PUBLIC_API_BASE_IMAGES}/${backdrop_path}` : "https://fakeimg.pl/480x320?text=em+breve&font=bebas"}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <button
        
          onClick={() => {
            router.push(`/filme/${id}`);
          }}
          disabled={backdrop_path == null}

          className={backdrop_path ? `mt-3 px-4 py-2 bg-[#464646] text-white rounded-lg hover:bg-[#464646a8] transition` : `mt-3 px-4 py-2 text-white rounded-lg bg-[#2929297a]`}
        >
          Detalhes
        </button>
      </div>
    </div>
  );
};
