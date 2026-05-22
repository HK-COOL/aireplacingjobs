import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

function read(relativePath: string) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

const requiredRoutes = [
  '/',
  '/ai-job-risk-checker/',
  '/jobs-ai-will-replace/',
  '/jobs-safe-from-ai/',
  '/will-ai-take-my-job/',
  '/ai-replacing-jobs-statistics/',
  '/anthropic-ai-job-loss-forecast/',
  '/jobs/software-engineer/',
  '/jobs/accountant/',
  '/jobs/customer-service-representative/',
  '/jobs/data-analyst/',
  '/jobs/copywriter/',
  '/jobs/graphic-designer/',
  '/jobs/teacher/',
  '/jobs/lawyer/',
  '/jobs/financial-analyst/',
  '/jobs/translator/',
];

const localeIndex = read('src/config/locale/index.ts');
const sitemap = read('public/sitemap.xml');
const landing = read('src/config/locale/messages/en/landing.json');
const home = read('src/config/locale/messages/en/pages/index.json');
const robots = read('src/app/robots.ts');
const packageJson = read('package.json');
const localePaths = [
  'showcases',
  'blog',
  'updates',
  'pricing',
  'settings/sidebar',
  'admin/sidebar',
  'ai/music',
  'activity/sidebar',
];

for (const route of requiredRoutes) {
  const loc = `https://aireplacingjobs.org${route}`;
  assert(sitemap.includes(loc), `Missing sitemap URL: ${loc}`);
}

assert(!sitemap.includes('AIreplacingjobs.org'), 'Sitemap should use lowercase domain');
assert(!sitemap.includes('/pricing'), 'Sitemap should not include pricing');
assert(!sitemap.includes('/blog'), 'Sitemap should not include blog');
assert(!sitemap.includes('/docs'), 'Sitemap should not include docs');
assert(!sitemap.includes('/api/'), 'Sitemap should not include API routes');

for (const blocked of [
  '/admin/*',
  '/api/*',
  '/settings/*',
  '/pricing',
  '/blog',
  '/docs',
  '/chat',
]) {
  assert(robots.includes(blocked), `Robots should disallow ${blocked}`);
}

for (const pagePath of [
  'pages/ai-job-risk-checker',
  'pages/jobs-ai-will-replace',
  'pages/jobs-safe-from-ai',
  'pages/will-ai-take-my-job',
  'pages/ai-replacing-jobs-statistics',
  'pages/anthropic-ai-job-loss-forecast',
  'pages/jobs/software-engineer',
  'pages/jobs/accountant',
  'pages/jobs/customer-service-representative',
  'pages/jobs/data-analyst',
  'pages/jobs/copywriter',
  'pages/jobs/graphic-designer',
  'pages/jobs/teacher',
  'pages/jobs/lawyer',
  'pages/jobs/financial-analyst',
  'pages/jobs/translator',
]) {
  assert(localeIndex.includes(`'${pagePath}'`), `Missing localeMessagesPaths entry: ${pagePath}`);
}

assert(!landing.includes('ShipAny'), 'Landing navigation still contains ShipAny copy');
assert(!home.includes('ShipAny'), 'Homepage still contains ShipAny copy');
assert(!packageJson.includes('shipany'), 'package.json still contains ShipAny template metadata');
assert(home.includes('ai-job-risk-checker'), 'Homepage should include the checker block');
assert(
  !home.includes('Is AI Replacing Jobs? Check Which Careers Are at Risk'),
  'Homepage still contains awkward old page title'
);

for (const path of localePaths) {
  assert(
    !localeIndex.includes(`'${path}'`),
    `Locale payload should not include unused template namespace: ${path}`
  );
}

for (const asset of ['logo.png', 'favicon.ico', 'preview.png', 'apple-touch-icon.png']) {
  const stat = fs.statSync(path.join(root, 'public', asset));
  assert(stat.size > 1000, `Brand asset looks too small or missing: ${asset}`);
}

console.log('Site quality verifier passed.');
console.log(`Verified ${requiredRoutes.length} public sitemap routes.`);
