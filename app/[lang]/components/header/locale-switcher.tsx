'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import eng from '@/public/eng.svg'
import rus from '@/public/rus.svg'
import nor from '@/public/nor.svg'
import est from '@/public/est.svg'
import { i18n } from '@/i18n.config'
import arrow from '@/public/arrow.svg'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

const flagImages: { [key: string]: StaticImageData } = {
  en: eng,
  ru: rus,
  no: nor,
  ee: est
}

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState(() => {
    // Check if window is defined before accessing localStorage
    return typeof window !== 'undefined'
      ? localStorage.getItem('selectedLocale') || 'en'
      : 'en'
  })

  const handleChangeLocale = (locale: string) => {
    if (typeof window !== 'undefined') {
      // Check if window is defined before accessing localStorage
      localStorage.setItem('selectedLocale', locale)
    }

    setSelectedLocale(locale)
    // You can perform any additional actions when the locale changes here
    setIsDropdownOpen(false)
  }

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  useEffect(() => {
    // Cleanup dropdown state when component unmounts
    return () => {
      setIsDropdownOpen(false)
    }
  }, [])
  return (
    <button
    style={{ WebkitTapHighlightColor: 'transparent' }}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className='center absolute right-0 sm:right-10 rounded-full'
    >
      <div className='relative flex gap-x-3'>
        <div className='relative h-[25px] w-[45px] md:h-[30px] md:w-[55px]'>
          <Image layout='fill' src={flagImages[selectedLocale]} alt='flag' />
        </div>
        {isDropdownOpen && (
          <ul className='absolute right-0 top-full mt-2 space-y-2 rounded-md bg-gray-800 p-2'>
            {i18n.locales.map(locale => (
              <li key={locale}>
                <button onClick={() => handleChangeLocale(locale)}>
                  <Link href={redirectedPathName(locale)} className=''>
                    <Image
                      width={30}
                      height={15}
                      src={flagImages[locale]}
                      alt='flag'
                    />
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={`relative ml-[-5px] ${isDropdownOpen && 'rotate-180'}`}>
        <Image width={35} height={30} alt='arrow' src={arrow} />
      </div>
    </button>
  )
}
