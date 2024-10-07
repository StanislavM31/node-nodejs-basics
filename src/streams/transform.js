import { Transform } from 'stream';

const transform = async () => {
    // введите слово, а программа его перевернет
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedData = chunk.toString().split('').reverse().join('') + '\n';
      callback(null, reversedData);
    }
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  reverseStream.on('error', (err) => {
    console.error('Error during transformation:', err.message );
  });
};

await transform();

//node transform.js from this dir
// to stop  "ctrl+c"