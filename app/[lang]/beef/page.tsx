import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Footer from '../components/Footer'
import { beef } from '@/constant'
import Cards from '../components/Cards'

export default async function Beef({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='flex h-screen flex-col'>
      <div className=' flex-1'>
        <div className='wrapper'>{beef && <Cards data={beef} />}</div>
      </div>
      <Footer params={{ lang }} />
    </div>
  )
}
