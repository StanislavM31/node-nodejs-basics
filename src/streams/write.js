import fs from 'fs';
import path from 'path';

const write = async () => {

    //node write.js from this dir then ctrl+c

  const filePath = path.join(process.cwd(), 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Data written successfully');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing to file:', err.message);
  });
};

await write();