// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import { DOMParser } from 'xmldom';

	interface NoteArticle {
		title: string;
		link: string;
	}

export const load = async () => {
  const noteRssXML = await fetch('https://note.com/fec_hokkaido/m/m88550dbf59dd/rss').then((response) => {
    return response.text();
  }).catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  });

  if (!noteRssXML) return { articles: null };

  const parser = new DOMParser();
  const parsedXML: Document = parser.parseFromString(noteRssXML as string, 'text/xml');

  const articles: Array<NoteArticle | null> = Array.from(parsedXML.getElementsByTagName('item')).map((item) => {
    const title: string | null = item.getElementsByTagName('title')[0]?.textContent;
    const link: string | null = item.getElementsByTagName('link')[0]?.textContent;

    if (title && link) return { title, link };
    return null;
    }
  );

  return { articles: articles };
};
