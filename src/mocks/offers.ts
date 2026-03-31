import { Offer } from '../types/offer';

export const offersMock: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The studio is situated in a quiet and green area, but at the same time very close to the center.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine', 'Washing machine'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Bright and spacious apartment near the Seine',
    type: 'apartment',
    price: 210,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: 'Charming apartment with a magnificent view of the Seine and Notre-Dame. Recently renovated, very bright and spacious. Ideal for a romantic trip or family vacation.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Dishwasher', 'Washing machine', 'Towels', 'Hairdryer'],
    host: {
      name: 'Angelina Jolie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Charming room with Rhine River view',
    type: 'room',
    price: 92,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    description: 'Cozy and bright room with a beautiful view of the Rhine. Located in a quiet area, 10 minutes walk from the city center and Cologne Cathedral.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Breakfast', 'TV', 'Hairdryer'],
    host: {
      name: 'Max Mustermann',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Stylish studio in the city center of Hamburg',
    type: 'studio',
    price: 135,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: 'Modern and stylish studio in the very center of Hamburg. Everything you need for a comfortable stay: kitchen, high-speed Wi-Fi, smart TV.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Kitchen', 'Coffee machine', 'Smart TV', 'Iron'],
    host: {
      name: 'Sophie Müller',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'Bright and spacious apartment near the Seine',
    type: 'apartment',
    price: 210,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 8
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: 'Charming apartment with a magnificent view of the Seine and Notre-Dame. Recently renovated, very bright and spacious. Ideal for a romantic trip or family vacation.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Dishwasher', 'Washing machine', 'Towels', 'Hairdryer'],
    host: {
      name: 'Angelina Jolie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f05',
    title: 'Charming room with Rhine River view',
    type: 'room',
    price: 92,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 8
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    description: 'Cozy and bright room with a beautiful view of the Rhine. Located in a quiet area, 10 minutes walk from the city center and Cologne Cathedral.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Breakfast', 'TV', 'Hairdryer'],
    host: {
      name: 'Max Mustermann',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f06',
    title: 'Stylish studio in the city center of Hamburg',
    type: 'studio',
    price: 135,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 8
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: 'Modern and stylish studio in the very center of Hamburg. Everything you need for a comfortable stay: kitchen, high-speed Wi-Fi, smart TV.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Kitchen', 'Coffee machine', 'Smart TV', 'Iron'],
    host: {
      name: 'Sophie Müller',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
    ],
    maxAdults: 2
  },
  // {
  //   id: '6af6f711-c28d-4121-82cd-e0b462a27f07',
  //   title: 'Elegant penthouse with balcony in Dusseldorf',
  //   type: 'apartment',
  //   price: 250,
  //   city: {
  //     name: 'Dusseldorf',
  //     location: {
  //       latitude: 51.225402,
  //       longitude: 6.776314,
  //       zoom: 8
  //     }
  //   },
  //   location: {
  //     latitude: 51.225402,
  //     longitude: 6.776314,
  //     zoom: 8
  //   },
  //   isFavorite: true,
  //   isPremium: true,
  //   rating: 4.9,
  //   description: 'Luxurious penthouse with a large terrace and panoramic view of the city. Perfect for business trips or celebrations. High level of service.',
  //   bedrooms: 3,
  //   goods: ['Wi-Fi', 'Air conditioning', 'Balcony', 'Jacuzzi', 'Parking', 'Gym access'],
  //   host: {
  //     name: 'Victoria Schmidt',
  //     avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
  //     isPro: true
  //   },
  //   images: [
  //     'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
  //   ],
  //   maxAdults: 6
  // },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f08',
    title: 'Cozy apartment near Eiffel Tower',
    type: 'apartment',
    price: 185,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.8584,
        longitude: 2.2945,
        zoom: 8
      }
    },
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    description: 'Lovely apartment just a short walk from the Eiffel Tower. Enjoy a glass of wine on the balcony with a view of the Champ de Mars.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Hairdryer'],
    host: {
      name: 'Pierre Dupont',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f09',
    title: 'Modern apartment in city center',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.962,
        longitude: 6.955,
        zoom: 8
      }
    },
    location: {
      latitude: 50.962,
      longitude: 6.955,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    description: 'Bright and modern apartment right in the heart of Cologne. Steps away from the cathedral and the Rhine promenade.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine'],
    host: {
      name: 'Lena Weber',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f10',
    title: 'Harbor view studio',
    type: 'studio',
    price: 95,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5412,
        longitude: 9.9969,
        zoom: 8
      }
    },
    location: {
      latitude: 53.5412,
      longitude: 9.9969,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7,
    description: 'Modern studio with a stunning view of the Hamburg harbor. Perfect for couples looking for a romantic getaway.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Kitchen', 'Coffee machine', 'TV'],
    host: {
      name: 'Klaus Fischer',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f11',
    title: 'Business apartment near fair',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2206,
        longitude: 6.7855,
        zoom: 8
      }
    },
    location: {
      latitude: 51.2206,
      longitude: 6.7855,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    description: 'Spacious apartment ideal for business travelers. High-speed internet, work desk, and a quiet neighborhood close to the exhibition center.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Parking', 'Kitchen', 'Elevator'],
    host: {
      name: 'Anna Schmidt',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg'
    ],
    maxAdults: 2
  },

  // {
  //   id: '6af6f711-c28d-4121-82cd-e0b462a27f12',
  //   title: 'Charming house in Brussels',
  //   type: 'house',
  //   price: 180,
  //   city: {
  //     name: 'Brussels',
  //     location: {
  //       latitude: 50.846557,
  //       longitude: 4.351697,
  //       zoom: 8
  //     }
  //   },
  //   location: {
  //     latitude: 50.8505,
  //     longitude: 4.3517,
  //     zoom: 8
  //   },
  //   isFavorite: false,
  //   isPremium: true,
  //   rating: 4.9,
  //   description: 'Beautiful traditional house with a garden, located in the heart of Brussels. Close to Grand Place and European Quarter.',
  //   bedrooms: 2,
  //   goods: ['Wi-Fi', 'Heating', 'Garden', 'Kitchen', 'Parking'],
  //   host: {
  //     name: 'Jean-Luc Martin',
  //     avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
  //     isPro: true
  //   },
  //   images: [
  //     'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
  //     'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
  //   ],
  //   maxAdults: 4
  // }

];
