const routes = ['/', '/dietitians', '/programs', '/faq', '/book'];

async function checkRoute(route) {
  const url = `https://www.thediets.in${route === '/' ? '' : route}`;
  console.log(`\n========================================`);
  console.log(`CHECKING: ${url}`);
  console.log(`========================================`);

  const res = await fetch(url);
  console.log(`Status: ${res.status}`);
  console.log(`X-Robots-Tag: ${res.headers.get('x-robots-tag')}`);

  const html = await res.text();
  console.log(`HTML Length: ${html.length}`);

  // Canonical
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  console.log(`Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}`);

  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}`);

  // Meta description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  console.log(`Description: ${descMatch ? descMatch[1] : 'NOT FOUND'}`);

  // Robots meta
  const robotsMatch = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);
  console.log(`Robots Meta: ${robotsMatch ? robotsMatch[1] : 'NOT FOUND'}`);

  // H1 tag
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    console.log(`H1: ${h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')}`);
  } else {
    console.log(`H1: NOT FOUND`);
  }

  // JSON-LD check
  const jsonLdMatch = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      const types = (parsed['@graph'] || [parsed]).map(item => item['@type']).flat();
      console.log(`JSON-LD Types: ${types.join(', ')}`);
    } catch (e) {
      console.log(`JSON-LD Parse Error: ${e.message}`);
    }
  } else {
    console.log(`JSON-LD: NOT FOUND`);
  }
}

for (const r of routes) {
  await checkRoute(r);
}
