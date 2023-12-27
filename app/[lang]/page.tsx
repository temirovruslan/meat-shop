import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import cow from '@/public/cow.webp'
import sheep from '@/public/sheep.webp'
import arrow from '@/public/contactUs.svg'
import Link from 'next/link'
import Footer from './components/Footer'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='mt-2 flex min-h-screen flex-col sm:mr-0'>
      
      <div className='wrapper my-12 flex-1'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='mb-12 text-[28px] font-bold text-main md:text-[45px]'>
            Select the product
          </h1>

          <div className=''>
            <h2 className='change_font center pb-4 text-[21px] font-bold text-main md:text-[29px]'>
              Beef cuts
            </h2>
            <Link href={`/${lang}/beef`}>
              <button className='relative mb-12 transform transition-transform duration-300 hover:scale-110'>
                <Image src={cow} width={430} height={280} alt='Cow' />
              </button>
            </Link>
          </div>

          <div className='px-10'>
            <h2 className='change_font center pb-4 text-[20px] font-bold text-main md:text-[29px]'>
              Sheep cuts
            </h2>
            <Link href={`/${lang}/sheep`}>
              <button className='relative transform transition-transform duration-300 hover:scale-110'>
                <Image src={sheep} height={260} width={333} alt='Sheep' />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer params={{ lang }} />
    </div>
  )
}
{
  /* <h1 className='text-3xl font-bold'>{page.home.title}</h1>
<p className='text-gray-500'>{page.home.description}</p> */
}
