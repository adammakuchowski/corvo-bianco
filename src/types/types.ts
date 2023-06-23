export interface Product {
  id: string;
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

export interface ProductCart {
  product: Product;
  quantity: number;
}

export interface IconComponent {
  iconComponent: JSX.Element;
  iconAction?: () => void;
  progressEffect?: boolean;
}

export interface NavigationOptions {
  name: string;
  sectionName?: string;
  index?: number;
}
