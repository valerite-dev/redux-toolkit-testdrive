import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import express from './api/express-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express({ entry: 'api' })],
});
