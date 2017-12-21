import { handler } from './index.js';

// Converts an AWS Lambda handler into an async function
const lambdaToAsync = f => (event, context) => 
  new Promise((resolve, reject) => {
    f(event, context, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

const event = {
  "key1": "value1",
  "key2": "value2",
  "key3": "value3",
};

const context = null;

lambdaToAsync(handler)(event, context).catch(e => console.error(e));
