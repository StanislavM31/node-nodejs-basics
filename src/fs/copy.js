import path from 'path';
import { promises as fs } from 'fs';

const copy = async () => { 
  const sourceFolderPath = path.join(process.cwd(), 'files');
  const destinationFolderPath = path.join(process.cwd(), 'files_copy'); 

  try {

    const sourceFolderExists = await fs.stat(sourceFolderPath).catch(() => false);
    if (!sourceFolderExists) {
      throw new Error('FS operation failed: Source folder does not exist');
    }


    const destinationFolderExists = await fs.stat(destinationFolderPath).catch(() => false);
    if (destinationFolderExists) {
      throw new Error('FS operation failed: Destination folder already exists');
    }


    await fs.cp(sourceFolderPath, destinationFolderPath, { recursive: true });
    console.log('Folder files_copy copied successfully');
  } catch (error) {
    console.error(error.message);
  }
};

await copy();