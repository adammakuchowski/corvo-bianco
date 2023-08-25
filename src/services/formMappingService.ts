import {
  OrderApiFormat,
  ProductCart,
  ProductOrderApiFormat,
} from '@/types/types'
import {FromState} from '@/features/checkout/types'

const mapProductsCartToOrderApiFormat = (productsCart: ProductCart[]): ProductOrderApiFormat[] => (
  productsCart.map(product => ({objectId: product.product.id, quantity: product.quantity}))
)

export const mapFormOrderToApiFormat = (fromState: FromState, productsCart: ProductCart[], totalCostPrice: number): OrderApiFormat => {
  const productsCartOrderApiFormat = mapProductsCartToOrderApiFormat(productsCart)

  return {
    email: fromState.email.value,
    name: fromState.name.value,
    surname: fromState.surname.value,
    products: [...productsCartOrderApiFormat],
    adress: fromState.adress.value,
    postalCode: fromState.postalCode.value,
    city: fromState.city.value,
    country: fromState.country.value,
    cardNumber: fromState.cardNumber.value,
    cardDate: fromState.cardDate.value,
    cardCvc: fromState.cardCvc.value,
    totalCostPrice
  }
}
