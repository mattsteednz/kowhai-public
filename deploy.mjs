import SftpClient from 'ssh2-sftp-client';
import { readFile, readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env from the current directory
const envPath = path.join(__dirname, '.env');
if (existsSync(envPath)) {
  const env = await readFile(envPath, 'utf-8');
  for (const line of env.split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
}

const { SFTP_HOST, SFTP_USER, SFTP_PASSWORD } = process.env;
if (!SFTP_HOST || !SFTP_USER || !SFTP_PASSWORD) {
  console.error('Error: SFTP_HOST, SFTP_USER and SFTP_PASSWORD must be set in smart-book/.env');
  process.exit(1);
}

const distDir = path.join(__dirname, 'dist');
if (!existsSync(distDir)) {
  console.error('dist/ not found — run: npm run build');
  process.exit(1);
}

const remoteRoot = 'kowhai.mattsteed.com';

const sftp = new SftpClient();

async function uploadDir(localDir, remoteDir) {
  await sftp.mkdir(remoteDir, true);
  const entries = await readdir(localDir);
  for (const entry of entries) {
    const localPath = path.join(localDir, entry);
    const remotePath = `${remoteDir}/${entry}`;
    const s = await stat(localPath);
    if (s.isDirectory()) {
      await uploadDir(localPath, remotePath);
    } else {
      console.log(`  uploading ${remotePath}`);
      await sftp.put(localPath, remotePath);
    }
  }
}

try {
  console.log(`Connecting to ${SFTP_HOST}...`);
  await sftp.connect({ host: SFTP_HOST, username: SFTP_USER, password: SFTP_PASSWORD });

  // Remove Dreamhost placeholder files that may block serving
  const toDelete = ['index.html', 'favicon.ico', 'favicon.gif', 'quickstart.html'];
  for (const f of toDelete) {
    try {
      await sftp.delete(`${remoteRoot}/${f}`);
      console.log(`Removed ${f}`);
    } catch {
      // Didn't exist — fine
    }
  }

  console.log(`Uploading dist/ → ${remoteRoot}/`);
  await uploadDir(distDir, remoteRoot);

  console.log('\nDeploy complete: https://kowhai.mattsteed.com');
} catch (err) {
  console.error('Deploy failed:', err.message);
  process.exit(1);
} finally {
  await sftp.end();
}
