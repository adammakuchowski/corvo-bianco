export interface CheckoutState {
  checkoutForm: FromState;
}

export interface FromState {
  email: {
    value: string;
    error: boolean;
  };
  name: {
    value: string;
    error: boolean;
  };
  surname: {
    value: string;
    error: boolean;
  };
  adress: {
    value: string;
    error: boolean;
  };
  postalCode: {
    value: string;
    error: boolean;
  };
  city: {
    value: string;
    error: boolean;
  };
  country: {
    value: string;
    error: boolean;
  };
  cardNumber: {
    value: string;
    error: boolean;
  };
  cardDate: {
    value: string;
    error: boolean;
  };
  cardCvc: {
    value: string;
    error: boolean;
  };
  [key: string]: any;
}

// export interface FromState {
//   [key: string]: any;
//   email: string;
//   emailError: boolean;
//   name: string;
//   nameError: boolean;
//   surname: string;
//   surnameError: boolean;
//   adress: string;
//   adressError: boolean;
//   postalCode: string;
//   postalCodeError: boolean;
//   city: string;
//   cityError: boolean;
//   country: string;
//   countryError: boolean;
//   cardNumber: string;
//   cardNumberError: boolean;
//   cardDate: string;
//   cardDateError: boolean;
//   cardCvc: string;
//   cardCvcError: boolean;
// }

export interface Order extends FromState {
  products: string[];
}
