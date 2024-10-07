import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workerPath = path.join(process.cwd(), 'worker.js');
  const results = [];

  const createWorker = (value, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath);

      worker.postMessage(value);

      worker.on('message', (result) => {
        if (typeof result === 'object' && result.error) {
          results[index] = { threadStatus: 'error', data: null };
        } else {
          results[index] = { threadStatus: 'resolved', data: result };
        }
        resolve();
      });

      worker.on('error', () => {
        results[index] = { threadStatus: 'error', data: null };
        resolve();
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          results[index] = { threadStatus: 'error', data: null };
        }
        resolve();
      });
    });
  };

  const promises = [];
  for (let i = 0; i < numCores; i++) {
    promises.push(createWorker(10 + i, i));
  }

  await Promise.all(promises);

  console.log(results);
};

await performCalculations();