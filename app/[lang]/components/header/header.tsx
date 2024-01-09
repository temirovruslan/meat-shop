import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import telegram from '@/public/telegram.svg'
import instagram from '@/public/instagram.svg'
import messanger from '@/public/messanger.svg'
import whatsapp from '@/public/whatsapp.svg'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='sticky right-0 top-0 z-50 bg-main py-3 text-white '>
      <div className='container flex items-center '>
        <div className='relative mr-3 h-[70px] w-[70px] sm:mr-12 rounded-full'>
          <Link href={`/${lang}`}>
            <Image layout='fill' src={logo} alt='logo' />
          </Link>
        </div>
      
        <div className='center'>
          <div className='relative mr-2 rounded-full'>
          <Link href={`https://t.me/elbrus_halal`} target="_blank" rel="noopener noreferrer">
              <Image width={35} height={35} src={telegram} alt='telegram' />
            </Link>
          </div>
          <div className='relative mr-2 rounded-full'>
          <Link href={`https://www.instagram.com/elbrus_halal?igsh=dnRybGIzbzdnaDV0`} target="_blank" rel="noopener noreferrer">
              <Image width={35} height={35} src={instagram} alt='instagram' />
            </Link>
          </div>

          <div className='relative rounded-full'>
          <Link href={`https://wa.me/37253423544`} target="_blank" rel="noopener noreferrer">
              <Image width={35} height={35} src={whatsapp} alt='whatsapp' />
            </Link>
          </div>
        </div>
    
        <LocaleSwitcher />
      </div>
    </header>
  )
}
