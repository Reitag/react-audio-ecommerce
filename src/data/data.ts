export interface ItemData {
  img: string;
  title: string;
  price: number;
  rate: number;
}

export const headphones: ItemData[] = [
  {
    img: '/assets/headphones-1.jpg',
    title: 'Apple BYZ S85I',
    price: 2927,
    rate: 4.7,
  },
  {
    img: '/assets/headphones-2.jpg',
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
  },
  {
    img: '/assets/headphones-2.jpg',
    title: 'Apple EarPods Pro',
    price: 2727,
    rate: 4.6,
  },
];
