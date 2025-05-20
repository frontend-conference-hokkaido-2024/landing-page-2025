import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch('https://note.com/fec_hokkaido/m/m88550dbf59dd/rss');
		const text = await response.text();
		return new Response(text, {
			headers: {
				'Content-Type': 'application/xml'
			}
		});
	} catch (error) {
		console.error('RSSフィードの取得に失敗しました:', error);
		return json({ error: 'RSSフィードの取得に失敗しました' }, { status: 502 });
	}
};
