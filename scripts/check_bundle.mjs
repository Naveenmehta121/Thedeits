import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(path.join('dist/assets', file), 'utf8');
  console.log(`Checking ${file} (${content.length} bytes)...`);
  
  const thedeitsMatches = [...content.matchAll(/thedeits/gi)];
  console.log(`  Matches for 'thedeits': ${thedeitsMatches.length}`);
  for (const m of thedeitsMatches) {
    const start = Math.max(0, m.index - 50);
    const end = Math.min(content.length, m.index + 50);
    console.log(`    Context: ...${content.substring(start, end)}...`);
  }

  const noindexMatches = [...content.matchAll(/noindex/gi)];
  console.log(`  Matches for 'noindex': ${noindexMatches.length}`);
  for (const m of noindexMatches) {
    const start = Math.max(0, m.index - 50);
    const end = Math.min(content.length, m.index + 50);
    console.log(`    Context: ...${content.substring(start, end)}...`);
  }
}

