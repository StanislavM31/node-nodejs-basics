import { promises as fs } from 'fs';
import path from 'path';
const rename = async () => {
  const oldPath = path.join(process.cwd(), 'src', 'fs', 'files', 'wrongFilename.txt');
  const newPath = path.join(process.cwd(), 'src', 'fs', 'files', 'properFilename.md');
  try {
    const oldFileExists = await fs.stat(oldPath).catch(() => false);
    if (!oldFileExists) {
      throw new Error('FS operation failed');
    }
    const newFileExists = await fs.stat(newPath).catch(() => false);
    if (newFileExists) {
      throw new Error('FS operation failed');
    }
    await fs.rename(oldPath, newPath);
    console.log('File renamed successfully');
  } catch (error) {
    console.error(error.message);
  }
};

await rename();