import { localStorageStore } from '@skeletonlabs/skeleton';
import { products, type ProductData, sendToast } from '../';
import type { CartData } from '.';
import { get } from 'svelte/store';

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
			sendToast(`Added ${quantity} "${product.name}" to cart`);
			if (existingItem) {
				existingItem.quantity += quantity;
				existingItem.total = existingItem.quantity * existingItem.price;
				return cart;
			}
			return [...cart, { ...product, quantity, total: quantity * product.price }];
		});
	},
	removeProduct: (product: ProductData, quantity?: number) => {
		const { id, name } = product;
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
			const { success } = products.updateAvailableAmount(
				id,
				quantity || existingItem.quantity
			);
			if (success) {
				sendToast(`Removed ${quantity} "${name}" from cart`);
			}
			return cart;
		});
	},
	reset: () => {
		get(store).forEach((item) => {
			products.updateAvailableAmount(item.id, item.quantity);
		});
		store.set([]);
		sendToast('Cart reset');
	}
};
