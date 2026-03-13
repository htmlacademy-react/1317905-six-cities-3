import { CITIES_LIST } from '../const';
import { Offer } from '../types/offer';

function getCity(name: string) {
  const city = CITIES_LIST.find((c) => c.name === name);
  return city;
}

export const offersData: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: getCity('Amsterdam')!,
    location: getCity('Amsterdam')!.location,
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Bright and spacious apartment near the Seine',
    type: 'apartment',
    price: 210,
    city: getCity('Paris')!,
    location: getCity('Paris')!.location,
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage:
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Charming room with Rhine River view',
    type: 'room',
    price: 92,
    city: getCity('Cologne')!,
    location: getCity('Cologne')!.location,
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage:
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Stylish studio in the city center of Hamburg',
    type: 'studio',
    price: 135,
    city: getCity('Hamburg')!,
    location: getCity('Hamburg')!.location,
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage:
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'Elegant penthouse with balcony in Dusseldorf',
    type: 'apartment',
    price: 250,
    city: getCity('Dusseldorf')!,
    location: getCity('Dusseldorf')!.location,
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage:
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  },
];
