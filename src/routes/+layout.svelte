<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import { AppShell, AppBar, Toast } from '@skeletonlabs/skeleton';
	import { ShoppingCart } from 'lucide-svelte';
	import { cart } from '$lib';
</script>

<AppShell slotPageFooter="text-center p-1" slotPageContent="p-8">
	<AppBar slot="header" background="bg-primary-500-400-token">
		<a
			href="/products"
			slot="lead"
			class="text-2xl font-bold variant-soft !bg-transparent text-white dark:!text-black"
		>
			Ecom Store
		</a>
		<a
			href="/cart"
			slot="trail"
			class="btn-icon variant-soft !text-white dark:!text-black"
		>
			<span class="relative flex justify-center items-center w-full h-full">
				{#if $cart.length > 0}
					<span
						transition:fade={{ duration: 200 }}
						class="badge-icon variant-filled-warning absolute -top-0 -right-0 z-10"
					>
						{$cart.length}
					</span>
				{/if}
				<ShoppingCart />
			</span>
		</a>
	</AppBar>
	<slot />
	<svelte:fragment slot="pageFooter">
		This is an assignment for ALDI International IT Services
	</svelte:fragment>
</AppShell>
<Toast />
