<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col text-center items-center">
	<h1 class="text-2xl mb-8">
		<span class="font-bold">
			{$page.status}:
		</span>
		{$page.error?.message}
	</h1>
	<a href="/products" class="btn variant-filled-primary">Go back home</a>
</div>
