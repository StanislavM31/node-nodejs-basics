import { parentPort } from 'worker_threads';

// n from the main threads
const nFibo = (n) => n < 2 ? n : nFibo(n - 1) + nFibo(n - 2);

parentPort.on('message', (n) => {
    try {
        const result = nFibo(n);
        parentPort.postMessage(result);
      } catch (err) {
        parentPort.postMessage({ error: err.message });
      }
  });