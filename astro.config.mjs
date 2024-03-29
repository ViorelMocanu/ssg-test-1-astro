import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	/*base: '/ssg-test-1-astro',*/
	integrations: [mdx(), sitemap()],
});
