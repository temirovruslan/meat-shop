import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Header from './components/header/header'  // Import the Header component

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <div className=''>
      {/* Include the Header component here */}
      <Header lang={lang} />

      <div className=''>
        <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-gray-500'>{page.home.description}</p>
       
        <main></main>
        <footer></footer>
      </div>
    </div>
  )
}
