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
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
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
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
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
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
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
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'Elegant penthouse with balcony in Dusseldorf',
    type: 'apartment',
    price: 250,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 8
      }
    },
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: 'Luxurious penthouse with a large terrace and panoramic view of the city. Perfect for business trips or celebrations. High level of service.',
    bedrooms: 3,
    goods: ['Wi-Fi', 'Air conditioning', 'Balcony', 'Jacuzzi', 'Parking', 'Gym access'],
    host: {
      name: 'Victoria Schmidt',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 6
  }
];
