import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import telegram from '@/public/telegram.svg'
import instagram from '@/public/instagram.svg'
import whatsapp from '@/public/whatsapp.svg'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <div className='mt-12 w-full bg-main text-white'>
      <div className='container h-full py-5'>
        <div className='center'>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <div>
              <h3 className='mb-3 mr-0 font-sans text-base font-bold sm:text-lg lg:mr-16'>
                Order by sending us a message on our social media:
              </h3>
              <div className='mb-5 flex lg:mb-0'>
                <div className='relative mr-2 rounded-full'>
                  <Link href={`/${lang}`}>
                    <Image
                      width={35}
                      height={35}
                      src={telegram}
                      alt='telegram'
                    />
                  </Link>
                </div>
                <div className='relative mr-2 rounded-full'>
                  <Link href={`/${lang}`}>
                    <Image
                      width={35}
                      height={35}
                      src={instagram}
                      alt='instagram'
                    />
                  </Link>
                </div>

                <div className='relative rounded-full'>
                  <Link href={`/${lang}`}>
                    <Image
                      width={35}
                      height={35}
                      src={whatsapp}
                      alt='whatsapp'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='mb-5 pr-0 lg:mb-0 lg:pr-4'>
              <h3 className='mb-3 text-base font-bold sm:text-lg'>
                ORDERING INFORMATION
              </h3>
              <ul className='flex flex-col '>
                <li className='mb-2 '>
                  <Link className='text-size' href={`/${lang}/order-info`}>
                    HOW TO ORDER
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/order-info`}>
                    DELIVERY DETAILS
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/order-info`}>
                    PAYMENT OPTIONS
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/order-info`}>
                    Free delivery on Saturdays across Estonia
                  </Link>
                </li>
                <li>
                  <Link className='text-size' href={`/${lang}/order-info`}>
                    Delivery cost 5 euro
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-3 text-base font-bold sm:text-lg'>
                USEFUL LINKS
              </h3>
              <ul>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/useful-links`}>
                    How we cut the animals
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/useful-links`}>
                    DELIVERY DETAILS
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/useful-links`}>
                    About us
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link className='text-size' href={`/${lang}/useful-links`}>
                    Certificate halal
                  </Link>
                </li>
                <li>
                  <p className='text-size font-semibold'>
                    ©2024 Halal-EESTI All Rights Reserved
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
