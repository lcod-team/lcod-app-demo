<script>
	import { Box, Card, WiredNews } from '@lcod/set-demo';
	import { limit } from './store.js';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let edition = '';
	let live = false;
	onMount(() => (live = true));
</script>

{#if live}
	<div class="news" in:fade|global={{ delay: 250, duration: 300 }}>
		<Box --style="none" --background="#ccffcc">
			<Box --align="center" --background="#ffffcc"
				>{edition.replace(/.*?(\w+$)/, '$1').toUpperCase()}</Box
			>
			<WiredNews limit={$limit} {edition}>
				<div
					slot="post"
					let:title
					let:description
					let:link
					let:image
					transition:slide|global={{ delay: 0, duration: 500 }}
				>
					<Card {title} description={description == title ? '' : description} {link} {image} />
				</div>
			</WiredNews>
		</Box>
	</div>
{/if}

<style>
	.news {
		width: 300px;
	}
</style>
