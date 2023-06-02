import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { ProductData } from '$lib';

export const load = (async ({ fetch }) => {
	try {
		const res = await fetch('https://63c10327716562671870f959.mockapi.io/products');
		const products = (await res.json()) as ProductData[];
		return { products };
	} catch (err) {
		throw error(500, 'Could not load products');
	}
}) satisfies PageServerLoad;
