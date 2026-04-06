const fs = require('fs');

fs.writeFile('test.txt', 'Hello Shravan', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});