import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const productionDomain = 'https://aireplacingjobs.org';

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

function read(relativePath: string) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function exists(relativePath: string) {
  return fs.existsSync(path.join(root, relativePath));
}

const vercel = JSON.parse(read('vercel.json')) as {
  buildCommand?: string;
  installCommand?: string;
  functions?: unknown;
};
const envProduction = read('.env.production');
const envExample = read('.env.example');
const sitemap = read('public/sitemap.xml');
const robots = read('src/app/robots.ts');
const packageJson = read('package.json');

assert(
  vercel.buildCommand === 'pnpm exec next build --webpack',
  'Vercel buildCommand should use the verified webpack build path'
);
assert(
  vercel.installCommand === 'pnpm install --frozen-lockfile',
  'Vercel installCommand should keep the lockfile frozen'
);
assert(!('functions' in vercel), 'vercel.json should not keep stale API function config');

assert(
  envProduction.includes(`NEXT_PUBLIC_APP_URL = "${productionDomain}"`),
  'Production app URL should use the lowercase production domain'
);
assert(!envProduction.includes('AIreplacingjobs.org'), 'Production env still contains uppercase domain');
assert(!sitemap.includes('AIreplacingjobs.org'), 'Sitemap still contains uppercase domain');
assert(!sitemap.includes(`${productionDomain}/sitemap.xml`), 'Sitemap must list pages, not itself');
assert(robots.includes('sitemap:'), 'robots.ts should expose the sitemap URL');

for (const blocked of ['/pricing', '/blog', '/docs', '/chat', '/settings', '/admin', '/api/']) {
  assert(!sitemap.includes(blocked), `Sitemap should not include blocked route: ${blocked}`);
}

for (const asset of [
  'logo.png',
  'favicon.ico',
  'icon.png',
  'apple-touch-icon.png',
  'preview.png',
]) {
  const file = path.join(root, 'public', asset);
  assert(fs.statSync(file).size > 1000, `Brand asset is missing or too small: ${asset}`);
}

assert(!exists('public/robots.txt'), 'Do not add public/robots.txt when src/app/robots.ts serves robots');
assert(!exists('src/app/api'), 'src/app/api should stay removed for public v1 launch');
assert(!packageJson.toLowerCase().includes('shipany'), 'package.json still has template metadata');

for (const envFile of [envProduction, envExample]) {
  assert(!/sk-[A-Za-z0-9]/.test(envFile), 'Potential provider secret found in env sample');
  assert(!/ghp_[A-Za-z0-9]/.test(envFile), 'Potential GitHub token found in env sample');
  assert(!/whsec_[A-Za-z0-9]/.test(envFile), 'Potential webhook secret found in env sample');
}

console.log('Launch readiness verifier passed.');
console.log(`Production domain: ${productionDomain}`);
