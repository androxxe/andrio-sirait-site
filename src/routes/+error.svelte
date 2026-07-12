<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-full flex-col items-center justify-center p-4">
	<h2 class="mb-4 text-2xl font-bold text-red-500">Something went wrong!</h2>
	<p class="mb-4 text-gray-600">{page.status} - {page.error?.message ?? 'An error occurred'}</p>
	<a href="/" class="bg-primary-500 hover:bg-primary-700 rounded-full px-6 py-2 text-white"> Go Home </a>
</div>
