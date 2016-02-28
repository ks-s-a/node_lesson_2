var fs = require('fs');

// Get file info
fs.stat('./env.js', function (err, file) {
  if (err) 
    throw err;

  console.log('file is: ', file);
  console.log('.isFile() is: ', file.isFile());
});

// Read our file
fs.readFile('./fileWorks.js', function (err, data) {
  if (err) 
    throw err;

  console.log('data is: ', data);
});

// // Append data to test file
fs.appendFileSync('test-file.txt', 'Secret', function(err) {
  if (err) 
    throw err;
});

// // Write to test file
fs.writeFile('test-file.txt', 'tsss...', function(err) {
  if (err) 
    throw err;
});