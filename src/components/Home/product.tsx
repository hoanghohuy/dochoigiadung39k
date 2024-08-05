const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
export default function Product() {
  return (
    <div className="max-w-[1200px] mx-auto mt-8 sm:px-4">
      <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
      </svg>
      <h2 className="text-[20px] font-[600]">HÌNH ẢNH SẢN PHẨM</h2>
      </div>
        
        <div className="mt-4 flex flex-wrap gap-6 sm:gap-4">
            {arr.map(item => (
                <div className="w-[18%] relative overflow-hidden sm:w-[47%]">
                    <img className="rounded-lg hover:scale-110" src={`/images/${item}.jpg`} alt="do choi do gia dung 39k" />
                    {/* <div className="absolute right-4 top-4 bg-yellow-400 text-red-600 font-[600] text-[20px] px-2">Hàng mới về</div> */}
                </div>
            ))}
        </div>
    </div>
  )
}
