// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register";
import tailwindcss from "@tailwindcss/vite";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    site: "https://www.staceyjenkins.co.uk",
    integrations: [mdx(), sitemap(), react(), tinaDirective(), 
      swup({theme: 'fade',
         animationClass: true,
         accessibility: true,
         preload: {
          hover: true,
          visible: false
        },
         smoothScrolling: true,
         progress: true,
         })],
    redirects: {
        '/admin': '/admin/index.html'
      },
      vite: { 
        plugins: [tailwindcss()],  
    }
});