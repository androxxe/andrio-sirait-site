import portfolios from '$lib/data/portfolios';

export function entries() {
	return portfolios.map((p) => ({ slug: p.slug }));
}

export const prerender = true;
