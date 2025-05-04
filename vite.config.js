import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'auth/login.html'),
        register: path.resolve(__dirname, 'auth/register.html'),
        game: path.resolve(__dirname, 'game/index.html'),       // Updated from details
        genre: path.resolve(__dirname, 'genre/index.html'),     // Added for genre
        profile: path.resolve(__dirname, 'profile/index.html'),
        NotFound: path.resolve(__dirname, 'NotFound/index.html') // Added NotFound
      }
    }
  }
});
