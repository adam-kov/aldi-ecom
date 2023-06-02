import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('https://63c10327716562671870f959.mockapi.io/products');
	const products = await res.json();
	return { products };
}) satisfies PageServerLoad;
