<script lang="ts">
	import ProductCard from '../../../lib/product/product-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid">
	{#each data.products as product}
		<ProductCard {product} />
	{/each}
</div>
