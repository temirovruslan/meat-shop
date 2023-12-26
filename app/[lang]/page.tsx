import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import cow from '@/public/cow.webp'
import sheep from '@/public/sheep.webp'

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
          <h1 className='my-12 text-[45px] font-medium text-[#32773D]'>
            Select the product
          </h1>
          <button className='relative mb-12  h-[280px] w-[430px] transform transition-transform duration-300 hover:scale-110'>
            <Image src={cow} layout='fill' alt='Cow' />
          </button>
          <button className='relative h-[260px] w-[333px] transform transition-transform duration-300 hover:scale-110'>
            <Image src={sheep} layout='fill' alt='Sheep' />
          </button>
        </div>
      </div>
    </div>
  )
}
{
  /* <h1 className='text-3xl font-bold'>{page.home.title}</h1>
<p className='text-gray-500'>{page.home.description}</p> */
}
