<script lang="ts">
	import { onMount } from 'svelte';
	import { ProductCard, products } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		// Only set the products store if they are not already set
		// This is because of the limitations of the data API
		if ($products.length === 0) {
			products.set(data.products);
		}
	});
</script>

<div class="grid justify-center grid-cols-[repeat(auto-fill,280px)] gap-8">
	{#each $products as product}
		<ProductCard {product} />
	{/each}
</div>

<svelte:head>
	<title>Products | Ecom Store</title>
</svelte:head>
