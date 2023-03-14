import images from './images';

const wines = [
  {
    title: 'Duplo Smash',
    price: 'R$14',
    tags: 'Pão Brioche | 2 Smash 70g | Queijo Cheddar | Molho Especial',
  },
  {
    title: 'Duplo Smash Salada',
    price: 'R$16',
    tags: 'Pão Brioche | 2 Smash 70g | Queijo Cheddar | Presunto | Tomate | Molho Especial',
  },
  {
    title: 'Duplo Smash Bancon',
    price: 'R$18',
    tags: 'Pão Brioche | 2 Smash 70g | Queijo Cheddar | Bancon | Molho Especial',
  },
  {
    title: 'Duplo Smash Tudo',
    price: 'R$20',
    tags: 'Pão Brioche | 2 Smash 70g | Queijo Cheddar | Bancon | Salsicha | Calabresa | Ovo | Alface Americano',
  }, {

    title: 'Triplo Smash',
    price: 'R$19',
    tags: 'Pão Brioche | 2 Smash 70g | Queijo Cheddar | Molho Especial',
  },
  {
    title: 'Triplo Smash Bancon',
    price: 'R$19',
    tags: 'Pão Brioche | 2 Smash 70g | Bancon | Queijo Cheddar | Molho Especial',
  },
];

const cocktails = [
  {
    title: '3 X-Saladas',
    price: 'R$20',
    tags: '3 X-Saladas',
  },
  {
    title: '3 X-Saladas + Pet',
    price: 'R$25',
    tags: '3 X-Saladas | Pet 1,5L',
  },
];
const hamburg = [
  {
    title: 'X-Salada',
    price: 'R$10',
    tags: 'Pão Hamburg | Carne Hamburger | Queijo | Presunto | Ovo | Alface Americano | Tomate',
  },
  {
    title: 'X-Salada Bancon',
    price: 'R$15',
    tags: 'Pão Hamburg | Carne Hamburger | Bancon | Queijo | Presunto | Ovo | Alface Americano | Tomate',
  },
  {
    title: 'X-Calabresa',
    price: 'R$14',
    tags: 'Pão Hamburg | Carne Hamburger | calabresa | Queijo | Presunto | Ovo | Alface Americano | Tomate',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, hamburg };
