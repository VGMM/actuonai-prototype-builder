
// This script helps run the project locally without modifying package.json
const { exec } = require('child_process');
const path = require('path');

console.log('Starting local development server...');
console.log('Running: npm run dev');

// Execute the npm run dev command
const child = exec('npm run dev', {
  cwd: path.resolve(__dirname)
});

// Forward stdout and stderr to the console
child.stdout.on('data', (data) => {
  console.log(data);
});

child.stderr.on('data', (data) => {
  console.error(data);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

// Handle SIGINT (Ctrl+C) to properly kill the child process
process.on('SIGINT', () => {
  child.kill();
  process.exit();
});
