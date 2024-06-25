import React, { useState } from 'react'
import InputForm from '../../components/InputForm'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { loginAsyn } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import Joi from 'joi'
import { password, phone } from '../../ultils/jois'
const Login = () => {
  const dispath = useDispatch()
  const auth = useSelector(state=> state.auth)

  const [payloadLogin, setPayload] = useState({
    phone: '',
    password: ''
  })
  const [invalidFiled, setInvalidField] = useState([])

  const handleSubmit = async  () => {
    
    const err = validate(payloadLogin)
    
    if(+err === 0) dispath(loginAsyn(payloadLogin))
  }

  const validate = (payload) => {
    let invalids = 0
    const fields = Object.entries(payload)

    fields.forEach(field => {
      if(field[1] === '') {
        setInvalidField(prev => [...prev, {
          name: field[0],
          msg: 'Bạn không được để trống trường này.'
        }])
        invalids++;
      }
    })

    fields.forEach((item) => {
      switch (item[0]) {
        case 'password':
          if(item[1].length < 6) {
            invalids++;
            setInvalidField(prev => [...prev, {
              name: item[0],
              msg: 'Mật khẩu phải có tối thiểu 6 kí tự'
            }])
          }
          break;
        case 'phone': 
          if(!+item[1]) {
            invalids++;
            setInvalidField(prev => [...prev, {
              name: item[0],
              msg: 'Số điện thoại không hợp lệ'
            }])
          }
          break;
      
        default:
          break;
      }
    })
    return invalids
  }

  return (
    <div className='mt-5 bg-white w-600 pt-[30px] px-[30px] pb-[100px] rounded-md border border-[#dedede]'>
      <h1 className='text-2xl font-semibold mb-3'>Đăng nhập</h1>
      <div className='flex flex-col gap-5 w-full'>
        <InputForm label='SỐ ĐIỆN THOẠI' value={payloadLogin.phone} setValue={setPayload} type={'phone'} setInvalidField={setInvalidField} invalidFiled={invalidFiled}/>
        <InputForm label='MẬT KHẨU' value={payloadLogin.password} setValue={setPayload} type={'password'} setInvalidField={setInvalidField} invalidFiled={invalidFiled}/>
        <Button
          text="Đăng
          nhập"
          bgColor='bg-third'
          textColor='text-white'
          full
          func={handleSubmit}
        />
      </div>
      <div className='flex justify-between mt-4'>
        <Link className='text-blue-500 hover:text-red-500' to='#'>Bạn quên mật khẩu ?</Link>
        <Link className='text-blue-500 hover:text-red-500' to='/register'>Tạo tài khoản mới</Link>
      </div>
    </div>  )
}

export default Login
