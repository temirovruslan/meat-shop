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
                  <span className='center inline-block h-9 w-9 rounded-full bg-[#DB3636] text-[12px]  md:text-sm font-medium  text-white md:h-12  md:w-12 md:font-medium'>
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
              <div className='z-10 flex h-[20%] items-center justify-between rounded-b-2xl bg-[#913B33] px-3 text-[#ffffff]'>
                <div className='pr-3'>
                  <p className=' title'>Beef meat is deledssfdf</p>
                </div>
                <div className='flex items-center'>
                  <div className='center relative'>
                    <p className='mr-1 text-[10px] text-[#F57171] md:text-sm'>
                      12€/kg
                    </p>
                    <span className='absolute bottom-[8px] left-0 h-[1px] bg-[#F57171] md:bottom-[11px]'>
                      <p className='invisible text-[10px] md:text-sm'>12€/kg</p>
                    </span>
                  </div>
                  <p className='title'>10€/kg</p>
                </div>
              </div>
            </li>
          )
        })}
    </ul>
  )
}

export default BeefCards
