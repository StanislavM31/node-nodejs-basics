import { writeFile, access } from "fs/promises";
import path from "path"; 
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt'); 

    try {

        await access(filePath);
        throw new Error("FS operation failed");
    } catch (error) {

        if (error.code !== 'ENOENT') {
            console.error(error.message);
            return; 
        }

        try {
            await writeFile(filePath, "I am fresh and young");
            console.log('File created successfully: fresh.txt');
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }
};

await create().catch(err => console.error(err));