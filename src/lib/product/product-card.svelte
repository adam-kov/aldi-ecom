<script lang="ts">
	import type { ProductData } from './';

	export let product: ProductData;
</script>

<div class="card variant-filled-surface">
	<header class="card-header">
		{product.name}
	</header>
	<section class="p-4">
		<img src={product.img} alt="{product.name} product image" />
	</section>
	<footer class="card-footer">(footer)</footer>
</div>
