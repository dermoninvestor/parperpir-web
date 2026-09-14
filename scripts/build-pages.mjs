import { spawnSync } from 'node:child_process';
import { access, rename, writeFile } from 'node:fs/promises';

const result = spawnSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, PARPERPIR_STATIC_EXPORT: '1' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await access('dist/client/index.html');
// GitHub mounts this artifact at the repository path; avoid nesting that path twice.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath) {
  if (!/^\/[A-Za-z0-9_.-]+$/.test(basePath) || basePath === '/..') {
    throw new Error('Invalid GitHub Pages repository path');
  }
  await rename(`dist/client${basePath}/_next`, 'dist/client/_next');
}
await writeFile('dist/client/.nojekyll', '');
