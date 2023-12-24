import { beef } from '@/constant'
import Image from 'next/image'

const BeefCards = () => {
  return (
    <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
      {beef &&
        beef.map((item, i) => {
          return (
            <li
              className='h-[300px] rounded-lg bg-[#1a5730] py-5 text-white'
              key={i}
            >
              <div className='flex h-[80%] w-full items-center justify-center'>
                <div className='relative'>
                  <Image
                    src={item.image}
                    height={170}
                    width={200}
                    // objectFit='cover'
                    alt='Picture of the author'
                  />
                </div>
              </div>
              <div className='ml-14 h-[20%]'>
                <p>{item.name}</p>
                <p>€{item.price} per/kg</p>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default BeefCards
