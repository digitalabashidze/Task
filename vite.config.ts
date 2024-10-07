import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
			'@assets': '/src/assets',
			'@images': '/src/assets/images',
		},
	},
})
