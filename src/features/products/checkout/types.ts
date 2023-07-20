export interface CheckoutState {
  checkoutForm: FromState;
}

export interface FromState {
  [key: string]: any;
  email: string;
  emailError: boolean;
  name: string;
  nameError: boolean;
  surname: string;
  surnameError: boolean;
  adress: string;
  adressError: boolean;
  postalCode: string;
  postalCodeError: boolean;
  city: string;
  cityError: boolean;
  country: string;
  countryError: boolean;
  cardNumber: string;
  cardNumberError: boolean;
  cardDate: string;
  cardDateError: boolean;
  cardCvc: string;
  cardCvcError: boolean;
}
