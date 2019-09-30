# Static Site Template

This is a static site template built on top of [Nuxt](https://nuxtjs.org/), a [Vue](https://vuejs.org) framework. The build process outputs a bundle of static HTML files that can be deployed on any server.

## Features

- Automatic linting, minification, code-splitting, and bundling
- ES2015+ transpilation
- Sass pre-processing
- Automatic image optimization
- Automatic favicon generation
- Automatic sitemap generation
- Development server (localhost/LAN) with hot module replacement
- CLI for generating new files with boilerplate code
- Static site generation

## Content Management

Simply add your content to `content.js` and it will be available in Vue as `$content`. For example:

``` js
export default {
	home: {
		heading: 'Lorem Ipsum',
		body: '<p>Dolor sit amet.</p>',
	},
};
```

``` vue
<template>
	<div class="home">
		<h1>{{ $content.home.heading }}</h1>
		<div v-html="$content.home.body"/>
	</div>
</template>
```

## Commands

``` sh
# Set up project
npm install

# Compile and hot-reload for development
npm run serve

# Create a new file
npm run new <component|layout|page|utility>

# Generate static project
npm run build
```

## Tips

- JPGs, PNGs, and SVGs placed in the `/assets` directory will be automatically optimized in production.
- Static, top-level files such as `robots.txt` should be placed in `/static`.
- `/assets/favicon/favicon.png` is the master image used for favicon generation (must be at least 64×64).
- Prefix pure components with `Base` to be automatically imported and registered (e.g. `BaseInput`).
- `/layouts/error.vue` must be treated as a page even though it's in the layouts directory.
