import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Footer from '../components/Footer'

export default async function OrderInfo({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='flex h-screen flex-col'>
      <div className='wrapper flex-1 center'>
        <main className='mt-10  h-[700px]  w-full lg:w-5/6 rounded-xl bg-lightBlue px-[15px]  py-12 text-main md:px-36  lg:px-52'>
          <div className='mb-6'>
            <h2 className='heading-size mb-2 font-semibold'>HOW TO ORDER</h2>
            <p className='text-size'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              pariatur. Est, hic quis autem atque minus quam, quod facilis
              possimus aut reiciendis non dolorum voluptatem, voluptatibus
              provident! Quas, ipsa! Ex?
            </p>
          </div>
          <div className='mb-6'>
            <h2 className='heading-size mb-2 font-semibold'>
              DELIVERY DETAILS
            </h2>
            <p className='text-size'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              pariatur. Est, hic quis autem atque minus quam, quod facilis
              possimus aut reiciendis non dolorum voluptatem, voluptatibus
              provident! Quas, ipsa! Ex?
            </p>
          </div>
          <div className='mb-6'>
            <h2 className='heading-size mb-2 font-semibold'>PAYMENT OPTIONS</h2>
            <p className='text-size'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              pariatur. Est, hic quis autem atque minus quam, quod facilis
              possimus aut reiciendis non dolorum voluptatem, voluptatibus
              provident! Quas, ipsa! Ex?
            </p>
          </div>
        </main>
      </div>
      <Footer params={{ lang }} />
    </div>
  )
}
