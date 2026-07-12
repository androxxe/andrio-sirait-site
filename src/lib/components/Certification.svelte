<script lang="ts">
	import type { ICertification } from '$lib/types';

	let { certification }: { certification: ICertification } = $props();
</script>

<div class="rounded border border-border bg-surface p-4">
	<h4 class="text-sm font-semibold text-text-primary">{certification.name}</h4>
	<p class="mb-2 font-mono text-xs text-text-secondary">{certification.issuer}</p>
	<div class="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-text-tertiary">
		<span>Issued: {certification.issued_date}</span>
		<span>Expires: {certification.expiry_date}</span>
		<span>ID: {certification.credential_id}</span>
	</div>
</div>
