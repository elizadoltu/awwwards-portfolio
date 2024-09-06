import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create sitemap
const sitemap = new SitemapStream({ hostname: 'https://elizadoltuofficial.net' });

// Generate sitemap
const pagesDirectory = join(__dirname, '/src/components'); // Adjust the path as needed
const pages = readdirSync(pagesDirectory).filter(file => file.endsWith('.html') || file.endsWith('.tsx')); // Filter for your page types

pages.forEach(page => {
  sitemap.write({ url: `/${page}`, changefreq: 'weekly', priority: 0.8 });
});

sitemap.end();
streamToPromise(sitemap).then(data => {
  createWriteStream('public/sitemap.xml').write(data.toString());
});
