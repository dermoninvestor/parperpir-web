import { spawnSync } from 'node:child_process';
import { access, writeFile } from 'node:fs/promises';

const result = spawnSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, PARPERPIR_STATIC_EXPORT: '1' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await access('dist/client/index.html');
await writeFile('dist/client/.nojekyll', '');
