export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
