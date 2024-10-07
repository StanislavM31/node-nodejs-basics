import path from 'path';
import { promises as fs } from 'fs';

const remove = async () => {
  const filePath = path.join(process.cwd(), 'files', 'fileToRemove.txt');

  try {
    // check
    const fileExists = await fs.stat(filePath).catch(() => false);
    if (!fileExists) {
      throw new Error('FS operation failed: fileToRemove.txt does not exist');
    }
    
    // delete
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch (error) {
    console.error(error.message);
  }
};


await remove();