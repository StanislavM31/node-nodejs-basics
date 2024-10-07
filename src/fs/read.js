
import { promises as fs } from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'files', 'fileToRead.txt');
  try {
    const fileExists = await fs.stat(filePath).catch(() => false);
    if (!fileExists) {
      throw new Error('FS operation failed');
    }
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
  } catch (error) {
    console.error(error.message);
  }
};

await read();