// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
			],

			link: [
				{
					href: 'https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap',
					rel: 'stylesheet'
				},
				{
					rel: 'stylesheet',
					href: 'https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css'
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg'
				},
				// Bunny Fonts
				{
					rel: 'preconnect',
					href: 'https://fonts.bunny.net'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.bunny.net/css?family=quicksand:400,500,600,700'
				}
			]
		}
	},
	srcDir: './src',
	build: {
		transpile: ['swiper']
	},
	modules: [
		'@element-plus/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-icons',
		'@unocss/nuxt',
		'nuxt-swiper'
	],
	googleFonts: {
		families: {
			Roboto: true
		}
	},

	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore']
		]
	},
	imports: {
		dirs: ['./stores']
	},
	unocss: {
		uno: false, // Disable the enabled-by-default preset to prevent conflicts with tailwind
		icons: {
			extraProperties: {
				display: 'block'
			}
		},
		attributify: true
	}
})
