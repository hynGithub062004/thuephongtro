import React, { useState } from 'react'
import InputForm from '../../components/InputForm'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { registerAsyn } from '../../redux/actions/auth'

const Register = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()

  const [payload, setPayload] = useState({
    name: '',
    phone: '',
    password: '',
  })

  const handleRegister = async () => {
    const response = dispath(registerAsyn(payload))
  }
  return (
    <div className='mt-5 bg-white w-600 pt-[30px] px-[30px] pb-[100px] rounded-md border border-[#dedede]'>
      <h1 className='text-2xl font-semibold mb-3'>Đăng kí</h1>
      <div className='flex flex-col gap-5 w-full'>
        <InputForm label='HỌ TÊN' value={payload.name} setValue={setPayload} type={'name'}/>
        <InputForm label='SỐ ĐIỆN THOẠI' value={payload.phone} setValue={setPayload} type={'phone'}/>
        <InputForm label='TẠO MẬT KHẨU' value={payload.password} setValue={setPayload} type={'password'}/>
        <Button 
          text="Tạo tài khoản" 
          bgColor='bg-third' 
          textColor='text-white' 
          full
          func={handleRegister}
        />
      </div>
      <div className='flex flex-col justify-between mt-4 gap-2'>
        <p>Bấm vào nút đăng ký tức là bạn đã đồng ý với 
          <Link className='text-blue-500 hover:text-red-500' to='/register'> điều khoản</Link> của chúng tôi 
        </p>
        <p onClick={() => navigate('/login')}>Bạn đã có tài khoản ?<Link className='text-blue-500 hover:text-red-500' to='/register'> Đăng nhập ngay</Link></p>
      </div>
    </div>
  )
}

export default Register
