import { beef } from '@/constant'

const BeefCards = () => {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
      {beef &&
        beef.map((item, i) => {
          return (
            <li className='h-[300px] rounded-lg bg-[#1a5730] p-2' key={i}>
              <p>{item.name}</p>
              <p>€{item.price} per/kg</p>
            </li>
          )
        })}
    </ul>
  )
}

export default BeefCards
