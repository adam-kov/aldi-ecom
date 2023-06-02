import { localStorageStore } from '@skeletonlabs/skeleton';
import { products, type ProductData } from '../';
import type { CartData } from '.';

const store = localStorageStore<CartData>('cart', []);

export const cart = {
	subscribe: store.subscribe,
	addProduct: (product: ProductData, quantity: number) => {
		store.update((cart) => {
			const existingItem = cart.find((item) => item.id === product.id);
			const { success } = products.updateAvailableAmount(product.id, -quantity);
			if (!success) {
				return cart;
			}
			if (existingItem) {
				existingItem.quantity += quantity;
				existingItem.total = existingItem.quantity * existingItem.price;
				return cart;
			}
			return [...cart, { ...product, quantity, total: quantity * product.price }];
		});
	},
	removeProduct: (id: string, quantity?: number) => {
		store.update((cart) => {
			const existingItem = cart.find((item) => item.id === id);
			if (!existingItem) {
				return cart;
			}
			if (quantity) {
				existingItem.quantity -= quantity;
				if (existingItem.quantity <= 0) {
					cart = cart.filter((item) => item.id !== id);
				}
			} else {
				cart = cart.filter((item) => item.id !== id);
			}
			products.updateAvailableAmount(id, quantity || existingItem.quantity);
			return cart;
		});
	}
};
