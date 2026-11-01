import fs from 'node:fs';

const pages = [
  { name: 'Home (/)', path: 'dist/index.html' },
  { name: 'Dietitians (/dietitians)', path: 'dist/dietitians/index.html' },
  { name: 'Programs (/programs)', path: 'dist/programs/index.html' },
  { name: 'How It Works (/how-it-works)', path: 'dist/how-it-works/index.html' },
  { name: 'FAQ (/faq)', path: 'dist/faq/index.html' },
  { name: 'Book (/book)', path: 'dist/book/index.html' }
];

console.log('=== STRUCTURED DATA JSON-LD VALIDATION REPORT ===\n');

for (const p of pages) {
  const html = fs.readFileSync(p.path, 'utf8');
  const matches = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (matches.length === 0) {
    console.error(`✗ ${p.name}: No JSON-LD found!`);
    continue;
  }
  if (matches.length > 1) {
    console.warn(`! ${p.name}: Multiple JSON-LD tags found (${matches.length})`);
  }
  const parsed = JSON.parse(matches[0][1]);
  const types = parsed['@graph'].map(x => x['@type']);
  console.log(`✓ ${p.name}`);
  console.log(`  Count: ${types.length} schema entities`);
  console.log(`  Entities: ${types.join(', ')}`);
}
