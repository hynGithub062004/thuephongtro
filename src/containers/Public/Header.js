import { useCallback } from 'react'
import Button from '../../components/Button'
import { path } from '../../ultils/constants'
import { icons } from '../../ultils/icons'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const {AiOutlineUserAdd, IoLogOutOutline, FiPlusCircle} = icons
  const navigate = useNavigate()

  const goLogin = useCallback(() => {
    navigate(path.LOGIN)
  }, [])

  const goRegister = useCallback(() => {
    navigate(path.REGISTER)
  }, [])
  return (
    <div className='flex justify-between items-center w-1100 m-auto' >
      <img 
        src='https://phongtro123.com/images/logo-phongtro.svg'
        alt='logo'
        className='w-[240px] h-[70px] object-contain'
      />

      <div className='gap-1 flex justify-between items-center'>
        <small>Phongtro123.com xin chao!</small>
        <Button 
          text='Đăng nhập' 
          textColor='text-white' 
          bgColor='bg-third' 
          Icons={AiOutlineUserAdd}
          func={goLogin}
        />
        <Button 
          text='Đăng kí' 
          textColor='text-white' 
          bgColor='bg-third'  
          Icons={IoLogOutOutline}
          func={goRegister}
        />
        <Button text='Đăng tin mới' textColor='text-white' bgColor='bg-secondary' Icons={FiPlusCircle}/>
      </div>
    </div>
  )
}

export default Header
