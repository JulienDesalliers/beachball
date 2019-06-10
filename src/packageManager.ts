import { spawnSync } from 'child_process';
import os from 'os';

export function npm(args: string[], options?: { cwd: string }) {
  const npmCmd = os.platform() === 'win32' ? 'npm.cmd' : 'npm';

  const results = spawnSync(npmCmd, args, options);

  if (results.status === 0) {
    return {
      stderr: results.stderr.toString().trim(),
      stdout: results.stdout.toString().trim(),
      success: true
    };
  } else {
    return {
      stderr: results.stderr.toString().trim(),
      stdout: results.stdout.toString().trim(),
      success: false
    };
  }
}

export function packagePublish(packagePath: string, registry: string, tag: string) {
  npm(['publish', '--registry', registry, '--tag', tag], { cwd: packagePath });
}
