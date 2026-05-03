import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

// For Keystatic to work in production (GitHub mode), set:
// KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET
// in Cloudflare Pages environment variables.
// For local development, Keystatic works out of the box in "local" mode.

export default defineConfig({
  output: 'static',
  integrations: [mdx(), keystatic(), react()],
  // Cloudflare Pages adapter — uncomment when deploying:
  // adapter: cloudflare(),
});