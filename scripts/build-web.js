const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'index.html');
const output = path.join(root, 'dist');

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(source, path.join(output, 'index.html'));
console.log('Built static web application into dist/');
