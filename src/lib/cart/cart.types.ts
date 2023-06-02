import type { ProductData } from '../';

export type CartItem = Pick<ProductData, 'id' | 'name' | 'price'> & {
	quantity: number;
	total: number;
};

export type CartData = CartItem[];
