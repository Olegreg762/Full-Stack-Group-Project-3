import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import ViteReactPlugin from '@vitejs/plugin-react';
// import ReactRefreshPlugin from "@vitejs/plugin-react-refresh";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ ViteReactPlugin()], 
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
