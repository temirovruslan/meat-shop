import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { lamb } from '@/constant'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

export default async function Sheep({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='flex h-screen flex-col'>
      <div className=' flex-1'>
        <div className='wrapper'>{lamb && <Cards data={lamb} />}</div>
      </div>
      <Footer params={{ lang }} />
    </div>
  )
}
