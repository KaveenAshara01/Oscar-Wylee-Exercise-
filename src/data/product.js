import frontImage from '../assets/images/gaby-front.jpeg';
import angleImage from '../assets/images/gaby-angle.jpeg';
import sideImage from '../assets/images/gaby-side.jpeg';
import detailImage from '../assets/images/gaby-detail.jpeg';
import foldedImage from '../assets/images/gaby-folded.jpeg';
import modelImage from '../assets/images/gaby-model.jpg';

export const product = {
  name: 'Gaby',
  offer: '2 pairs from $199',
  offerNote: 'Discount auto-applied at checkout',
  color: 'Tabby Tortoise',
  price: '$199.00',
  zipPrice: '$10/week',
  material: 'Made from Acetate',
  description:
    'A classic brow-line glasses, reimagined. Marco has spring hinges and an adjustable nose fit for maximum comfort (and style). Now available in small.',
  measurements: {
    fit: 'Wide',
    size: '56 - 19 - 148',
  },
  images: [
    { src: frontImage, alt: 'Gaby sunglasses front view' },
    { src: angleImage, alt: 'Gaby sunglasses angled view' },
    { src: sideImage, alt: 'Gaby sunglasses side profile' },
    { src: detailImage, alt: 'Gaby sunglasses frame detail' },
    { src: foldedImage, alt: 'Gaby sunglasses folded view' },
    { src: modelImage, alt: 'Model wearing Gaby sunglasses' },
  ],
  swatches: [
    { name: 'Black', value: '#030303' },
    { name: 'Tabby Tortoise', value: 'radial-gradient(circle at 35% 35%, #120301 0 24%, #80230e 25% 45%, #170503 46% 72%, #b35b24 73% 100%)' },
    { name: 'Blush', value: '#f6ded6' },
    { name: 'Clear Crystal', value: '#efefec' },
    { name: 'Sky Crystal', value: '#d8f5ff' },
    { name: 'Aqua', value: '#c7eef7' },
    { name: 'Champagne', value: '#ead7c6' },
    { name: 'Butter', value: '#fff2c8' },
  ],
};
