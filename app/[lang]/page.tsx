import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import cow from '@/public/cow.webp'
import sheep from '@/public/sheep.webp'
import Link from 'next/link'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className=''>
      <div className='wrapper'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='change_font my-12 text-[45px] font-bold text-main'>
            Select the product
          </h1>

          <div>
            <h2 className='change_font  pr-24 text-right text-[30px] font-bold text-main'>
              Beef cuts
            </h2>
            <Link href={`/${lang}/beef`}>
              <button className='relative mb-12  h-[280px] w-[430px] transform transition-transform duration-300 hover:scale-110'>
                <Image src={cow} layout='fill' alt='Cow' />
              </button>
            </Link>
          </div>

          <div>
            <h2 className='change_font pb-4 pr-16 text-right text-[29px] font-bold text-main'>
              Sheep cuts
            </h2>
            <Link href={`/${lang}/sheep`}>
              <button className='relative h-[260px] w-[333px] transform transition-transform duration-300 hover:scale-110'>
                <Image src={sheep} layout='fill' alt='Sheep' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
{
  /* <h1 className='text-3xl font-bold'>{page.home.title}</h1>
<p className='text-gray-500'>{page.home.description}</p> */
}
