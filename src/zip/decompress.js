import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const decompress = async () => {
    
  const input = path.join(process.cwd(), 'files', 'archive.gz');
  const output = path.join(process.cwd(), 'files', 'fileToCompress.txt');

  const rStream = fs.createReadStream(input);
  const wStream = fs.createWriteStream(output);

  const gzStream = zlib.createGunzip();

  rStream
    .pipe(gzStream)
    .pipe(wStream)
    .on('finish', () => {
      console.log('File decompressed successfully');
    });

  rStream.on('error', (e) => {
    console.error('Error reading file:', e.message);
  });

  wStream.on('error', (e) => {
    console.error('Error writing file:', e.message);
  });

  gzStream.on('error', (e) => {
    console.error('Error during decompression:', e.message);
  });
};

await decompress();