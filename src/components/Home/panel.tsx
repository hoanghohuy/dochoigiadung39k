import React from 'react'

export default function Panel() {
  return (
    <div className='text-center relative'>
      <img className='w-full brightness-50 sm:h-[240px] object-cover' src='/front-store.png' />
      <div className='w-full py-2 absolute block top-[50%] translate-y-[-50%]'>
          <h1 className='mt-2 text-[60px] font-[800] text-yellow-300 sm:text-[20px]'>THẾ GIỚI ĐỒ CHƠI - ĐỒ GIA DỤNG</h1>
          <div className='mb-2 text-[48px] font-[700] text-green-300 sm:text-[14px]'>CHUYÊN CUNG CẤP SĨ & LẺ CÁC MẶT HÀNG ĐỒ GIA DỤNG</div>
      </div>
      {/* <div className='absolute bottom-0 w-full flex justify-between bg-blue-800 px-4 py-2 text-white'>
          <div className='font-[600]'>ĐC: 363A Nguyễn Văn Khối, P.8, Q. Gò Vấp</div>
          <div className='font-[600]'>ĐT: 0968 356 389</div>
      </div> */}
    </div>
  )
}
