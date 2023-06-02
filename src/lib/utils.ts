import { toastStore } from '@skeletonlabs/skeleton';

export function formatPrice(price: number) {
	const formatter = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 2
	});
	return formatter.format(price);
}

export function sendToast(message: string, type: 'success' | 'error' = 'success') {
	const background =
		type === 'success' ? 'bg-success-700-200-token' : 'bg-error-700-200-token';
	toastStore.trigger({ message, background, classes: 'text-white dark:text-black' });
}
