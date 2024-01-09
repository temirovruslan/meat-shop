import { beefType, lambType } from '@/types'
import img_1 from '/public/beef_meat1.webp'
import img_2 from '/public/beef_meat2.webp'
import img_3 from '/public/beef_meat3.webp'
import img_4 from '/public/beef_meat4.webp'
import img_5 from '/public/beef_meat5.webp'
import img_6 from '/public/beef_meat6.webp'
import img_7 from '/public/beef_meat7.webp'

import minced_meat_beef from '/public/beef/minced.webp'
import head_beef from '/public/beef/head.webp'
import flank_beef from '/public/beef/flank.webp'
import shank_beef from '/public/beef/shank.webp'
import rib_steak_beef from '/public/beef/rib_steak.webp'
import heart_beef from '@/public/beef/heart.webp'
import plate_ribs_beef from '@/public/beef/plate.webp'
import brisket_beef from '@/public/beef/brisket.webp'
import t_bone_steak_beef from '@/public/beef/t_bone_steak.webp'
import round_beef from '@/public/beef/round.webp'
import rump_beef from '@/public/beef/rump.webp'
import legs_beef from '@/public/beef/legs.webp'
import tri_tip_roast_beef from '@/public/beef/tri_tip_roast.webp'
import liver_beef from '@/public/beef/liver.webp'

import shank_lamb from '/public/lamb/shank.webp'
import rib_steak_lamb from '/public/lamb/rib_steak.webp'
import leg_lamb from '@/public/lamb/leg.webp'
import breast_lamb from '@/public/lamb/breast.webp'
import flank_lamb from '@/public/lamb/flank.webp'
import loin_lamb from '@/public/lamb/loin.webp'
import sirloin_lamb from '@/public/lamb/sirloin.webp'
import shoulder_lamb from '@/public/lamb/shoulder.webp'
import neck_lamb from '@/public/lamb/neck.webp'
import heart_lamb from '@/public/lamb/heart.webp'
import liver_lamb from '@/public/lamb/liver.webp'
import lungs_lamb from '@/public/lamb/lungs.webp'
import head_lamb from '@/public/lamb/head.webp'

export const lamb: lambType[] = [
  {
    price: 8,
    name: 'Shank',
    image: shank_lamb.src,
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
    sale: 55,
    price: 8,
    name: 'leg',
    image: leg_lamb.src,
    size: 'wide'
  },
  {
    sale: 55,
    price: 8,
    name: 'flank',
    image: flank_lamb.src,
    size: 'wide'
  },
  {
    sale: 55,
    price: 8,
    name: 'leg',
    image: breast_lamb.src,
    size: 'wide'
  },
  {
    price: 8,
    name: 'leg',
    image: leg_lamb.src,
    size: 'wide'
  },
  {
    price: 8,
    name: 'loin',
    image: loin_lamb.src
    // size: 'wide'
  },
  {
    price: 8,
    name: 'sirloin',
    image: sirloin_lamb.src,
    size: 'wide'
  },
  {
    price: 8,
    name: 'neck',
    image: neck_lamb.src
    // size: 'wide'
  },
  {
    sale: 55,
    price: 8,
    name: 'shoulder',
    image: shoulder_lamb.src,
    size: 'circle'
  },
  {
    sale: 55,
    price: 8,
    name: 'lungs',
    image: lungs_lamb.src
    // size: 'wide'
  },
  {
    sale: 55,
    price: 8,
    name: 'heart',
    image: heart_lamb.src
  },
  {
    sale: 55,
    price: 8,
    name: 'liver',
    image: liver_lamb.src
  },

  {
    price: 15,
    name: 'Minced Meat lamb',
    image: minced_meat_beef.src,
    size: 'wide'
  },

  {
    price: 15,
    name: 'head',
    image: head_lamb.src,
    size: 'circle'
  }
]

export const beef: beefType[] = [
  {
    price: 15,
    name: 'Brisket',
    image: brisket_beef.src
  },
  {
    sale: 90,
    price: 15,
    name: 'Round',
    image: round_beef.src,
    size: 'wide'
  },
  {
    sale: 90,
    price: 15,
    name: 'rump',
    image: rump_beef.src,
    size: ''
  },
  {
    price: 15,
    name: 'Shank',
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
    name: 'Minced Meat beef',
    image: minced_meat_beef.src,
    size: 'wide'
  },
  {
    price: 15,
    name: 'Flank',
    image: flank_beef.src,
    size: 'wide'
  },
  {
    price: 15,
    name: 'Plate ribs',
    image: plate_ribs_beef.src
  },

  {
    price: 15,
    name: 'T-bone steak',
    image: t_bone_steak_beef.src
  },

  {
    sale: 90,
    price: 15,
    name: 'Legs',
    image: legs_beef.src
  },
  {
    sale: 90,
    price: 15,
    name: 'Liver',
    image: liver_beef.src,
    size: 'wide'
  },
  {
    sale: 90,
    price: 15,
    name: 'Tri Tip Roast',
    image: tri_tip_roast_beef.src
  },
 
  {
    price: 8,
    name: 'head',
    image: head_beef.src,
    size: 'circle'
  },
  {
    price: 8,
    name: 'heart',
    image: heart_beef.src
  }
]
