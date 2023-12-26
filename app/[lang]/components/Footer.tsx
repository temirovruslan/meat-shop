import logo from '@/public/logo.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-main text-white'>
      <div className='container h-full'>
        <Image width={60} height={60} src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Footer
