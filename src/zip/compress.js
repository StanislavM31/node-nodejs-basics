import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const compress = async () => {
  const fPath = path.join(process.cwd(), 'files', 'fileToCompress.txt');
  const output = path.join(process.cwd(), 'files', 'archive.gz');

  const rStream = fs.createReadStream(fPath);
  const wStream = fs.createWriteStream(output);

  const zipStream = zlib.createGzip();

  rStream
    .pipe(zipStream)
    .pipe(wStream)
    .on('finish', () => {
      console.log('File compressed successfully');
    });

  rStream.on('error', (e) => {
    console.error('Error reading file:', e.message);
  });

  wStream.on('error', (e) => {
    console.error('Error writing file:', e.message);
  });

  zipStream.on('error', (e) => {
    console.error('Error during compression:', e.message);
  });
};

await compress();