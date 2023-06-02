<script lang="ts">
	import ProductCard from '../../../lib/product/product-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid justify-center grid-cols-[repeat(auto-fill,280px)] gap-8 p-8">
	{#each data.products as product}
		<ProductCard {product} />
	{/each}
</div>
