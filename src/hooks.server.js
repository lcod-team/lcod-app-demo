import { lcodHandle } from '@lcod/backend';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	try {
		const response = await lcodHandle({ event, resolve });
		return response;
	} catch (e) {
		console.log('handle error ' + e);
		return resolve(event);
	}
}
