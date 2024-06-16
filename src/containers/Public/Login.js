import React from 'react'
import InputForm from '../../components/InputForm'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-5 bg-white w-600 pt-[30px] px-[30px] pb-[100px] rounded-md border border-[#dedede]'>
      <h1 className='text-2xl font-semibold mb-3'>Đăng nhập</h1>
      <div className='flex flex-col gap-5 w-full'>
        <InputForm label='SỐ ĐIỆN THOẠI'/>
        <InputForm label='MẬT KHẨU'/>
        <Button text="Đăng nhập" bgColor='bg-third' textColor='text-white' full/>
      </div>
      <div className='flex justify-between mt-4'>
        <Link className='text-blue-500 hover:text-red-500' to=''>Bạn quên mật khẩu ?</Link>
        <Link className='text-blue-500 hover:text-red-500' to='/register'>Tạo tài khoản mới</Link>
      </div>
    </div>
  )
}

export default Login
