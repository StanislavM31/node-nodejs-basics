import { promises as fs } from 'fs';

import path from 'path';
const list = async () => {
  const folderPath = path.join(process.cwd(), 'files');
  try {
    const folderExists = await fs.stat(folderPath).catch(() => false);
    if (!folderExists) {
      throw new Error('FS operation failed');
    }
    const filenames = await fs.readdir(folderPath);
    console.log(filenames);
  } catch (error) {
    console.error(error.message);
  }
};

await list();