import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     // Add this alias to resolve FontAwesome correctly
  //     '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
  //   },
  // },
})
