/* eslint-disable @typescript-eslint/no-unused-vars */

import {Product} from '@/types/types'

// mock products data
// export const products: Product[] = [
//   {
//     id: '0',
//     name: 'Moscato',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_1.jpg',
//     price: 278.00,
//   },
//   {
//     id: '1',
//     name: 'Cabernet Sauvignon',
//     brand: 'Marchesi Antinori',
//     quality: 4,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_2.jpg',
//     price: 120.20,
//   },
//   {
//     id: '2',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_3.png',
//     price: 572.00,
//   },
//   {
//     id: '3',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_4.png',
//     price: 356.00,
//   },
//   {
//     id: '4',
//     name: 'Syrah',
//     brand: 'Marchesi Antinori',
//     quality: 1,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_5.png',
//     price: 99.99,
//   },
//   {
//     id: '5',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_6.png',
//     price: 278.00,
//   },
//   {
//     id: '6',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_7.png',
//     price: 572.00,
//   },
//   {
//     id: '7',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_8.png',
//     price: 356.00,
//   },
//   {
//     id: '8',
//     name: 'Syrah',
//     brand: 'Marchesi Antinori',
//     quality: 1,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_9.png',
//     price: 99.99,
//   },
//   {
//     id: '9',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_10.png',
//     price: 278.00,
//   },
//   {
//     id: '10',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_11.png',
//     price: 278.00,
//   },
//   {
//     id: '11',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'organic',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_12.png',
//     price: 278.00,
//   },
//   {
//     id: '12',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_13.png',
//     price: 356.00,
//   },
//   {
//     id: '13',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_14.png',
//     price: 572.00,
//   },
//   {
//     id: '14',
//     name: 'Syrah',
//     brand: 'Marchesi Antinori',
//     quality: 1,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_15.png',
//     price: 99.99,
//   },
//   {
//     id: '15',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_16.png',
//     price: 278.00,
//   },
//   {
//     id: '16',
//     name: 'Cabernet Sauvignon',
//     brand: 'Marchesi Antinori',
//     quality: 4,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_17.png',
//     price: 120.20,
//   },
//   {
//     id: '17',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_1.jpg',
//     price: 356.00,
//   },
//   {
//     id: '18',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_2.jpg',
//     price: 278.00,
//   },
//   {
//     id: '19',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_3.png',
//     price: 278.00,
//   },
//   {
//     id: '20',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_4.png',
//     price: 356.00,
//   },
//   {
//     id: '21',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_5.png',
//     price: 572.00,
//   },
//   {
//     id: '22',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_6.png',
//     price: 278.00,
//   },
//   {
//     id: '23',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_7.png',
//     price: 572.00,
//   },
//   {
//     id: '24',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'champagne',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_8.png',
//     price: 356.00,
//   },
//   {
//     id: '25',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_9.png',
//     price: 572.00,
//   },
//   {
//     id: '26',
//     name: 'Chardonnay',
//     brand: 'Marchesi Antinori',
//     quality: 5,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_10.png',
//     price: 356.00,
//   },
//   {
//     id: '27',
//     name: 'Syrah',
//     brand: 'Marchesi Antinori',
//     quality: 1,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_11.png',
//     price: 99.99,
//   },
//   {
//     id: '28',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_12.png',
//     price: 278.00,
//   },
//   {
//     id: '29',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_10.png',
//     price: 278.00,
//   },
//   {
//     id: '30',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_11.png',
//     price: 278.00,
//   },
//   {
//     id: '31',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'roes',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_12.png',
//     price: 278.00,
//   },
//   {
//     id: '32',
//     name: 'Syrah',
//     brand: 'Marchesi Antinori',
//     quality: 1,
//     category: 'kosher',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_11.png',
//     price: 99.99,
//   },
//   {
//     id: '33',
//     name: 'Garnacha',
//     brand: 'Marchesi Antinori',
//     quality: 3,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_12.png',
//     price: 278.00,
//   },
//   {
//     id: '34',
//     name: 'Airén',
//     brand: 'Marchesi Antinori',
//     quality: 2,
//     category: 'other',
//     typ: 'dry',
//     color: 'white',
//     productionYear: '2006',
//     countryOfOrigin: 'italy',
//     img: '/images/bottles/bottle_3.png',
//     price: 572.00,
//   },
// ]
