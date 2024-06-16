import React from 'react'

const Navigation = () => {
  return (
    <div className='w-full text-white h-[39px] bg-third'>
      <div className='w-1100 m-auto h-full'>
          <ul className='flex gap-3 items-center'>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Trang chủ</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Cho thuê phòng trọ</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Nhà cho thuê</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Cho thuê căn hộ</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Mặt bằng, văn phòng</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Tìm người ở ghép</li>
            <li className='py-[9px] cursor-pointer hover:bg-secondary text-[14px] font-medium'>Bảng giá dịch vụ</li>
          </ul>
      </div>
    </div>
  )
}

export default Navigation
