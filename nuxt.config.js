import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import siteConfig from './site.config';

export default {
	// The type of Nuxt project
	mode: 'universal',

	// Development server configuration
	server: {
		port: 3000,
		host: '0.0.0.0',
	},

	// Vue configuration
	vue: {
		config: {
			productionTip: false,
		},
	},

	// Headers of the page
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		titleTemplate: `%s - ${siteConfig.title}`,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: siteConfig.description },
		],
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/_nuxt/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/_nuxt/favicon-16x16.png',
			},
			{
				rel: 'shortcut icon',
				href: '/_nuxt/favicon.ico',
			},
		],
	},

	// Global CSS
	css: [
		'core-reset/core-reset.css',
	],

	// JavaScript plugins
	plugins: [
		'~/plugins/contentInjector.js',
	],

	// Nuxt modules
	modules: [
		'@bazzite/nuxt-optimized-images',
		'nuxt-global-base-components',
		'@nuxtjs/style-resources',
		'@nuxtjs/sitemap',
	],

	// Optimized Images configuration
	optimizedImages: {
		optimizeImages: true,
		optimizeImagesInDev: false,
	},

	// Style Resources configuration
	styleResources: {
		scss: [
			'@/assets/css/index.scss',
		],
	},

	// Sitemap configuration
	sitemap: {
		hostname: siteConfig.hostname,
		defaults: {
			changefreq: 'weekly',
			priority: 1,
			lastmod: new Date(),
			lastmodrealtime: true,
		},
	},

	// Build configuration
	build: {
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
		plugins: [
			new FaviconsWebpackPlugin({
				prefix: '/',
				logo: './assets/favicon/favicon.png',
				inject: false,
				favicons: {
					icons: {
						android: false,
						appleIcon: false,
						appleStartup: false,
						coast: false,
						favicons: true,
						firefox: false,
						opengraph: false,
						twitter: false,
						yandex: false,
						windows: false,
					},
				},
			}),
		],
		hotMiddleware: {
			client: {
				quiet: true,
			},
		},
	},
};
