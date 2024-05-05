import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      manifest: {
        name: 'Carrier',
        short_name: 'Carrier',
        description: 'Carrier app for sending and receiving parcels',
        theme_color: '#52e08c',
        icons: [
          {
            src: './src/assets/Icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/Icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],

      }
    })
  ]
})