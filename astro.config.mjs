import { defineConfig } from 'astro/config';

// For GitHub Pages project page (octocog.github.io/osprey-learning):
//   site + base as below. When ospreylearning.com is pointed at the site,
//   set site: 'https://ospreylearning.com' and remove `base`.
export default defineConfig({
  site: 'https://octocog.github.io',
  base: '/osprey-learning/',
});
