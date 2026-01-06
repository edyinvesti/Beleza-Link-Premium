import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Beleza-Link-Premium/', // ISSO AQUI É O QUE FAZ O SITE SAIR DO PRETO E BRANCO
})