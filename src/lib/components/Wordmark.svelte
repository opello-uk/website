<script lang="ts">
	import raw from '#lib/assets/opello-wordmark.svg?raw';

	// Strip the file's fixed size and label; this instance is decorative
	// (the link around it carries the accessible name).
	const svg = raw
		.replace(/\s(width|height)="[^"]*"/g, '')
		.replace(/\srole="img"/, '')
		.replace(/\saria-label="[^"]*"/, ' aria-hidden="true" focusable="false"');
</script>

<span class="wordmark">{@html svg}</span>

<style>
	.wordmark {
		display: block;
		color: var(--peach);
		line-height: 0;
	}
	.wordmark :global(svg) {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
