import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import BeefCards from '../components/BeefCards'

export default async function Sheep({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className='wrapper'>
      <BeefCards />
    </div>
  )
}