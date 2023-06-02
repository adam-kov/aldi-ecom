<script>
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { ShoppingCart } from 'lucide-svelte';
</script>

<AppShell slotPageFooter="text-center">
	<svelte:fragment slot="header">
		<AppBar>
			<a
				href="/products"
				slot="lead"
				class="text-2xl font-bold variant-soft !bg-transparent"
			>
				Ecom Store
			</a>
			<a href="/cart" slot="trail" type="button" class="btn-icon variant-soft">
				<ShoppingCart />
			</a>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		This is an assignment for ALDI International IT Services
	</svelte:fragment>
</AppShell>
