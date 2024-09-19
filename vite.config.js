import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

server: {
  hmr: {
      host: 'localhost'
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
