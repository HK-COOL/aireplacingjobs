import fs from 'node:fs';
import path from 'node:path';

const host = 'aireplacingjobs.org';
const origin = `https://${host}`;
const key = 'aijobs20260523indexnow35a02c0d';
const keyLocation = `${origin}/${key}.txt`;
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

function readSitemapUrls() {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
    (match) => match[1]
  );
}

async function main() {
  const urlList = readSitemapUrls();
  if (urlList.length === 0) {
    throw new Error('No URLs found in public/sitemap.xml');
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText}\n${body}`
    );
  }

  console.log(`IndexNow accepted ${urlList.length} URLs.`);
  console.log(`Key location: ${keyLocation}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
