import { Product } from '@rekurt-workspace/product';

export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}
