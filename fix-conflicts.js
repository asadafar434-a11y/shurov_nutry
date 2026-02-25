import fs from 'fs';

const files = [
  'src/imports/Site.tsx',
  'src/imports/Logo.tsx',
  'src/app/components/InteractiveSite.tsx',
];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const result = [];
  let inHead = false;
  let inTheirs = false;

  for (const line of lines) {
    if (line.startsWith('<<<<<<< ')) {
      inHead = true;
      inTheirs = false;
    } else if (line === '=======' && inHead) {
      inTheirs = true;
    } else if (line.startsWith('>>>>>>> ') && inTheirs) {
      inHead = false;
      inTheirs = false;
    } else if (!inTheirs) {
      result.push(line);
    }
  }

  fs.writeFileSync(filePath, result.join('\n'), 'utf8');
  console.log('Fixed: ' + filePath);
});
console.log('Done!');
