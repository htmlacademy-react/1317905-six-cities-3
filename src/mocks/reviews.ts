import { Review } from '../types/review';

export const reviewsMock: Review[] = [
  {
    id: 'b7dafj38-a9c3-4d7e-b1e5-8b9d9e8c7f6a',
    date: '2024-04-24T12:00:00.000Z',
    user: {
      name: 'Max',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4.2
  },

  {
    id: 'd9fchl60-c1e5-6f9d-d3g7-0d1f2g0e9h8c',
    date: '2024-02-10T08:15:00.000Z',
    user: {
      name: 'John',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false
    },
    comment: 'Perfect location, just a few minutes walk from the main attractions. The room was spacious and well-equipped. Would definitely stay here again.',
    rating: 4.5
  },
  {
    id: 'e0gdim71-d2f6-7g0e-e4h8-1e2g3h1f0i9d',
    date: '2024-04-05T14:45:00.000Z',
    user: {
      name: 'Alex',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    },
    comment: 'Absolutely stunning view of the river! The apartment exceeded all expectations. Modern interior, very clean, and the host was super responsive.',
    rating: 5.0
  },
  {
    id: 'f1hejn82-e3g7-8h1f-f5i9-2f3h4i2g1j0e',
    date: '2024-03-22T19:20:00.000Z',
    user: {
      name: 'Maria',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false
    },
    comment: 'Good value for money. The room was clean and cozy. The only downside was the noise from the street at night, but earplugs solved the problem.',
    rating: 3.8
  },
  {
    id: 'g2ifko93-f4h8-9i2g-g6j0-3g4i5j3h2k1f',
    date: '2024-02-18T11:10:00.000Z',
    user: {
      name: 'Sophie',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true
    },
    comment: 'Charming little room near the cathedral. The view from the window is spectacular. Very friendly staff and great breakfast included.',
    rating: 4.3
  },
  {
    id: 'h3jglp04-g5i9-0j3h-h7k1-4h5j6k4i3l2g',
    date: '2024-04-12T16:30:00.000Z',
    user: {
      name: 'Thomas',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    },
    comment: 'Modern and stylish studio in a great location. Everything was perfect: cleanliness, amenities, communication with the host. Highly recommended!',
    rating: 4.7
  },
  {
    id: 'i4khmq15-h6j0-1k4i-i8l2-5i6k7l5j4m3h',
    date: '2024-03-05T09:45:00.000Z',
    user: {
      name: 'Laura',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/9.jpg',
      isPro: false
    },
    comment: 'The studio is exactly as shown in the photos. Very clean and well-equipped. The location is perfect for exploring the city. Great value!',
    rating: 4.4
  },


];
