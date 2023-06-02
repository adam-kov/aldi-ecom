<script lang="ts">
	import { cart, formatPrice } from '$lib';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	const source: TableSource = {
		head: ['Name', 'Price', 'Quantity', 'Total'],
		body: tableMapperValues($cart, ['name', 'price', 'quantity', 'total']).map((row) => {
			row[1] = formatPrice(row[1]);
			row[3] = formatPrice(row[3]);
			return row;
		})
	};

	$: total = $cart.reduce((acc, curr) => acc + curr.total, 0);
</script>

<h1 class="text-2xl font-bold mb-8">Your cart</h1>

{#if $cart.length === 0}
	<div class="flex flex-col justify-center items-center">
		<p class="text-xl font-semibold text-neutral-600 mb-4">Your cart is empty</p>
		<a href="/products" class="btn variant-filled-primary">See products</a>
	</div>
{:else}
	<Table {source} />
	<div class="flex justify-end items-center gap-2 mt-4">
		<span class="text-xl"> Total: </span>
		<span class="badge variant-filled-tertiary text-xl font-semibold">
			{formatPrice(total)}
		</span>
	</div>
{/if}

<svelte:head>
	<title>Cart | Ecom Store</title>
</svelte:head>
