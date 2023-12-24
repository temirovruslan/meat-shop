import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import BeefCards from '../components/BeefCards'

export default async function Beef({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (

      <div className='container my-10 md:my-24'>
        <BeefCards />
      </div>
  
  )
}
