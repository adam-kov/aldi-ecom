import { localStorageStore, toastStore } from '@skeletonlabs/skeleton';
import type { ProductData } from '.';

const store = localStorageStore<ProductData[]>('products', []);

export const products = {
	subscribe: store.subscribe,
	set: store.set,
	updateAvailableAmount: (id: string, amountDifference: number) => {
		const result = {
			success: false,
			amount: null as number | null
		};
		store.update((products) => {
			const product = products.find((product) => product.id === id);
			if (!product) {
				return products;
			}
			if (isAmountDifferenceValid(product, amountDifference)) {
				product.availableAmount += amountDifference;
				result.success = true;
				result.amount = product.availableAmount;
			} else {
				toastStore.trigger({
					message: `The requested amount of "${product.name}" is not available`
				});
			}
			return products;
		});
		return result;
	}
};

function isAmountDifferenceValid(product: ProductData, amountDifference: number) {
	return product.availableAmount + amountDifference >= 0;
}
