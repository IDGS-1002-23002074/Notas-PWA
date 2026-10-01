import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Convierte la app en PWA (Progressive Web App):
    // - Genera el service worker automáticamente (offline + cache).
    // - Genera/inyecta el manifest.webmanifest (icono, nombre, colores).
    // registerType: 'autoUpdate' hace que el service worker se actualice
    // solo cuando hay una nueva versión, sin que el usuario tenga que hacer nada.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        id: '/quicknotes-app', 
        name: 'QuickNotes PWA',
        short_name: 'QuickNotes',
        description: 'Aplicación de notas rápidas instalable, de arquitectura escalable y funcional offline',
        theme_color: '#2563eb',
        background_color: '#f8fafc',
        display: 'standalone', // Se abre como app independiente, sin la barra del navegador
        start_url: '/',
        icons: [
          {
            src: 'image2.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // Versión adaptable a iconos redondos/cuadrados en Android
          },
        ],
      },
      workbox: {
        // Cachea automáticamente todo lo que Vite genera en el build (JS, CSS, HTML, imágenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
  // Configuración de puertos independientes
  server: {
    port: 5174, // Puerto para desarrollo con "npm run dev"
  },
  preview: {
    port: 4174, // Puerto para previsualización con "npm run preview"
  },
})