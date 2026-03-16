import { OfferCard } from '../types/offer';

export const offerCardsMock: OfferCard[] = [
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg'
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg'
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
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg'
  }
];
