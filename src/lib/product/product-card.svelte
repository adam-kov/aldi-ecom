<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import { formatPrice } from '../utils';
	import type { ProductData } from './';

	export let product: ProductData;
	let isHovered = false;
	let amount = product.minOrderAmount;

	$: amount = Math.max(product.minOrderAmount, Math.min(amount, product.availableAmount));
</script>

<div
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	class="card !bg-white dark:!bg-surface-700 !ring-surface-300 hover:!ring-surface-500 w-full duration-200 ease-in"
>
	<header class="card-header">
		<div class="rounded-sm overflow-hidden">
			<img
				src={product.img}
				alt="{product.name} product image"
				class="aspect-square object-scale-down duration-200 ease-in"
				class:scale-105={isHovered}
			/>
		</div>
	</header>
	<section class="p-4">
		<div class="flex flex-wrap items-center mb-4">
			<span class="grow text-xl leading-none font-semibold">
				{product.name}
			</span>
			<span class="badge variant-filled-tertiary text-sm font-bold">
				{formatPrice(product.price)}
			</span>
		</div>
		<div
			class="flex justify-between items-center rounded-full border border-primary-200 overflow-hidden mb-2"
		>
			<button
				disabled={amount <= product.minOrderAmount}
				on:click={() => amount--}
				class="btn variant-soft !rounded-l-full !p-1"
			>
				<Minus />
			</button>
			<input
				type="number"
				bind:value={amount}
				class="max-w-[calc(100%-32px*2)] px-2 py-1.5 text-lg leading-none text-center"
			/>
			<button
				disabled={amount >= product.availableAmount}
				on:click={() => amount++}
				class="btn variant-soft !rounded-r-full !p-1"
			>
				<Plus />
			</button>
		</div>
		<button class="w-full btn variant-filled-primary"> Add to cart </button>
	</section>
</div>
