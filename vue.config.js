const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// main.sass
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/sass/main.scss";`,
			},
		},
	},
	// change project logo
	pwa:{
		iconPaths:{
			favicon32:'favicon.ico',
			favicon16:'favicon.ico',
			appleTouchIcon:'favicon.ico',
			maskIcon:'favicon.ico',
			msTileImage:'favicon.ico',
		}
	},
	// token
	publicPath: process.env.NODE_ENV === 'production'
		? '/frontend-test'
		: '/'
})
