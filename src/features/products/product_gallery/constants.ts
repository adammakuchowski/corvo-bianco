import {NavigationOptions} from '@/types/types'
import {ProductsListStatus} from './types'

export const productGalleryManuOptions: NavigationOptions[] = [
  {name: 'Roes'},
  {name: 'Organic'},
  {name: 'Kosher'},
  {name: 'Champagne'},
  {name: 'Other'},
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
