<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { ShoppingCart } from 'lucide-svelte';
</script>

<AppShell slotPageFooter="text-center p-1">
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
			type="button"
			class="btn-icon variant-soft !text-white dark:!text-black"
		>
			<ShoppingCart />
		</a>
	</AppBar>
	<slot />
	<svelte:fragment slot="pageFooter">
		This is an assignment for ALDI International IT Services
	</svelte:fragment>
</AppShell>
