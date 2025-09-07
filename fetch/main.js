console.log("1. Asking for data...");

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log("2. Got something back! Converting it...");
    return response.json();
  })
  .then(data => {
    console.log("3. Here's the final data:");
    console.log(data);
  });

console.log("4. This runs immediately while we wait!");