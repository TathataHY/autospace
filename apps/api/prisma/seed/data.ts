import { Prisma } from '@prisma/client'
import { generateSlots } from './util'

export const garagesSample: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Manhattan Garage 1',
    description: 'Secure parking in the heart of Manhattan',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },

    address: {
      create: {
        address: '123 5th Ave, New York, NY 10001',
        latitude: 40.712776,
        longitude: -74.005974,
      },
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
  },
]
export const garages: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Brooklyn Garage 1',
    description: 'Affordable parking in Brooklyn',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-and-clean-parking-garage-in-brooklyn-new-york-the-picture-sh-825512221_kzvig6.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
      ],
    },
    address: {
      create: {
        address: '456 Court St, Brooklyn, NY 11231',
        latitude: 40.678178,
        longitude: -73.944158,
      },
    },
  },
  {
    displayName: 'Queens Garage 1',
    description: 'Convenient parking in Queens',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--976407210_la43y2.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '789 Queens Blvd, Queens, NY 11373',
        latitude: 40.728224,
        longitude: -73.794852,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 2',
    description: 'Secure parking near Central Park',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--639233464_tuskex.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '101 Central Park West, New York, NY 10023',
        latitude: 40.7812,
        longitude: -73.9665,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 2',
    description: 'Spacious parking in Brooklyn Heights',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--184920453_v8umyi.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    address: {
      create: {
        address: '202 Atlantic Ave, Brooklyn, NY 11201',
        latitude: 40.6912,
        longitude: -73.9936,
      },
    },
  },
  {
    displayName: 'Queens Garage 2',
    description: 'Safe parking in Flushing',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-a-spacious-parking-garage-in-brooklyn-heights-new-york-the-picture-should--539597916_obi5kl.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '303 Main St, Flushing, NY 11354',
        latitude: 40.759,
        longitude: -73.8303,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 3',
    description: 'Parking near Times Square',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--110448605_bqjzmf.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    address: {
      create: {
        address: '1515 Broadway, New York, NY 10036',
        latitude: 40.758,
        longitude: -73.9855,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 3',
    description: 'Secure parking in Williamsburg',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/render-a-cover-picture-of-a-secure-parking-garage-near-central-park-in-manhattan-new-york-the-imag-736153979_kvpczt.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '404 Bedford Ave, Brooklyn, NY 11249',
        latitude: 40.7081,
        longitude: -73.9571,
      },
    },
  },
  {
    displayName: 'Queens Garage 3',
    description: 'Affordable parking in Astoria',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-an-affordable-clean-outdoor-parking-garage-in-brooklyn-new-york-the-pict-620611113_ortr3g.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '505 Steinway St, Astoria, NY 11103',
        latitude: 40.7592,
        longitude: -73.9196,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 4',
    description: 'Parking near Wall Street',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158769/autospace/busy-parking-garage-with-slots-in-newyork-neon-ambiance-abstract-black-oil-gear-mecha-detailed-a_fy51wa.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '75 Wall St, New York, NY 10005',
        latitude: 40.7074,
        longitude: -74.0104,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 4',
    description: 'Parking near Prospect Park',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-haze-ultra-detail_n1hhhz.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '606 Flatbush Ave, Brooklyn, NY 11225',
        latitude: 40.6591,
        longitude: -73.9626,
      },
    },
  },
  {
    displayName: 'Queens Garage 4',
    description: 'Parking near LaGuardia Airport',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-car-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-photogr_kst6l1.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    address: {
      create: {
        address: '707 Ditmars Blvd, Queens, NY 11370',
        latitude: 40.7743,
        longitude: -73.8896,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 5',
    description: 'Secure parking in the East Village',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette-790070610_pptabc.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '808 E 14th St, New York, NY 10009',
        latitude: 40.7295,
        longitude: -73.9786,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 5',
    description: 'Parking in Greenpoint',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-phot_ywuzvl.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '909 Manhattan Ave, Brooklyn, NY 11222',
        latitude: 40.7291,
        longitude: -73.9542,
      },
    },
  },
  {
    displayName: 'Queens Garage 5',
    description: 'Convenient parking in Forest Hills',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometri_lai3r3.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '1001 Austin St, Forest Hills, NY 11375',
        latitude: 40.7207,
        longitude: -73.8448,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 6',
    description: 'Parking in Soho',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art_rfgxgp.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    address: {
      create: {
        address: '1101 Broadway, New York, NY 10012',
        latitude: 40.7223,
        longitude: -73.9987,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 6',
    description: 'Parking in DUMBO',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-in-the-hudson-river-low-poly-isometric-art-3d-art-high_os8c09.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    address: {
      create: {
        address: '1202 Water St, Brooklyn, NY 11201',
        latitude: 40.7033,
        longitude: -73.9903,
      },
    },
  },
  {
    displayName: 'Queens Garage 6',
    description: 'Parking in Jamaica',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-with-no-cars-low-poly-i_ikyidk.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '1303 Jamaica Ave, Jamaica, NY 11432',
        latitude: 40.7028,
        longitude: -73.7925,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 7',
    description: 'Parking near the UN Headquarters',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-outer-space-vanishing-point-super-highway-high-speed-_wnpn6u.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    address: {
      create: {
        address: '1401 1st Ave, New York, NY 10016',
        latitude: 40.7489,
        longitude: -73.968,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 7',
    description: 'Parking in Park Slope',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette_buv6ks.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    address: {
      create: {
        address: '1504 7th Ave, Brooklyn, NY 11215',
        latitude: 40.6681,
        longitude: -73.9822,
      },
    },
  },
  {
    displayName: 'Queens Garage 7',
    description: 'Parking in Long Island City',
    company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/multistorey-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art-3d-art-hig_1_pbgzgi.jpg',
      ],
    },
    slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    address: {
      create: {
        address: '1605 Jackson Ave, Long Island City, NY 11101',
        latitude: 40.7472,
        longitude: -73.9438,
      },
    },
  },
]
