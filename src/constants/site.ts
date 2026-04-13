export const SITE_URL = 'https://maryaleks.dev';

export const PERSON = {
  name: 'Marina Alekseeva',
  jobTitle: 'Front-End Developer',
  email: 'marinaaleksdev@gmail.com',
  phone: '+56957776767',
  phoneFormatted: '+56 957 776 767',
  location: { city: 'Santiago', country: 'CL' },
  image: '/profile.jpg',
  languages: [
    { name: 'Russian', code: 'ru' },
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
  ],
} as const;

export const SOCIAL = {
  github: 'https://github.com/KorryKo',
  linkedin: 'https://www.linkedin.com/in/marina-alekseeva-a190591b5/',
  telegram: 'https://t.me/KorryKo',
} as const;
