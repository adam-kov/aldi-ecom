<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import { formatPrice, cart } from '../';
	import type { ProductData } from './';

	export let product: ProductData;
	const [width, height] = new URL(product.img).searchParams.get('s')?.split('x') ?? [
		2048, 2048
	];
	let isHovered = false;
	let amount = product.minOrderAmount;

	$: amount = Math.max(product.minOrderAmount, Math.min(amount, product.availableAmount));
	$: disabled = product.availableAmount <= 0;

	function updateAmount(type: 'increment' | 'decrement') {
		type === 'increment' ? amount++ : amount--;
	}

	function addToCart() {
		cart.addProduct(product, amount);
	}
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
				{width}
				{height}
				class="aspect-square object-scale-down duration-200 ease-in"
				class:scale-105={isHovered && !disabled}
				class:grayscale={disabled}
				class:opacity-50={disabled}
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
		<div class="text-sm text-neutral-500 mb-1">
			<span> Available amount: </span>
			<span class="font-semibold">{product.availableAmount}</span>
		</div>
		<div
			class="flex justify-between items-center rounded-full border border-primary-200 overflow-hidden mb-2"
		>
			<button
				disabled={disabled || amount <= product.minOrderAmount}
				on:click={() => updateAmount('decrement')}
				class="btn variant-soft !rounded-l-full !p-1"
			>
				<Minus />
			</button>
			<input
				type="number"
				bind:value={amount}
				{disabled}
				class="max-w-[calc(100%-32px*2)] px-2 py-1 text-lg leading-none text-center disabled:text-neutral-400"
			/>
			<button
				disabled={disabled || amount >= product.availableAmount}
				on:click={() => updateAmount('increment')}
				class="btn variant-soft !rounded-r-full !p-1"
			>
				<Plus />
			</button>
		</div>
		<button class="w-full btn variant-filled-primary" on:click={addToCart} {disabled}>
			Add to cart
		</button>
	</section>
</div>
