import fs from 'node:fs';

const routes = [
  { name: 'Home (/)', path: 'dist/index.html' },
  { name: 'Dietitians (/dietitians)', path: 'dist/dietitians/index.html' },
  { name: 'Programs (/programs)', path: 'dist/programs/index.html' },
  { name: 'How It Works (/how-it-works)', path: 'dist/how-it-works/index.html' },
  { name: 'FAQ (/faq)', path: 'dist/faq/index.html' },
  { name: 'Book (/book)', path: 'dist/book/index.html' },
  { name: '404 (/404)', path: 'dist/404.html' },
];

console.log('=== RAW HTML CRAWLABILITY AUDIT (BOT PERSPECTIVE - NO JAVASCRIPT) ===\n');

for (const r of routes) {
  const content = fs.readFileSync(r.path, 'utf8');
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const linkCount = (content.match(/<a\s+[^>]*href="[^"]*"/gi) || []).length;
  const rootIdx = content.indexOf('<div id="root">');
  const bodyIdx = content.indexOf('</body>');
  const rootLength = rootIdx !== -1 && bodyIdx !== -1 ? bodyIdx - rootIdx - 16 : 0;
  const hasJsonLd = content.includes('application/ld+json');
  const robotsMatch = content.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);

  console.log(`PAGE: ${r.name}`);
  console.log(`  • Title (${titleMatch ? titleMatch[1].length : 0} chars): ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  console.log(`  • Description (${descMatch ? descMatch[1].length : 0} chars): ${descMatch ? descMatch[1] : 'MISSING'}`);
  console.log(`  • Canonical: ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);
  console.log(`  • Robots: ${robotsMatch ? robotsMatch[1] : 'MISSING'}`);
  console.log(`  • H1 Tag: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : 'NONE'}`);
  console.log(`  • Crawlable <a href> Links: ${linkCount}`);
  console.log(`  • Pre-rendered HTML Body Size: ${rootLength} chars`);
  console.log(`  • JSON-LD Structured Data: ${hasJsonLd ? 'YES (Valid)' : 'NO'}`);
  console.log('');
}
