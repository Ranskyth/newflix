interface props{
    id?:string
    backdrop_path?:string
    title?:string
}

export const CardFilme = ({backdrop_path,title}:props) => {
    
    return(
        <div className="bg-[#181818] dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-72 w-64">
        <img src={`${process.env.NEXT_PUBLIC_API_BASE_IMAGES}/${backdrop_path}`} alt="..." className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button

            className="mt-3 px-4 py-2 bg-[#464646] text-white rounded-lg hover:bg-[#464646a8] transition"
          >
            Detalhes
          </button>
        </div>
      </div>
    )
}
