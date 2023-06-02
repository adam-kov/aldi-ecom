export function formatPrice(price: number) {
	const formatter = new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 2
	});
	return formatter.format(price);
}
