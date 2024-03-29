# ssg-test-1-astro

A test to see which of the Static Site Generators I should use for my personal website and blog.

- Tutorial at: <https://docs.astro.build/en/tutorial/0-introduction/>
- Components at: <https://github.com/markteekman/accessible-astro-starter> + <https://www.accessible-astro.dev/accessible-components/> + <https://github.com/markteekman/accessible-astro-components> + <https://github.com/shaunchander/astro-pwa-starter>
- Migration & next steps: <https://docs.astro.build/en/guides/migrate-to-astro/from-wordpress/> editable at <https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/migrate-to-astro/from-wordpress.mdx> and then <https://docs.astro.build/en/guides/cms/> and then maybe <https://astro.build/themes/submit>
- Integrations at: <https://astro.build/integrations/>

List of interesting integrations to consider:

- `@astrojs/mdx`
- `@astrojs/sitemap`
- `astro-compress` vs `astro-compressor` vs `astro-html-minifier`
- `astro-seo`
- `astro-robots-txt`
- `vite-plugin-pwa` + `astro-webmanifest`
- `@astrojs/partytown`
- `astro-i18next`
- `typescript` + `@typescript-eslint/eslint-plugin` + `@typescript-eslint/parser`
- `eslint` + `eslint-plugin-astro` + `eslint-plugin-jsx-a11y`
- `sass`
- `svgo`
- `@astro-community/astro-embed-youtube` + `@astro-community/astro-embed-twitter`
- `astro-purgecss`
- `astro-seo-meta`
- `astro-seo-schema`
- `@astrojs/vercel` or `@astrojs/netlify` or `@astrojs/cloudflare` or `@astrojs/deno` for deployment
- `astro-icon` test out
- `@astrojs/image` but may not work on Netlify/Vercel/Deno
- `accessible-astro-components` just to steal code from
- `@astrojs/tailwind` + `tailwindcss` (optional)
- `prettier` + `prettier-plugin-astro` + `prettier-plugin-tailwindcss` (optional)

[![Netlify Status](https://api.netlify.com/api/v1/badges/01e40750-bc4b-447c-9cd2-7cadacf27fdc/deploy-status)](https://app.netlify.com/sites/ssg-test-1-astro/deploys)

# Astro Starter Kit: Blog

```
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!


![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

[![Netlify Status](https://api.netlify.com/api/v1/badges/01e40750-bc4b-447c-9cd2-7cadacf27fdc/deploy-status)](https://app.netlify.com/sites/relaxed-unicorn-3a2f7b/deploys)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
