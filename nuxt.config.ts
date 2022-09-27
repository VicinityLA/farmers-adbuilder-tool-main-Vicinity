import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	target: 'static',
	
	modules: ['@nuxtjs/tailwindcss'],

	head: {
		title: "Farmers Agency Growth Platform - Marketing Template Development Server",
		charset: "utf-8",
		viewport: "width=device-width, initial-scale=1",
	},
	
	components: {
		global: true,
		dirs: [
			'~/components'
		]
	}
})
