import { defineConfig } from 'astro/config'; 
import mdx from '@astrojs/mdx'; 
import keystatic from '@keystatic/astro'; 
import react from '@astrojs/react'; 
import cloudflare from '@astrojs/cloudflare'; 
import sitemap from '@astrojs/sitemap'; 
 
export default defineConfig({ 
  site: 'https://azatisrail.org', 
  output: 'hybrid', 
  adapter: cloudflare(), 
  integrations: [mdx(), keystatic(), react(), sitemap()], 
}); 
