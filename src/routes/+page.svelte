<script>
	import AllNews from '$lib/AllNews.lcod';
	import { Box } from '@lcod/set-demo';
	import { limit } from '$lib/AllNews.lcod/palette/News.lcod/store.js';
	import { onMount } from 'svelte';
	let live = false;
	onMount(() => (live = true));
</script>

{#if live}
	<div class="head">
		<Box --background="orange"
			><label for="number">Number of articles: </label><input
				type="range"
				min="1"
				max="20"
				bind:value={$limit}
				id="number"
			/>&nbsp;{$limit}</Box
		>
	</div>
{/if}
<div class="spacer" />
<AllNews />

<style>
	@keyframes slide {
		from {
			left: -20%;
		}
		to {
			left: 20%;
		}
	}
	.head {
		position: fixed;
		left: 20%;
		animation-name: slide;
		animation-duration: 1s;
	}
	.spacer {
		height: 75px;
	}
</style>
