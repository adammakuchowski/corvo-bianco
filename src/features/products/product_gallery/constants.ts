import {NavigationOptions} from '@/types/types'
import {ProductsListStatus} from './types'

export const productGalleryManuOptions: NavigationOptions[] = [
  {index: 0, name: 'Roes'},
  {index: 1, name: 'Organic'},
  {index: 2, name: 'Kosher'},
  {index: 3, name: 'Champagne'},
  {index: 4, name: 'Other'},
]

export const productsListStatuses: ProductsListStatus[] = [
  {
    viewAll: false,
    text: 'View all'
  },
  {
    viewAll: true,
    text: 'View less'
  }
]
