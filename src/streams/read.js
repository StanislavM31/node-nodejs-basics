import fs from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');

  const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  readStream.pipe(process.stdout);

  readStream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });
};

await read();