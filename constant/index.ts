import { beefType, lambType } from '@/types'
import img_1 from '/public/beef_meat1.webp'
import img_2 from '/public/beef_meat2.webp'
import img_3 from '/public/beef_meat3.webp'
import img_4 from '/public/beef_meat4.webp'
import img_5 from '/public/beef_meat5.webp'
import img_6 from '/public/beef_meat6.webp'
import img_7 from '/public/beef_meat7.webp'
import img_8 from '/public/beef_meat8.webp'
import shank_beef from '/public/beef/shank.webp'
import rib_steak_beef from '/public/beef/rib_steak.webp'
import lamb_beef from '/public/lamb/shank.webp'
import rib_steak_lamb from '/public/lamb/rib_steak.webp'

export const lamb: lambType[] = [
  {
    price: 8,
    name: 'Lamb Shank',
    image: lamb_beef.src,
    size: 'wide'
  },
  {
    sale: 55,
    price: 8,
    name: 'Rib Steak',
    image: rib_steak_lamb.src,
    size: 'wide'
  },
  {
    price: 8,
    name: 'Lamb Chunk',
    image: img_2.src
  },
  {
    price: 8,
    name: 'Lamb Chunk',
    image: img_3.src
  },
  {
    price: 8,
    name: 'Lamb Chunk',
    image: img_7.src
  },
  {
    sale: 23,
    price: 8,
    name: 'Lamb Chunk',
    image: img_8.src
  }
]

export const beef: beefType[] = [
  {
    price: 15,
    name: 'Beef Shank',
    image: shank_beef.src,
    size: 'circle'
  },
  {
    price: 15,
    name: 'Rib Steak',
    image: rib_steak_beef.src,
    size: 'high'
  },
  {
    price: 15,
    name: 'Beef Chunk',
    image: img_1.src
  },
  {
    price: 15,
    name: 'Beef Chunk',
    image: img_1.src
  },
  {
    price: 15,
    name: 'Beef Chunk',
    image: img_1.src
  },
  {
    price: 15,
    name: 'Beef Chunk',
    image: img_6.src
  },
  {
    price: 15,
    name: 'Beef Chunk',
    image: img_7.src
  },
  {
    sale: 90,
    price: 15,
    name: 'Beef Chunk',
    image: img_8.src
  }
]
