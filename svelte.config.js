import adapter from '@sveltejs/adapter-auto';
import { configureLcodPreprocessor } from '@lcod/preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: configureLcodPreprocessor({ writeSvelte: false, lcpath: false }),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	vitePlugin: {
		prebundleSvelteLibraries: false
	}
};

export default config;
