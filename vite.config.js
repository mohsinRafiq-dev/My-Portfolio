import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'framer-motion': ['framer-motion'],
                    'lucide-react': ['lucide-react'],
                    'emailjs': ['@emailjs/browser'],
                },
            },
        },
    },
});
