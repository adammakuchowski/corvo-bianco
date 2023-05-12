export interface Product {
  name: string;
  brand: string;
  quality: number;
  category: string;
  typ: string;
  color: string;
  productionYear: string;
  countryOfOrigin: string;
  img: any;
  price: number;
}

export interface IconComponent {
  iconComponent: JSX.Element,
  iconAction?: Function,
}

export interface NavigationOptions {
  name: string;
  sectionName?: string;
}
