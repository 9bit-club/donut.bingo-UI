// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    esbuild: {
      target: 'esnext'
    },
    build: {
      target: 'esnext'
    },
    optimizeDeps: {
      include: ['@project-serum/anchor', '@solana/web3.js', 'buffer'],
      esbuildOptions: {
        target: 'esnext'
      }
    },
    define: {
      'process.env.BROWSER': true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
