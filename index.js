// Converts an async function into an AWS Lambda handler
const asyncToLambda = f => (event, context, callback) => 
  f(event, context)
    .then(x => callback(null, x))
    .catch(e => callback(e, null));

// Make sure you use a named export so that AWS can find your handler. 
export const handler = asyncToLambda(async (event, context) => {
  
  // -------------------------
  // Your code should go here. 
  // -------------------------

  console.log('Hello, world. ');
  return 'O' + await Promise.resolve('K'); // Use the latest features! 
});
