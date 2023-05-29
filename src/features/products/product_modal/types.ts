import {Product} from '@/types/types'

export interface ProductModalProps {
  isOpen: boolean;
  onClose: Function;
  product: Product;
}

export interface ProductModalButtonStatus {
  disabled: boolean;
  text: string;
}
