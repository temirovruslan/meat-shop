import { beef } from '@/constant'
import Image from 'next/image'

const BeefCards = () => {
  return (
    <ul className='cards'>
      {beef &&
        beef.map((item, i) => {
          return (
            <li
              className='card relative flex h-[300px] flex-col rounded-2xl bg-pinkLight'
              key={i}
            >
              <div className='h-[80%]'>
                <div className='absolute left-3 top-3'>
                  <span className='center inline-block h-12 w-12 rounded-full bg-[#DB3636]  font-medium text-white'>
                    -50%
                  </span>{' '}
                </div>
                <div className='center pt-5 '>
                  <div className='card_img relative'>
                    <Image
                      src={item.image}
                      layout='fill'
                      alt='Picture of the author'
                    />
                  </div>
                </div>
              </div>
              <div className='z-10 flex h-[20%] items-center justify-between rounded-b-2xl bg-[#913B33] pl-9  pr-5 text-[#ffffff]'>
                <div className='pr-3'>
                  <p className='text-[18px] font-semibold'>
                    Beef meat is delicios 
                  </p>
                </div>
                <div className='flex'>
                  <div className='relative flex'>
                    <p className='mr-4 mt-[2.5px] text-sm text-[#F57171]'>
                      12€/kg
                    </p>
                    <span className='absolute bottom-[13px] left-0 h-[1px] bg-[#F57171]'>
                      <p className='invisible'>12€/kg</p>
                    </span>
                  </div>
                  <p className='text-[18px] font-semibold'>10€/kg</p>
                </div>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default BeefCards
