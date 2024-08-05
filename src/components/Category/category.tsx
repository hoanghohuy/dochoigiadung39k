export default function Category() {
  return (
    <div className="mt-8">
        <div className="max-w-[1200px] mx-auto sm:px-4">
            <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
                <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
            </svg>
            <h2 className="text-[20px] font-[600]">DANH MỤC</h2>
            </div>
            <div className="flex mt-4 gap-8 sm:gap-4">
                <div className="w-[20%] rounded-md shadow-sm relative overflow-hidden sm:w-[50%]">
                    <img className="aspect-square w-full object-cover" src="/category/do-choi-tre-em.jpg" />
                    <div className="text-center bg-blue-400 py-1 text-white text-[18px]">Đồ chơi trẻ em</div>
                </div>
                <div className="w-[20%] rounded-md shadow-sm relative overflow-hidden sm:w-[50%]">
                    <img className="aspect-square w-full object-cover" src="/images/1.jpg" />
                    <div className="text-center bg-blue-400 py-1 text-white text-[18px]">Đồ gia dụng</div>
                </div>
            </div>
        </div>
    </div>
  )
}
